MINI_YOU.Creator = function(canvas)
{
	this._canvas = canvas[0];
	this._ctx = this._canvas.getContext('2d');

	this._ctx.fillStyle = 'rgb(255, 255, 255)';
	this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);

};
MINI_YOU.Creator.prototype.constructor = MINI_YOU.Creator;

MINI_YOU.Creator.prototype.get2DContext = function()
{
	return this._ctx;
};