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
        [304, 464], [256, 464], [256, 336],
        // Torso
        [224, 336],
        // Right Leg
        [224, 464], [176, 464], [176, 336],
        // Right Arm
        [176, 208], [176, 320], [128, 320], [128, 160], [224, 160]
    ]
};

MINI_YOU.Avatar.EYES = {
    BASIC: {
        LEFT: {
            X: 264,
            Y: 88
        },
        RIGHT: {
            X: 216,
            Y: 88
        }
    }
};

/**
 * @type {Object}
 */
MINI_YOU.Avatar.TOPS = {
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
    },
    VNECK: {
        POINTS: [
            [128, 160], [208, 160], [240, 192], [272, 160],
            [352, 160], [352, 224], [304, 224], [304, 208],
            [304, 320], [176, 320], [176, 208], [176, 224],
            [128, 224], [128, 160]
        ]
    }
};

/**
 * @type {Object}
 */
MINI_YOU.Avatar.BOTTOMS = {
    TROUSERS: {
        POINTS: [
            [176, 320], [304, 320], [304, 448], [256, 448],
            [256, 336], [224, 336], [224, 448], [176, 448]
        ]
    },
    SHORTS: {
        POINTS: [
            [176, 320], [304, 320], [304, 384], [256, 384],
            [256, 336], [224, 336], [224, 384], [176, 384]
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

    // Eyes
    this._eyesShape = MINI_YOU.Avatar.EYES.BASIC;
    this._eyesColor = 'royalblue';

    // Shirt
    this._topsShape = MINI_YOU.Avatar.TOPS.SHIRT;
    this._topsColor = 'red';

    // Trousers
    this._bottomsShape = MINI_YOU.Avatar.BOTTOMS.TROUSERS;
    this._bottomsColor = 'navy';

    // Shoes
    this._shoesColor = 'orange';

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

        // Draw eyes
        this._drawEyes(this.getEyesShape(), this.getEyesColor());

        // Draw tops
        this._drawTops(this.getTopsShape(), this.getTopsColor());

        // Draw bottoms
        this._drawBottoms(this.getBottomsShape(), this.getBottomsColor());

        // Draw shoes
        this._drawShoes(this.getShoesColor());

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

    // Eyes
    if (typeof data.eyes !== 'undefined')
    {
        // Eyes shape
        if (typeof data.eyes.shape !== 'undefined')
        {
            let eyesShape = data.eyes.shape;
            switch (eyesShape)
            {
                case 'basic':
                default:
                    this.setEyesShape(MINI_YOU.Avatar.EYES.BASIC);
            }
        }
        // Eyes color
        if (typeof data.eyes.color !== 'undefined')
        {
            this.setEyesColor(data.eyes.color);
        }
    }

    // Tops
    if (typeof data.tops !== 'undefined')
    {
        // Tops shape
        if (typeof data.tops.shape !== 'undefined')
        {
            let topsShape = data.tops.shape;
            switch (topsShape)
            {
                case 'tshirt':
                    this.setTopsShape(MINI_YOU.Avatar.TOPS.T_SHIRT);
                    break;
                case 'vneck':
                    this.setTopsShape(MINI_YOU.Avatar.TOPS.VNECK);
                    break;
                case 'shirt':
                default:
                    this.setTopsShape(MINI_YOU.Avatar.TOPS.SHIRT);
            }
        }
        // Tops color
        if (typeof data.tops.color !== 'undefined')
        {
            this.setTopsColor(data.tops.color);
        }
    }

    // Bottoms
    if (typeof data.bottoms !== 'undefined')
    {
        // Bottoms shape
        if (typeof data.bottoms.shape !== 'undefined')
        {
            let bottomsShape = data.bottoms.shape;
            switch (bottomsShape)
            {
                case 'shorts':
                    this.setBottomsShape(MINI_YOU.Avatar.BOTTOMS.SHORTS);
                    break;
                case 'trousers':
                default:
                    this.setBottomsShape(MINI_YOU.Avatar.BOTTOMS.TROUSERS);
            }
        }
        // Bottoms color
        if (typeof data.bottoms.color !== 'undefined')
        {
            this.setBottomsColor(data.bottoms.color);
        }
    }

    // Shoes
    if (typeof data.shoes !== 'undefined')
    {
        // Shoes color
        if (typeof data.shoes.color !== 'undefined')
        {
            this.setShoesColor(data.shoes.color);
        }
    }

    // Set the drawing
    this._draw();
};

/**
 * @returns {Object}
 */
MINI_YOU.Avatar.prototype.getBodyShape = function ()
{
    return this._bodyShape;
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
 * @returns {string}
 */
MINI_YOU.Avatar.prototype.getBodyColor = function ()
{
    return this._bodyColor;
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
MINI_YOU.Avatar.prototype.getEyesShape = function ()
{
    return this._eyesShape;
};

/**
 * @param {Object} shape
 */
MINI_YOU.Avatar.prototype.setEyesShape = function (shape)
{
    this._eyesShape = shape;
    this._needsDrawing = true;
};

MINI_YOU.Avatar.prototype.getEyesColor = function ()
{
    return this._eyesColor;
};

/**
 * @param {string} color
 */
MINI_YOU.Avatar.prototype.setEyesColor = function (color)
{
    this._eyesColor = color;
    this._needsDrawing = true;
};

/**
 * @param {Object} eyesShape
 * @param {string} color
 * @private
 */
MINI_YOU.Avatar.prototype._drawEyes = function (eyesShape, color)
{
    let ctx = this._canvas.get2DContext();

    let leftEyeX = eyesShape.LEFT.X;
    let leftEyeY = eyesShape.LEFT.Y;

    let rightEyeX = eyesShape.RIGHT.X;
    let rightEyeY = eyesShape.RIGHT.Y;

    let radiusEnd = Math.PI * 2;

    // Sclera (outside white part of the eye)
    ctx.beginPath();
    ctx.arc(leftEyeX, leftEyeY, 10, 0, radiusEnd);
    ctx.moveTo(226, 88);
    ctx.arc(rightEyeX, rightEyeY, 10, 0, radiusEnd);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.stroke();

    // Iris
    ctx.beginPath();
    ctx.arc(leftEyeX, 89, 6, 0, radiusEnd);
    ctx.moveTo(222, 88);
    ctx.arc(rightEyeX, 87, 6, 0, radiusEnd);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.stroke();

    // Pupil
    ctx.beginPath();
    ctx.arc(leftEyeX, 89, 2, 0, radiusEnd);
    ctx.arc(rightEyeX, 87, 2, 0, radiusEnd);
    ctx.fillStyle = 'black';
    ctx.fill();
};

/**
 * @returns {Object}
 */
MINI_YOU.Avatar.prototype.getTopsShape = function ()
{
    return this._topsShape;
};

/**
 * @param {Object} shape
 */
MINI_YOU.Avatar.prototype.setTopsShape = function (shape)
{
    this._topsShape = shape;
    this._needsDrawing = true;
};

/**
 * @returns {string}
 */
MINI_YOU.Avatar.prototype.getTopsColor = function ()
{
    return this._topsColor;
};

/**
 * @param {string} color
 */
MINI_YOU.Avatar.prototype.setTopsColor = function (color)
{
    this._topsColor = color;
    this._needsDrawing = true;
};

/**
 * @param {Object} topsShape
 * @param {string} color
 * @private
 */
MINI_YOU.Avatar.prototype._drawTops = function (topsShape, color)
{
    let ctx = this._canvas.get2DContext();
    ctx.fillStyle = color;
    this._canvas.drawPolygon(topsShape.POINTS[0][0], topsShape.POINTS[0][1], topsShape.POINTS, true, true);
};

/**
 * @returns {string}
 */
MINI_YOU.Avatar.prototype.getBottomsShape = function ()
{
    return this._bottomsShape;
};

/**
 * @param {string} shape
 */
MINI_YOU.Avatar.prototype.setBottomsShape = function (shape)
{
    this._bottomsShape = shape;
    this._needsDrawing = true;
};

/**
 * @returns {string}
 */
MINI_YOU.Avatar.prototype.getBottomsColor = function ()
{
    return this._bottomsColor;
};

/**
 * @param {string} color
 */
MINI_YOU.Avatar.prototype.setBottomsColor = function (color)
{
    this._bottomsColor = color;
    this._needsDrawing = true;
};

/**
 * @param {Object} bottomsShape
 * @param {string} color
 * @private
 */
MINI_YOU.Avatar.prototype._drawBottoms = function (bottomsShape, color)
{
    let ctx = this._canvas.get2DContext();
    ctx.fillStyle = color;
    this._canvas.drawPolygon(bottomsShape.POINTS[0][0], bottomsShape.POINTS[0][1], bottomsShape.POINTS, true, true);
};

/**
 * @returns {string}
 */
MINI_YOU.Avatar.prototype.getShoesColor = function ()
{
    return this._shoesColor;
};

/**
 * @param {string} color
 */
MINI_YOU.Avatar.prototype.setShoesColor = function (color)
{
    this._shoesColor = color;
};

/**
 * @param {string} color
 * @private
 */
MINI_YOU.Avatar.prototype._drawShoes = function(color)
{
    let ctx = this._canvas.get2DContext();
    ctx.fillStyle = color;

    let leftShoe = [
        [256, 448], [304, 448], [304, 464], [256, 464]
    ];
    this._canvas.drawPolygon(leftShoe[0][0], leftShoe[0][1], leftShoe, true, true);

    let rightShoe = [
        [176, 448], [224, 448], [224, 464], [176, 464]
    ];
    this._canvas.drawPolygon(rightShoe[0][0], rightShoe[0][1], rightShoe, true, true);
};