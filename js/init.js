$(document).ready(function ()
{
    const canvasElement = $('canvas#creator');
    const editorElement = $('textarea.code-input');

    // Start the MINI_YOU object
    MINI_YOU.init(editorElement, canvasElement);

    let code = `{
    "info": {
        "name": "Carlos",
        "author": "cajogos@github"
     },
    "head" : {
        "color": "blue"
    }
}`;
    MINI_YOU.EDITOR.setText(code);

});