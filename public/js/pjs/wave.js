+function(t,e){"use strict";function i(t,e){o.createCanvas(t,this)&&(this.set=o.extend({},i.configDefault,e),this.dots=[],this.createDot(),this.draw(),this.resize())}var o=e.util,r=(Math.random,Math.sin),s=Math.PI/180;2*Math.PI;i.configDefault={opacity:1,color:["rgba(0, 190, 112, .9)","rgba(0, 190, 112, .6)","rgba(0, 190, 112, .3)"],num:3,lineWidth:[],crest:1,rippleNum:3,speed:2,offsetTop:.7,resize:!0},i.prototype={version:"1.0.0",createDot:function(){for(var t=this.set,e=this.ch,i=(this.ch/2*t.crest,t.num),o=this.cw,r=[],s=((t.max-t.min)/o,0);i>s;s++){var a=[],n=t.offsetTop;n>0&&1>n&&(n=n*e+10*s);for(var h=0;o>h;h++)a.push({x:h,y:n,angle:h});r.push(a)}this.dots=r},getAttr:function(t,e){var i=this.set,r=i[t][e];if(!r){switch(t){case"color":r=o.randomColor();break;case"lineWidth":r=1}i[t].push(r)}return r},draw:function(){var t=this,e=this.set,i=this.cxt,o=this.cw,a=this.ch,n=e.speed;i.clearRect(0,0,o,a),i.globalAlpha=e.opacity,this.dots.forEach(function(e,o){i.save(),i.beginPath(),e.forEach(function(t,e){e?i.lineTo(t.x,100*r(t.angle*s)+t.y):i.moveTo(t.x,100*r(t.angle*s)+t.y),t.angle-=n}),i.strokeStyle=t.getAttr("color",o),i.lineWidth=t.getAttr("lineWidth",o),i.stroke(),i.restore()}),this.requestAnimationFrame()}},e.extend(i.prototype),e.wave=i.prototype.constructor=i}(window,Particleground);
//# sourceMappingURL=../map/pjs/wave.js.map
