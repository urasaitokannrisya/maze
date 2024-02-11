const maze_html = document.querySelector("#table");
const tate = 31, yoko = 31;
const gamen_size=11;
const gamen_naka=gamen_size/2-0.5;
const size = 60;
const mukiArray = [
    [-1, 0], [0, 1], [1, 0], [0, -1]
];
const maze_Array = [];
for (let i = 0; i < tate; i++) {
    maze_Array.push(new Array(yoko).fill(0));
}

var zahyou={x:1,y:1}
var mae_zahyou={x:1,y:1}

function hantei(y, x, muki) {
    let newY = y + mukiArray[muki][0];
    let newX = x + mukiArray[muki][1];

    if (newY < 0 || newY >= tate || newX < 0 || newX >= yoko || maze_Array[newY][newX] === 1) {
        return false;
    }
    if (muki === 0 && newY !== 1) {
        return false;
    }
    maze_Array[newY][newX] = 1;
    return true;
}

function init() {
    for (let i = 0; i < tate; i++) {
        for (let j = 0; j < yoko; j++) {
            if (i === 0 || j === 0 || i === tate - 1 || j === yoko - 1 || (i % 2 === 0 && j % 2 === 0)) {
                maze_Array[i][j] = 1;
                if (!(i === 0 || j === 0 || i === tate - 1 || j === yoko - 1)) {
                    while (!hantei(i, j, Math.floor(Math.random() * 4))) {};
                }
            }
        }
    }
}

function drow_maze() {
    let htmlText = "";
    for (let i =zahyou.y-gamen_naka ; i < gamen_size+zahyou.y-gamen_naka; i++) {
        htmlText += "<tr>";
        for (let j = zahyou.x-gamen_naka; j< gamen_size+zahyou.x-gamen_naka; j++) {

				if(i===tate-2&&j===yoko-2){
				htmlText += `<td><img src="dots3.PNG" width="${size}px"></td>`;
				}else if(i===zahyou.y&&j===zahyou.x){
				htmlText += `<td><img src="dots2.PNG" width="${size}px"></td>`;
				
				}else if(i<0||j<0||i>=tate||j>=yoko){
				htmlText += `<td><img src="dots0.PNG" width="${size}px"></td>`;
				}else{
            htmlText += `<td><img src="dots${maze_Array[i][j]}.PNG" width="${size}px"></td>`;
				}
        }
        htmlText += "</tr>";
    }

if(zahyou.y===tate-2&&zahyou.x===yoko-2){
maze_html.innerHTML=`<tr><td><img src="dots3.PNG" width="${size*gamen_size}"></td></tr>`
}else{
    maze_html.innerHTML = htmlText;
}

}

function ikeruka(y,x){
if(maze_Array[y][x]){
return false;
}else{
return true;
}
}

function idou(key){
			switch(key){
				case "w":
				zahyou.y+=mukiArray[0][0];
				zahyou.x+=mukiArray[0][1];
				 break;
				case "d":
				zahyou.y+=mukiArray[1][0];
				zahyou.x+=mukiArray[1][1];
				 break;
				case "s":
				zahyou.y+=mukiArray[2][0];
				zahyou.x+=mukiArray[2][1];
				 break;
				case "a":
				zahyou.y+=mukiArray[3][0];
				zahyou.x+=mukiArray[3][1];
				 break;
				
			}
}




document.addEventListener("keydown", function (event) {
    if (event.key === 'w' || event.key === 's' || event.key === 'a' || event.key === 'd') {
			
			idou(event.key);
			if(!ikeruka(zahyou.y,zahyou.x)){
			zahyou.y=mae_zahyou.y;
			zahyou.x=mae_zahyou.x;
			
			}else{
			mae_zahyou.y=zahyou.y;
			mae_zahyou.x=zahyou.x;
			
			drow_maze();
			}
			
			
    }
});
 


init();
drow_maze();
