function drawCircle(x, y, size) {
	//Draw a circle using the given parameters.
    ctx.save();
    ctx.strokeStyle = "#555555";
	ctx.lineWidth = 5;
	ctx.fillStyle = document.getElementById("color").value;
	ctx.beginPath();
	ctx.arc(x, y, size + 2, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	ctx.restore();
}

function handlesDrawing(x, y, size, shape) {
    if (shape === "circle") {
        drawCircle(x, y, size);
    }
}