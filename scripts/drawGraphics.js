function drawBackground() {
    var gridSize = 32, i = 0, n = 0;
    ctx.strokeStyle = "#C4C4C4";
    for (i = 0; i < (c.width / gridSize); i += 1) {
        ctx.beginPath();
        ctx.moveTo(i * gridSize, 0);
        ctx.lineTo(i * gridSize, c.height);
        ctx.stroke();
        ctx.closePath();
    }
    for (n = 0; n < (c.height / gridSize); n += 1) {
        ctx.beginPath();
        ctx.moveTo(0, n * gridSize);
        ctx.lineTo(c.width, n * gridSize);
        ctx.stroke();
        ctx.closePath();
    }
}

function drawManager() {
    drawBackground();
}

function onload() {
    console.log("loaded");
	var drawtimer = setInterval(drawManager, 100 / 60);
}
