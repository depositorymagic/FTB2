var c = document.getElementById('game'),
ctx = c.getContext('2d');

ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;

var midPointX = c.width / 2;
var midPointY = c.height / 2;

var editMode = false;

var offset = {};
offset.x = 0;
offset.y = 0;
offset.totalx = 0;
offset.totaly = 0;

var accel = {};
accel.x = 0;
accel.y = 0;
accel.amount = 0.005;
accel.max = 1;

var input = {};
input.up = false;
input.down = false;
input.left = false;
input.right = false;
input.f = false;
input.autoSpin = false;
input.autofire = false;
input.shiftHeld = false;

var mouse = {};
mouse.x = 0;
mouse.y = 0;
mouse.held = false;
mouse.rightdown = false;

function editButtonClick() {
	if (editMode === false) {
		editMode = true;
		showhide("visible", "hidden", "hidden", "hidden", "visible", "hidden", "hidden");
	} else {
		editMode = false;
		showhide("hidden", "hidden", "hidden", "hidden", "hidden", "hidden", "hidden");
	}
}

function bodyClick() {
	showhide("visible", "visible", "hidden", "hidden", "hidden", "hidden", "hidden");
}

function barrelClick() {
	showhide("visible", "hidden", "visible", "hidden", "hidden", "hidden", "hidden");
}

function bulletClick() {
	showhide("visible", "hidden", "hidden", "visible", "hidden", "hidden", "hidden");
}

function saveClick() {
	showhide("visible", "hidden", "hidden", "hidden", "visible", "hidden", "hidden");
}

function infoClick() {
	showhide("visible", "hidden", "hidden", "hidden", "hidden", "visible", "hidden");
}

function settingsClick() {
	showhide("visible", "hidden", "hidden", "hidden", "hidden", "hidden", "visible");
}

function showhide(e, bo, ba, bu, sa, inf, se) {
	var elements = document.getElementsByClassName("editbuttons");

	for (var i = 0; i < elements.length; i++) {
		elements[i].style.visibility = e;
	}

	elements = document.getElementsByClassName("tanksettings");

	for (var i = 0; i < elements.length; i++) {
		elements[i].style.visibility = bo;
	}

	elements = document.getElementsByClassName("barrelsettings");

	for (var i = 0; i < elements.length; i++) {
		elements[i].style.visibility = ba;
	}

	elements = document.getElementsByClassName("bulletsettings");

	for (var i = 0; i < elements.length; i++) {
		elements[i].style.visibility = bu;
	}

	elements = document.getElementsByClassName("savesettings");

	for (var i = 0; i < elements.length; i++) {
		elements[i].style.visibility = sa;
	}
	
	elements = document.getElementsByClassName("infosettings");

	for (var i = 0; i < elements.length; i++) {
		elements[i].style.visibility = inf;
	}
	
	elements = document.getElementsByClassName("settingssettings");

	for (var i = 0; i < elements.length; i++) {
		elements[i].style.visibility = se;
	}
}

function validateField(value, returnval, ignoreneg) {
	if (value.length == 0) {
		return returnval;
	}
	if ((value < 0) && (ignoreneg !== true)) {
		return returnval;
	}
	if (isNaN(value) === true) {
		return returnval;
	} else {
		return value;
	}
}

function printObject() {
}

function clearShapes() {
	shapes = [];
}

function clearBullets() {
	bullets = [];
}

function importObject() {
}

function graClick() {
    if (newGraph === true) {
        newGraph = false;
        document.getElementById("graphicButton").innerHTML = "Old";
    } else if (newGraph === false) {
        newGraph = true;
        document.getElementById("graphicButton").innerHTML = "New";
    }
}

function ColorLuminance(hex, lum) {

	// validate hex string
	hex = String(hex).replace(/[^0-9a-f]/gi, '');
	if (hex.length < 6) {
		hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
	}
	lum = lum || 0;

	// convert to decimal and change luminosity
	var rgb = "#", c, i;
	for (i = 0; i < 3; i++) {
		c = parseInt(hex.substr(i*2,2), 16);
		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
		rgb += ("00"+c).substr(c.length);
	}

	return rgb;
}
