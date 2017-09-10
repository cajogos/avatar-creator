"use strict";var MINI_YOU={};
"use strict";MINI_YOU.Creator=function(t){this._canvas=t[0],this._ctx=this._canvas.getContext("2d"),this._ctx.fillStyle="rgb(255, 255, 255)",this._ctx.fillRect(0,0,this._canvas.width,this._canvas.height)},MINI_YOU.Creator.prototype.constructor=MINI_YOU.Creator,MINI_YOU.Creator.prototype.get2DContext=function(){return this._ctx};
"use strict";MINI_YOU.Editor=function(t){this._element=t;var e=this;this._element.on("keyup",function(t){e.parseText()})},MINI_YOU.Editor.prototype.constructor=MINI_YOU.Editor,MINI_YOU.Editor.prototype.parseText=function(){var t=this._element.val();try{JSON.parse(t);this._element.css({background:"black",color:"white"})}catch(t){this._element.css({background:"salmon",color:"red"})}};
//# sourceMappingURL=avatar-creator.js.map
