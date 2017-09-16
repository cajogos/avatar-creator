/**
 * @param {MINI_YOU.Canvas} canvas
 * @constructor
 */
MINI_YOU.Avatar = function (canvas)
{
    this._canvas = canvas;
    this._needsDrawing = true;
    this._init();
};
MINI_YOU.Avatar.prototype.constructor = MINI_YOU.Avatar;

/**
 * @type {Object}
 */
MINI_YOU.Avatar.BODY_SHAPE_1 = {
    POINTS: [
        [224, 144], [192, 144], [192, 64], [288, 64], [288, 144], [256, 144],
        [256, 160], [352, 160],
        // Left Arm
        [352, 320], [304, 320], [304, 208], [304, 320],
        // Left Leg
        [304, 464], [256, 464], [256, 320],
        // Torso
        [224, 320],
        // Right Leg
        [224, 464], [176, 464], [176, 320],
        // Right Arm
        [176, 208], [176, 320], [128, 320], [128, 160], [224, 160]
    ]
};

/**
 * @private
 */
MINI_YOU.Avatar.prototype._init = function ()
{
    let ctx = this._canvas.get2DContext();
    ctx.strokeStyle = 'black';

    this.setBodyShape(MINI_YOU.Avatar.BODY_SHAPE_1);
    this.setBodyColor('#CCC');

    this._draw();
};

/**
 * @private
 */
MINI_YOU.Avatar.prototype._draw = function ()
{
    if (this._needsDrawing)
    {
        // Draw  body
        this._drawBody(this.getBodyShape(), this.getBodyColor());
    }
};

MINI_YOU.Avatar.prototype.processData = function (data)
{
    if (typeof data.body !== 'undefined')
    {
        // Body shape
        if (typeof data.body.shape !== 'undefined')
        {
            let bodyShape = data.body.shape;
            switch (bodyShape)
            {
                case 'shape1':
                default:
                    this.setBodyShape(MINI_YOU.Avatar.BODY_SHAPE_1);
            }
        }
        // Body color
        if (typeof data.body.color !== 'undefined')
        {
            this.setBodyColor(data.body.color);
        }
    }

    // Set the drawing!
    this._draw();
};

/**
 * @param {Object} shape
 */
MINI_YOU.Avatar.prototype.setBodyShape = function (shape)
{
    this._bodyShape = shape;
    this._needsDrawing = true;
};

/**
 * @returns {Object}
 */
MINI_YOU.Avatar.prototype.getBodyShape = function ()
{
    return this._bodyShape;
};

/**
 * @param {string} color
 */
MINI_YOU.Avatar.prototype.setBodyColor = function (color)
{
    this._bodyColor = color;
    this._needsDrawing = true;
};

/**
 * @returns {string}
 */
MINI_YOU.Avatar.prototype.getBodyColor = function ()
{
    return this._bodyColor;
};

/**
 * @param {Object} bodyShape
 * @param {string} color
 * @private
 */
MINI_YOU.Avatar.prototype._drawBody = function (bodyShape, color)
{
    let ctx = this._canvas.get2DContext();
    ctx.fillStyle = color;
    this._canvas.drawPolygon(bodyShape.POINTS[0][0], bodyShape.POINTS[0][1], bodyShape.POINTS, true, true);
};