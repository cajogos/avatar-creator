/**
 * @param {MINI_YOU.Canvas} canvas
 * @constructor
 */
MINI_YOU.Avatar = function (canvas)
{
    this._canvas = canvas;
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

MINI_YOU.Avatar.SHIRTS = {
    SHIRT: {
        POINTS: [
            [128, 160], [352, 160], [352, 288], [304, 288],
            [304, 208], [304, 320], [176, 320], [176, 208],
            [176, 288], [128, 288], [128, 160]
        ]
    },
    T_SHIRT: {
        POINTS: [
            [128, 160], [352, 160], [352, 224], [304, 224],
            [304, 208], [304, 320], [176, 320], [176, 208],
            [176, 224], [128, 224], [128, 160]
        ]
    }
};

/**
 * @private
 */
MINI_YOU.Avatar.prototype._init = function ()
{
    // Start the drawing flag
    this._needsDrawing = true;

    /*** Initialize defaults ***/
    let ctx = this._canvas.get2DContext();
    ctx.strokeStyle = 'black';

    // Body
    this._bodyShape = MINI_YOU.Avatar.BODY_SHAPE_1;
    this._bodyColor = 'lightgreen';

    // Shirt
    this._shirtShape = MINI_YOU.Avatar.SHIRTS.SHIRT;
    this._shirtColor = 'red';


    this._draw(); // Do initial drawing
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

        // Draw shirt
        this._drawShirt(this.getShirtShape(), this.getShirtColor());


        this._needsDrawing = false;
    }
};

MINI_YOU.Avatar.prototype.processData = function (data)
{
    // Body
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

    // Shirt
    if (typeof data.shirt !== 'undefined')
    {
        // Shirt shape
        if (typeof data.shirt.shape !== 'undefined')
        {
            let shirtShape = data.shirt.shape;
            switch (shirtShape)
            {
                case 'tshirt':
                    this.setShirtShape(MINI_YOU.Avatar.SHIRTS.T_SHIRT);
                    break;
                case 'shirt':
                default:
                    this.setShirtShape(MINI_YOU.Avatar.SHIRTS.SHIRT);
            }
        }
        // Shirt color
        if (typeof data.shirt.color !== 'undefined')
        {
            this.setShirtColor(data.shirt.color);
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

/**
 * @returns {Object}
 */
MINI_YOU.Avatar.prototype.getShirtShape = function ()
{
    return this._shirtShape;
};

/**
 * @param {Object} shirtShape
 */
MINI_YOU.Avatar.prototype.setShirtShape = function (shirtShape)
{
    this._shirtShape = shirtShape;
    this._needsDrawing = true;
};

/**
 * @returns {string}
 */
MINI_YOU.Avatar.prototype.getShirtColor = function ()
{
    return this._shirtColor;
};

/**
 * @param {string} color
 */
MINI_YOU.Avatar.prototype.setShirtColor = function (color)
{
    this._shirtColor = color;
    this._needsDrawing = true;
};

/**
 * @param {Object} shirtShape
 * @param {string} color
 * @private
 */
MINI_YOU.Avatar.prototype._drawShirt = function (shirtShape, color)
{
    let ctx = this._canvas.get2DContext();
    ctx.fillStyle = color;
    this._canvas.drawPolygon(shirtShape.POINTS[0][0], shirtShape.POINTS[0][1], shirtShape.POINTS, true, true);
};