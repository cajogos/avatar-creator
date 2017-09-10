/**
 * @param canvas
 * @constructor
 */
MINI_YOU.Canvas = function(canvas)
{
	this._canvas = canvas[0];
	this._ctx = this._canvas.getContext('2d');

	this._width = this._canvas.width;
	this._height = this._canvas.height;

	this._avatar = new MINI_YOU.Avatar(this);
};
MINI_YOU.Canvas.prototype.constructor = MINI_YOU.Canvas;

/**
 * @returns {CanvasRenderingContext2D|*}
 */
MINI_YOU.Canvas.prototype.get2DContext = function()
{
	return this._ctx;
};

MINI_YOU.Canvas.prototype.handleEditorAlert = function(message, data)
{
	console.log('editor alert!', message, data);
};

MINI_YOU.Canvas.prototype.getWidth = function()
{
	return this._width;
};

MINI_YOU.Canvas.prototype.getHeight = function()
{
	return this._height;
};