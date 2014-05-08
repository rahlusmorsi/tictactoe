

var canvas=document.getElementById('gameboard');
var ctx=canvas.getContext('2d');
ctx.font="100px Courier";
ctx.textBaseline="middle"; 

console.log(canvas,ctx);

//save for possible optimization for drawing board
/*var gameboardLine = [
	["100,10","100,290"],
	["200,10","200,290"],
	["10,100","290,100"],
	["10,200","290,200"],
]*/


function drawGameboard(){
	ctx.strokeStyle='#444';

	ctx.moveTo(100,10);
	ctx.lineTo(100,290);
	ctx.stroke();

	ctx.moveTo(200,10);
	ctx.lineTo(200,290);
	ctx.stroke();

	ctx.moveTo(10,100);
	ctx.lineTo(290,100);
	ctx.stroke();

	ctx.moveTo(10,200);
	ctx.lineTo(290,200);
	ctx.stroke();
}
drawGameboard();

/*
[20, 50] [120, 50] [220, 50]
[20,150] [120,150] [220,150]
[20,250] [120,250] [220,250]
*/


/*ctx.fillText("x",120,150);
ctx.fillText("o",220, 50);
ctx.fillText("x",120,250);
ctx.fillText("o",120, 50);
ctx.fillText("x", 20, 50);
ctx.fillText("o",220,250);
ctx.fillText("x",220,150);
ctx.fillText("o", 20,150);
ctx.fillText("x", 20,250);
*/

var gamePlay = [
	["x",120,150],
	["o",220, 50],
	["x",120,250],
	["o",120, 50],
	["x", 20, 50],
	["o",220,250],
	["x",220,150],
	["o", 20,150],
	["x", 20,250]
];
//i<gamePlay.length;




var i=0;
var myIntervalHandle = setInterval(function(){
	console.log(i, gamePlay.length)
	ctx.fillText( gamePlay[i][0], gamePlay[i][1], gamePlay[i][2] );
	i++;
	if(i>gamePlay.length-1){
		clearInterval(myIntervalHandle);
	}
},1000)