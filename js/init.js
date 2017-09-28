$(document).ready(function ()
{
    const canvasElement = $('canvas#creator');
    const editorElement = $('textarea.code-input');

    // Start the MINI_YOU object
    MINI_YOU.init(editorElement, canvasElement);

    let testCode =
`{
    "info": {
        "name": "Carlos",
        "author": "cajogos@github"
    },
    "body": {
        "shape": "shape1",
        "color": "lightblue"
    },
    "eyes": {
        "shape": "basic",
        "color": "red"
    },
    "tops": {
        "shape": "vneck",
        "color": "purple"
    },
    "bottoms": {
        "shape": "shorts",
        "color": "blue"
    },
    "shoes": {
        "color": "brown"
    }
}`;
    MINI_YOU.EDITOR.setText(testCode);
});