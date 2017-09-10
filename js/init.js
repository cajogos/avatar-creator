$(document).ready(function()
{
	var canvasElement = $('canvas#creator');
    var editorElement = $('textarea.code-input');

    // Start the MINI_YOU object
    MINI_YOU.init(editorElement, canvasElement);

    MINI_YOU.EDITOR.attachListener(MINI_YOU.CANVAS);
});