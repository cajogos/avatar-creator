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

MINI_YOU.Avatar.POINTS = {
    HEAD: [
        [192, 64],
        [288, 64],
        [288, 160],
        [192, 160]
    ],
    BODY: [
        [160, 160],
        [320, 160],
        [320, 320],
        [160, 320]
    ],
    // Arms
    RIGHT_ARM: [
        [96, 160],
        [160, 160],
        [160, 320],
        [96, 320]
    ],
    LEFT_ARM: [
        [320, 160],
        [384, 160],
        [384, 320],
        [320, 320]
    ],
    // Legs
    RIGHT_LEG: [
        [160, 320],
        [224, 320],
        [224, 480],
        [160, 480]
    ],
    LEFT_LEG: [
        [256, 320],
        [320, 320],
        [320, 480],
        [256, 480]
    ]
};

MINI_YOU.Avatar.prototype._initDraw = function()
{
    let ctx = this._canvas.get2DContext();
    ctx.strokeStyle = 'black';

    // Head
    this._createHead('red');

    // Body
    let bodyPoints = MINI_YOU.Avatar.POINTS.BODY;
    ctx.fillStyle = 'blue';
    this._canvas.drawPolygon(bodyPoints[0][0], bodyPoints[0][1], bodyPoints, true, true);

    // Right Arm
    let rightArmPoints = MINI_YOU.Avatar.POINTS.RIGHT_ARM;
    ctx.fillStyle = 'violet';
    this._canvas.drawPolygon(rightArmPoints[0][0], rightArmPoints[0][1], rightArmPoints, true, true);

    // Left Arm
    let leftArmPoints = MINI_YOU.Avatar.POINTS.LEFT_ARM;
    ctx.fillStyle = 'orange';
    this._canvas.drawPolygon(leftArmPoints[0][0], leftArmPoints[0][1], leftArmPoints, true, true);

    // Right Leg
    let rightLegPoints = MINI_YOU.Avatar.POINTS.RIGHT_LEG;
    ctx.fillStyle = 'lime';
    this._canvas.drawPolygon(rightLegPoints[0][0], rightLegPoints[0][1], rightLegPoints, true, true);

    // Left Leg
    let leftLegPoints = MINI_YOU.Avatar.POINTS.LEFT_LEG;
    ctx.fillStyle = 'yellow';
    this._canvas.drawPolygon(leftLegPoints[0][0], leftLegPoints[0][1], leftLegPoints, true, true);
};

MINI_YOU.Avatar.prototype.processData = function(data)
{
    console.log('data', data);
    // Head
    if (data.head)
    {
        this._createHead(data.head.color);
    }
};

MINI_YOU.Avatar.prototype._createHead = function(color)
{
    let ctx = this._canvas.get2DContext();

    let headPoints = MINI_YOU.Avatar.POINTS.HEAD;
    ctx.fillStyle = color;
    this._canvas.drawPolygon(headPoints[0][0], headPoints[0][1], headPoints, true, true);
};