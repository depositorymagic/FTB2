function drawBackground(e) {
    var gridSize = 32, i = 0, n = 0;
    ctx.strokeStyle = "#C4C4C4";
    for (i = 0; i < (c.width / gridSize); i += 1) {
        ctx.beginPath();
        ctx.moveTo(i * gridSize + offset.x, 0);
        ctx.lineTo(i * gridSize + offset.x, c.height);
        ctx.stroke();
        ctx.closePath();
    }
    for (n = 0; n < (c.height / gridSize); n += 1) {
        ctx.beginPath();
        ctx.moveTo(0, n * gridSize + offset.y);
        ctx.lineTo(c.width, n * gridSize + offset.y);
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
    
    offset.x = offset.x % 32;
    offset.y = offset.y % 32;
}

function drawBullets() {
    for (var i = 0; i < bullets.length; i += 1) {
        handlesDrawing(bullets[i].x, bullets[i].y, bullets[i].size, bullets[i].shape);
    }
}

function tickManager() {
    ctx.clearRect(0, 0, c.width, c.height);
    handleInput();
    drawBackground();
    drawBullets();
    console.log(offset.x + ", " + offset.y);
}

function onload() {
    bullets[0] = new Bullet(c.width / 2, c.height / 2, 32, "circle");
    console.log("loaded");
	var drawtimer = setInterval(tickManager, 100 / 60);
}

function resize() {
	c.width = window.innerWidth;
	c.height = window.innerHeight;
	tickManager();
}
resize();

window.onresize = resize;