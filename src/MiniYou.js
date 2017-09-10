var MINI_YOU = {
    EDITOR: undefined,
    CANVAS: undefined,
    initialized: false
};

/**
 *
 * @param {jQuery|HTMLElement} editorElement
 * @param {jQuery|HTMLElement} canvasElement
 */
MINI_YOU.init = function (editorElement, canvasElement)
{
    MINI_YOU.EDITOR = new MINI_YOU.Editor(editorElement);
    MINI_YOU.CANVAS = new MINI_YOU.Canvas(canvasElement);
    MINI_YOU.EDITOR.attachListener(MINI_YOU.CANVAS);
    MINI_YOU.initialized = true;
};