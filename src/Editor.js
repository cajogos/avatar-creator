MINI_YOU.Editor = function (editorElement)
{
    this._element = editorElement;

    this._compiler = new MINI_YOU.Compiler();

    this._listeners = [];

    let self = this;
    this._element.on('keyup', function (e)
    {
        self.parseText();
    });
    this._element.on('keydown', function (e)
    {
        switch (e.keyCode)
        {
            case 9: // Tab Key
                e.preventDefault();
                let start = $(this).get(0).selectionStart;
                let end = $(this).get(0).selectionEnd;
                $(this).val($(this).val().substring(0, start) + "    " + $(this).val().substring(end));
                $(this).get(0).selectionStart = $(this).get(0).selectionEnd = start + 4;
                break;
        }
    });
};
MINI_YOU.Editor.prototype.constructor = MINI_YOU.Editor;

MINI_YOU.Editor.prototype.attachListener = function (listener)
{
    this._listeners.push(listener);
};

MINI_YOU.Editor.prototype._alertListeners = function (message, data)
{
    for (let i = 0; i < this._listeners.length; i++)
    {
        this._listeners[i].handleEditorAlert(message, data);
    }
};

MINI_YOU.Editor.prototype.parseText = function ()
{
    let text = this._element.val();
    try
    {
        let result = this._compiler.compileCode(text);

        this._element.css({
            'background': 'black',
            'color': 'white'
        });

        this._alertListeners('jsonChanged', result);
    }
    catch (e)
    {
        console.error(e);
        this._element.css({
            'background': 'darkred',
            'color': 'red'
        });
    }
};

MINI_YOU.Editor.prototype.setText = function (text)
{
    this._element.val(text);
    this.parseText();
};