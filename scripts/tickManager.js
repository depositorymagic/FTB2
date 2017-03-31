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
    
    if (mouse.held === true) {
        for (var n = 0; n < bullets[0].barells.length; n += 1) {
            console.log("shot a bullet");
            bullets[bullets.length] = bullets[0].barells[n].bullet;
        }
    }
    
    offset.x += accel.x;
    offset.y += accel.y;
    
    offset.x = offset.x % 32;
    offset.y = offset.y % 32;
}

function drawTanks() {
    for (var i = 0; i < bullets.length; i += 1) {
        bullets[i].shape.x += bullets[i].speed;
        for (var n = 0; n < bullets[i].barells.length; n += 1) {
            handlesDrawing(bullets[i].barells[n].shape);
             bullets[i].barells[n].shape.x += bullets[i].speed;
            if ((bullets[i].barells[n].reload === 0) && (i > 0)) {
                bullets[bullets.length] = bullets[i].barells[n].bullet;
                bullets[i].barells[n].reload = 60;
            } else {
                bullets[i].barells[n].reload -= 1;
            }
        }
        handlesDrawing(bullets[i].shape);
        if (bullets[i].lifetime > 0) {
            bullets[i].lifetime -= 1;
        } else if (bullets[i].lifetime != -1) {
            bullets.splice(i);
        }
    }
}

function tickManager() {
    ctx.clearRect(0, 0, c.width, c.height);
    handleInput();
    drawBackground();
    drawTanks();
}

function onload() {
    bulletLib[0] = new Bullet(new Circle(c.width / 2, c.height / 2, 20), 0.1, 6000, 0);
    bulletLib[1] = new Bullet(new Circle(c.width / 2, c.height / 2, 10), 0.2, 6000, 0);
    bulletLib[0].barells[0] = new Barell(new Rectangle(c.width / 2, c.height / 2 - 16, 32, 100), 0, bulletLib[1], 60);
    bullets[0] = new Bullet(new Circle(c.width / 2, c.height / 2, 32), 0, -1, 0);
    bullets[0].barells[0] = new Barell(new Rectangle(bullets[0].shape.x, bullets[0].shape.y - 16, 32, 100), 0, bulletLib[0], 60);
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