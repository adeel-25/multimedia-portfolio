let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

// background (sky)
ctx.fillStyle = "darkblue";
ctx.fillRect(0,0,800,400);

// moon
ctx.beginPath();
ctx.arc(650,80,40,0,Math.PI*2);
ctx.fillStyle = "white";
ctx.fill();

// ground
ctx.fillStyle = "green";
ctx.fillRect(0,320,800,80);

// house body
ctx.fillStyle = "brown";
ctx.fillRect(300,200,200,120);

// roof
ctx.beginPath();
ctx.moveTo(300,200);
ctx.lineTo(400,140);
ctx.lineTo(500,200);
ctx.fillStyle = "red";
ctx.fill();

// door
ctx.fillStyle = "black";
ctx.fillRect(380,250,40,70);

// windows
ctx.fillStyle = "lightblue";
ctx.fillRect(320,220,40,40);
ctx.fillRect(440,220,40,40);

// caption text
ctx.fillStyle = "white";
ctx.font = "24px Arial";
ctx.fillText("My Night House Cartoon",250,40);

// fence using for loop + translate
ctx.save();

ctx.translate(50,300);

for(let i=0;i<12;i++){
    ctx.fillStyle="white";
    ctx.fillRect(0,0,10,40);
    ctx.translate(50,0);
}

ctx.restore();
