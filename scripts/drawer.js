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

function drawRectangle(x, y, width, length) {
	ctx.save();
    ctx.strokeStyle = "#555555";
	ctx.lineWidth = 5;
	ctx.fillStyle = "#999999";
    ctx.fillRect(x, y, length, width);
    ctx.strokeRect(x, y, length, width);
    ctx.restore();
}

function handlesDrawing(shape) {
    if (shape.type === "circle") {
        drawCircle(shape.x, shape.y, shape.size);
    } else if (shape.type === "rectangle") {
        drawRectangle(shape.x, shape.y, shape.width, shape.length);
    }
}