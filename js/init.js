$(document).ready(function()
{
	var canvasElement = $('canvas#creator');
	var creator = new MINI_YOU.Creator(canvasElement);

	console.log(creator);
});