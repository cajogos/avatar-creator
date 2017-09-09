$(document).ready(function()
{
	var canvasElement = $('canvas#creator');
	var creator = new MINI_YOU.Creator(canvasElement);

	var editorElement = $('textarea.code-input');
	var editor = new MINI_YOU.Editor(editorElement);

});