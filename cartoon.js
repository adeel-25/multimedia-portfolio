// Get canvas and context
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

// Sky background
ctx.fillStyle = "lightblue";
ctx.fillRect(0, 0, 800, 400);

// Ground
ctx.fillStyle = "green";
ctx.fillRect(0, 350, 800, 50);

// Sun
ctx.beginPath();
ctx.arc(700, 80, 40, 0, Math.PI * 2);
ctx.fillStyle = "yellow";
ctx.fill();

// Caption text
ctx.fillStyle = "black";
ctx.font = "20px Arial";
ctx.fillText("My Robot Cartoon", 320, 40);

// Robot body
ctx.fillStyle = "gray";
ctx.fillRect(350, 200, 100, 120);

// Robot head
ctx.fillStyle = "silver";
ctx.fillRect(360, 150, 80, 50);

// Robot eyes
ctx.fillStyle = "blue";
ctx.fillRect(375, 165, 15, 15);
ctx.fillRect(410, 165, 15, 15);

// Robot mouth
ctx.fillStyle = "black";
ctx.fillRect(385, 190, 40, 5);

// Robot arms
ctx.fillStyle = "gray";
ctx.fillRect(320, 210, 30, 10);
ctx.fillRect(450, 210, 30, 10);

// Robot legs
ctx.fillRect(370, 320, 15, 40);
ctx.fillRect(415, 320, 15, 40);

// Antenna
ctx.beginPath();
ctx.moveTo(400, 150);
ctx.lineTo(400, 130);
ctx.stroke();

ctx.beginPath();
ctx.arc(400, 125, 5, 0, Math.PI * 2);
ctx.fillStyle = "red";
ctx.fill();


// Fence using for loop + translate
for (let i = 0; i < 8; i++) {
    ctx.save();
    ctx.translate(i * 60, 0);
    ctx.fillStyle = "brown";
    ctx.fillRect(50, 320, 10, 30);
    ctx.restore();
}
