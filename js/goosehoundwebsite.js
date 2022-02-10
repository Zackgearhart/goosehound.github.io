$("#menu, nav").click(function () {
	$("#mobileNavCover").show();
	$("#mobileNav").animate({
		right: "0"
	}, 200);
});

$("#mobileNavCover, #mobileNav a").click(function () {
	$("#mobileNavCover").hide();
	$("#mobileNav").animate({
		right: "-50vw"
	}, 100);
	$("#merchthing").css("display", "none");
    $("#merchthing").css("background-color", "none");
    $("#popoutbio").css("display", "none");
    $("#popoutbio").css("background-color", "none");
});
$("body").on("click", ".merch", function () {

	$("#mobileNavCover").show();
	$("#merchthing").css("display", "inline-block");

});

$("body").on("click", ".bio", function () {

	$("#mobileNavCover").show();
	$("#popoutbio").css("display", "inline-block");

});

function randomColor() {
	var r = parseInt(Math.random() * 256);
	var g = parseInt(Math.random() * 256);
	var b = parseInt(Math.random() * 256);
	return "rgb(" + r + "," + g + "," + b + ")";
}

var movX = parseInt(Math.random() * 5) + 1;
var movY = parseInt(Math.random() * 5) + 1;
var random = function () {
	$("#merchthing").css("background-color", randomColor());
    $("#merchthing").css("color", randomColor());
};

$("body").on("click", ".random", random);
$("body").on("click", ".random", function () {
	setInterval(random, 10);
});

var movX = parseInt(Math.random() * 1) + 1;
var movY = parseInt(Math.random() * 1) + 1;
var discochamp = function () {
	$("#discoball").css("display", "inline-block");
	var width = $("#discoCover").width();
	var height = $("#discoCover").height();
	var ballWidth = $("#discoball").width();
	var x = parseInt($("#discoball").css("left").split("px")[0]) + movX;
	var y = parseInt($("#discoball").css("top").split("px")[0]) + movY;
	if (x > width - ballWidth / 1) {
		movX = movX * -1;
	}
	if (y > height - ballWidth / 1) {
		movY = movY * -1;
	}
	if (x < 0 + ballWidth / 1) {
		movX = movX * -1;
	}
	if (y < 0 + ballWidth / 1) {
		movY = movY * -1;
	}
	$("#discoball").css("left", x);
	$("#discoball").css("top", y);
	$("#discoball").css("background-color", randomColor());
};
var godzillachamp = function () {
	$("#godzilla").css("display", "inline-block");
	var width = $("#picture").width();
	var height = $("#picture").height();
	var ballWidth = $("#godzilla").width();
	var x = parseInt($("#godzilla").css("left").split("px")[0]) + movX;
	var y = parseInt($("#godzilla").css("top").split("px")[0]) + movY;
	if (x > width - ballWidth / 1) {
		movX = movX * -1;
	}
	if (y > height - ballWidth / 1) {
		movY = movY * -1;
	}
	if (x < 0 + ballWidth / 1) {
		movX = movX * -1;
	}
	if (y < 0 + ballWidth / 1) {
		movY = movY * -1;
	}
	$("#godzilla").css("left", x);
	$("#godzilla").css("top", y);
	$("#godzilla").css("background-color", randomColor());
};
$("body").on("click", "#disco", function () {
    var discointerval = setInterval(discochamp);
var godzillainterval = setInterval(godzillachamp);
	$("#discoCover").show();
	discointerval = setInterval(discochamp, 10);
	godzillainterval = setInterval(godzillachamp, 1);
});
$("body").on("click", "#discoCover", function () {
   	$("#godzilla").css("height", 0);
	$("#discoball").css("height", 0);
	$("#discoCover").hide();
    $("#disco").remove();
	clearInterval(discochamp);
	clearInterval(godzillachamp);
});
