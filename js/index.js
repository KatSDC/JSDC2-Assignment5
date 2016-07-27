//Model

var count = 0;

//View

function renderCount() {
	var source = $('#count-template').html();
	var template = Handlebars.compile(source);

	var countHtml = template({
		count: count,
		high: count > 100,
		low: count < 0
	});
	$('#count-container').html(countHtml);
}

//Model
function setup() {
	renderCount();

	$('#subtract').on('click', subtract);
	$('#reset').on('click', resetCount);
	$('#add').on('click', add);
}

function subtract() {
	count--;

	renderCount();
}

function resetCount() {
	count = 0;

	renderCount();
}

function add() {
	count++;

	renderCount();
}

$(document).ready(setup);