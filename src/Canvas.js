/**
 * @param canvas
 * @constructor
 */
MINI_YOU.Canvas = function (canvas)
{
    this._canvas = canvas[0];
    this._ctx = this._canvas.getContext('2d');

    $(canvas).after('<div class="debugger"></div>');
    $(canvas).on('mousemove', function(e)
    {
        $('div.debugger').text('x: ' + e.offsetX + ' | y: ' + e.offsetY);
    });

    this._width = this._canvas.width;
    this._height = this._canvas.height;

    this._init();

    this._avatar = new MINI_YOU.Avatar(this);
};
MINI_YOU.Canvas.prototype.constructor = MINI_YOU.Canvas;

MINI_YOU.Canvas.prototype._init = function ()
{
    this._ctx.fillStyle = 'white';
    this._ctx.fillRect(0, 0, this._width, this._height);

    // Draw a grid
    this._ctx.strokeStyle = '#EAEAEA';
    let pixel = 16;

    let xValues = '';
    for (let i = 0; i < this._width; i += pixel)
    {
        this.drawLine(i, 0, i, this._height);
        xValues += i + ', ';
    }
    console.log(xValues);
    for (let j = 0; j < this._height; j += pixel)
    {
        this.drawLine(0, j, this._width, j);
    }
};

/**
 * @returns {CanvasRenderingContext2D|*}
 */
MINI_YOU.Canvas.prototype.get2DContext = function ()
{
    return this._ctx;
};

MINI_YOU.Canvas.prototype.handleEditorAlert = function (message, data)
{
    if (message === 'jsonChanged')
    {
        this._avatar.processData(data);
    }
};

MINI_YOU.Canvas.prototype.getWidth = function ()
{
    return this._width;
};

MINI_YOU.Canvas.prototype.getHeight = function ()
{
    return this._height;
};

MINI_YOU.Canvas.prototype.drawLine = function (startX, startY, endX, endY)
{
    this._ctx.beginPath();
    this._ctx.moveTo(startX, startY);
    this._ctx.lineTo(endX, endY);
    this._ctx.closePath();
    this._ctx.stroke();
};

MINI_YOU.Canvas.prototype.drawPolygon = function (startX, startY, points, fill, stroke)
{
    this._ctx.beginPath();
    this._ctx.moveTo(startX, startY);

    for (let i = 0; i < points.length; i++)
    {
        let curX = points[i][0];
        let curY = points[i][1];

        this._ctx.lineTo(curX, curY);
    }
    this._ctx.closePath();

    if (fill === true)
    {
        this._ctx.fill();
    }

    if (stroke === true)
    {
        this._ctx.stroke();
    }
};