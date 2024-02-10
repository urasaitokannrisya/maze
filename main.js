const maze_html = document.querySelector("#table");
const tate = 91, yoko = 91;
const gamen_size=11;
const size = 30;
const mukiArray = [
    [-1, 0], [0, 1], [1, 0], [0, -1]
];
const maze_Array = [];
for (let i = 0; i < tate; i++) {
    maze_Array.push(new Array(yoko).fill(0));
}

var zahyou={x:0,y:0}

function hantei(y, x, muki) {
    let newY = y + mukiArray[muki][0];
    let newX = x + mukiArray[muki][1];

    if (newY < 0 || newY >= tate || newX < 0 || newX >= yoko || maze_Array[newY][newX] === 1) {
        return false;
    }
    if (muki === 0 && newY !== 2) {
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
    for (let i =Math.floor(zahyou.y-gamen_size/2) ; i < gamen_size; i++) {
        htmlText += "<tr>";
        for (let j = Math.floor(zahyou.x-gamen_size/2); j < gamen_size; j++) {
				if(i<0||j<0){
				htmlText += `<td><img src="dots0.PNG" width="${size}px"></td>`;
				}else{
            htmlText += `<td><img src="dots${maze_Array[i][j]}.PNG" width="${size}px"></td>`;
				}
        }
        htmlText += "</tr>";
    }
    maze_html.innerHTML = htmlText;
}

var wsad=["w","d","s","a"];

document.addEventListener('keydown', function (event) {
    alert("aa");
    if (event.key === 'w' || event.key === 's' || event.key === 'a' || event.key === 'd') {
        alert("aaa");
        let muki = wsad.indexOf(event.key);
        zahyo.y += mukiArray[muki][0];
        zahyo.x += mukiArray[muki][1];
        drow_maze(); // drow_maze関数の呼び出し
    }
});



init();
drow_maze();
