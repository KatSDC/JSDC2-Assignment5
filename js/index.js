//Model

var counter = 0;

//View

function renderCounter() {
	if (counter > 99) {
		$('h3').css('color', 'red');
	} else if (counter < 0) {
		$('h3').css('color', 'blue');
	} else {
		$('h3').css('color', 'black');
	}
	$('#counter').html(counter);
}

//Model
function setup() {
	renderCounter();

	$('#subtract').on('click', subtractNumber);
	$('#reset').on('click', resetCounter);
	$('#add').on('click', addNumber);
}

function subtractNumber() {
	counter -= 1;

	renderCounter();
}

function resetCounter() {
	counter = 0;

	renderCounter();
}

function addNumber() {
	counter += 1;

	renderCounter();
}

$(document).ready(setup);