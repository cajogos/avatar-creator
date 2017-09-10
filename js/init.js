$(document).ready(function ()
{
    const canvasElement = $('canvas#creator');
    const editorElement = $('textarea.code-input');

    // Start the MINI_YOU object
    MINI_YOU.init(editorElement, canvasElement);


    let points = [
        [60, 30],
        [60, 90],
        [120, 90]
    ];
    MINI_YOU.CANVAS.get2DContext().fillStyle = 'blue';

    MINI_YOU.CANVAS.drawPolygon(30, 30, points, true);

    let code = `{
    "info": {
        "name": "Carlos",
        "author": "cajogos@github"
     }
}`;
    MINI_YOU.EDITOR.setText(code);
});