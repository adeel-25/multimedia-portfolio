// get canvas
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

// sky background
ctx.fillStyle = "skyblue";
ctx.fillRect(0,0,600,400);

// ground
ctx.fillStyle = "green";
ctx.fillRect(0,300,600,100);

// sun
ctx.beginPath();
ctx.arc(500,80,40,0,Math.PI*2);
ctx.fillStyle = "yellow";
ctx.fill();
ctx.stroke();

// house
ctx.fillStyle = "brown";
ctx.fillRect(200,200,200,100);

// roof
ctx.beginPath();
ctx.moveTo(200,200);
ctx.lineTo(300,130);
ctx.lineTo(400,200);
ctx.closePath();
ctx.fillStyle="red";
ctx.fill();

// door
ctx.fillStyle="black";
ctx.fillRect(285,240,30,60);

// windows
ctx.fillStyle="lightblue";
ctx.fillRect(220,220,40,30);
ctx.fillRect(340,220,40,30);

// caption text
ctx.fillStyle="black";
ctx.font="20px Arial";
ctx.fillText("My Cartoon House",220,30);

// grass using for loop + translate
for(let i=0;i<20;i++){
    ctx.save();
    ctx.translate(i*30,0);

    ctx.beginPath();
    ctx.moveTo(10,300);
    ctx.lineTo(15,285);
    ctx.lineTo(20,300);
    ctx.stroke();

    ctx.restore();
}
