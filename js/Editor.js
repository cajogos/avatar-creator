MINI_YOU.Editor = function(editorElement)
{
	this._element = editorElement;

	var self = this;
	this._element.on('keyup', function(e)
	{
		self.parseText();		
	});
};
MINI_YOU.Editor.prototype.constructor = MINI_YOU.Editor;

MINI_YOU.Editor.prototype.parseText = function()
{
	var text = this._element.val();
	try
	{
		var jsonText = JSON.parse(text);
		this._element.css({
			'background': 'black',
			'color': 'white'
		});
	}
	catch (e)
	{
		this._element.css({
			'background': 'salmon',
			'color': 'red'
		});
	}
};