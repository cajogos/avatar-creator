MINI_YOU.Compiler = function ()
{
};
MINI_YOU.Compiler.prototype.constructor = MINI_YOU.Compiler;

/**
 * @param {string} code
 */
MINI_YOU.Compiler.prototype.compileCode = function (code)
{
    let json = JSON.parse(code);
    return json;
};