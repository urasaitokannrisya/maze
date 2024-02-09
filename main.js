const maze_html=document.querySelector("#table");
const tate=5,yoko=5;
var px=50;
var maze_Array=new Array(tate).fill(new Array(yoko).fill(0));
let randamu=0;

function hantei(y,x,muki){
if(maze_Array[x][y]===1){
return false;
}
if(muki===0&&y!==2){
return false
}
maze_Array[x][y]=1;
return true;
}

function init(){

	for(let i=0;i<tate;i++){
		for(let j=0;j<yoko;j++){
		
			if(i===0||j===0||i===tate||j===yoko||(i%2===0&&j%2===0)){
				maze_Array[i][j]=1;
				if(!(i===0||j===0||i===tate||j===yoko)){
				randamu=Math.floor(Math.random()*4);
				while(!hantei(i,j,randamu)){randamu=Math.floor(Math.random()*4);};
				}
			}
			//alert(`${i}${j}`)
		}
	}
	
	
	
	
}

function drow_maze(){
htmlText="";
for(let i=0;i<tate;i++){
	htmlText=htmlText+"<tr>";
	
	for(let j=0;j<yoko;j++){
	htmlText=htmlText+`<td><img src="dots${maze_Array[i][j]}.PNG" width="${px}px"></td>`
	}
	
	htmlText=htmlText+"</tr>";
}
maze_html.innerHTML=htmlText;
}
/*
document.addEventListener('keydown', function (event) {
            if ((event.key === 'w') || (event.key === 's') || (event.key === 'a') || (event.key === 'd') || (event.key === ' ')) {
                main(event.key)
            }
        });

 */
init();
alert(maze_Array);
drow_maze();

