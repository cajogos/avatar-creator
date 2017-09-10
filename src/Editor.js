MINI_YOU.Editor = function (editorElement)
{
    this._element = editorElement;

    this._listeners = [];

    var self = this;
    this._element.on('keyup', function (e)
    {
        self.parseText();
    });
};
MINI_YOU.Editor.prototype.constructor = MINI_YOU.Editor;

MINI_YOU.Editor.prototype.attachListener = function (listener)
{
    this._listeners.push(listener);
};

MINI_YOU.Editor.prototype._alertListeners = function(message, data)
{
    for (var i = 0; i < this._listeners.length; i++)
    {
        this._listeners[i].handleEditorAlert(message, data);
    }
};

MINI_YOU.Editor.prototype.parseText = function ()
{
    var text = this._element.val();
    try
    {
        var jsonText = JSON.parse(text);
        this._element.css({
            'background': 'black',
            'color': 'white'
        });

        this._alertListeners('jsonChanged', jsonText);
    }
    catch (e)
    {
        this._element.css({
            'background': 'salmon',
            'color': 'red'
        });
    }
};