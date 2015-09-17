
// Ball class

var Ball = function(x, y, r, e, dx, dy) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.elast = e;
  this.dx = dx;
  this.dy = dy;
}

Ball.prototype.draw = function() {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, true);  // рисуем мяч
  ctx.closePath();
  ctx.fillStyle = fillStyleBall;
  ctx.fill();
};

Ball.prototype.update = function() {
  this.x += this.dx; // анимация
  this.y += this.dy;
  this.dy += gravity;
};


// Box class

var Box = function(x,y,w,h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
}

Box.prototype.draw = function () {
  ctx.beginPath();
  ctx.rect(this.x,this.y,this.w,this.h);
  ctx.closePath();
  ctx.fillStyle = fillStyleBox;
  ctx.fill();
}