function drawBackground() {
    var gridSize = 32, i = 0, n = 0;
    ctx.strokeStyle = "#C4C4C4";
    for (i = 0; i < (c.width / gridSize); i += 1) {
        ctx.beginPath();
        ctx.moveTo(i * gridSize + (offset.x % gridSize), 0);
        ctx.lineTo(i * gridSize + (offset.x % gridSize), c.height);
        ctx.stroke();
        ctx.closePath();
    }
    for (n = 0; n < (c.height / gridSize); n += 1) {
        ctx.beginPath();
        ctx.moveTo(0, n * gridSize + (offset.y % gridSize));
        ctx.lineTo(c.width, n * gridSize + (offset.y % gridSize));
        ctx.stroke();
        ctx.closePath();
    }
}

function handleInput() {
    if ((input.down === true) && (accel.y >= (accel.max * -1) + accel.amount)) {
        accel.y -= accel.amount;
    } else if (accel.y < 0){
        accel.y += accel.amount;
    }
    if ((input.up === true) && (accel.y <= accel.max - accel.amount)) {
        accel.y += accel.amount;
    } else if (accel.y > 0){
        accel.y -= accel.amount;
    }
    if ((input.left === true) && (accel.x >= (accel.max * -1) + accel.amount)) {
        accel.x -= accel.amount;
    } else if (accel.x < 0){
        accel.x += accel.amount;
    }
    if ((input.right === true) && (accel.x <= accel.max - accel.amount)) {
        accel.x += accel.amount;
    } else if (accel.x > 0) {
        accel.x -= accel.amount;
    }
    offset.x += accel.x;
    offset.y += accel.y;
}

function tickManager() {
    ctx.clearRect(0, 0, c.width, c.height);
    drawBackground();
    ctx.fillRect(midPointX - 25 + accel.x, midPointY - 25 + accel.y, 25, 25);
    handleInput();
    console.log(offset.x + ", " + offset.y);
}

function onload() {
    console.log("loaded");
	var drawtimer = setInterval(tickManager, 100 / 60);
}
