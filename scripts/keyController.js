function keyDownHandler(e) {
	"use strict";
	if ((e.keyCode === 65) || (e.keyCode === 37)) {
		input.right = true;
	}
	if ((e.keyCode === 68) || (e.keyCode === 39)) {
		input.left = true;
	}
	if ((e.keyCode === 87) || (e.keyCode === 38)) {
		input.up = true;
	}
	if ((e.keyCode === 83) || (e.keyCode === 40)) {
		input.down = true;
	}
	if (e.keyCode === 69) {
		if ((autofire === false) && (editMode === false)) {
			input.autofire = true;
		} else {
			input.autofire = false;
		}
	}
	if (e.keyCode === 67) {
		if ((autospin === false) && (editMode === false)) {
			input.autoSpin = true;
		} else {
			input.autoSpin = false;
		}
	}
	if (e.keyCode === 16) {
		input.shiftHeld = true;
	}
	if (e.keyCode === 81) {
        //Place a barrel
	}
	if (e.keyCode === 70) {
		input.f = true;
	}
	if (editMode === true) {
		if (e.keyCode === 90) {
			//undo();
		}
		if (e.keyCode === 88) {
			//redo();
		}
	}
}

function keyUpHandler(e) {
	"use strict";
	if ((e.keyCode === 65) || (e.keyCode === 37)) {
		input.right = false;
	}
	if ((e.keyCode === 68) || (e.keyCode === 39)) {
		input.left = false;
	}
	if ((e.keyCode === 87) || (e.keyCode === 38)) {
		input.up = false;
	}
	if ((e.keyCode === 83) || (e.keyCode === 40)) {
		input.down = false;
	}
	if (e.keyCode === 16) {
		shiftheld = false;
	}
	if (e.keyCode === 70) {
		input.f = false;
	}
}

function mousemove(e) {
}

function mousedown(e) {
	if (e.button === 0) {
		mouse.held = true;
	} else {
		mouse.rightdown = true;
	}
}

function mouseup(e) {
	if (e.button === 0) {
		mouse.held = false;
	} else {
		mouse.rightdown = false;
	}
}

//Set colour functions. Used in presets
function setColor(color) {
	document.getElementById("color").value = color;
}

document.addEventListener("mousemove", mousemove, false);
document.addEventListener("mousedown", mousedown, false);
document.addEventListener("mouseup", mouseup, false);
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
window.oncontextmenu = function () {
	return false;
};