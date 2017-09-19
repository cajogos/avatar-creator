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
    "body": {
        "shape": "shape1",
        "color": "lightblue"
    },
    "tops": {
        "shape": "vneck",
        "color": "purple"
    },
    "bottoms": {
        "shape": "shorts",
        "color": "blue"
    }
}`;
    MINI_YOU.EDITOR.setText(code);
});