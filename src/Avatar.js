/**
 * @param {MINI_YOU.Canvas} canvas
 * @constructor
 */
MINI_YOU.Avatar = function(canvas)
{
    this._canvas = canvas;

    this._initDraw();
};
MINI_YOU.Avatar.prototype.constructor = MINI_YOU.Avatar;

MINI_YOU.Avatar.prototype._initDraw = function()
{
    var ctx = this._canvas.get2DContext();
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, this._canvas.getWidth(), this._canvas.getHeight());
};


