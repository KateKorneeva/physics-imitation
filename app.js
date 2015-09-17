
function previewBall() {

  var x = parseInt($(".x-ball").val());
  var y = parseInt($(".y-ball").val());
  var r = parseInt($(".diam").val())/2;

  ctx.beginPath();
  ctx.setLineDash([2]); // пунктир
  ctx.arc(x, y, r, 0, Math.PI*2, true); // рисуем мяч
  ctx.closePath();
  ctx.stroke();
}

function previewBox() {

  var x = parseInt($(".x-box").val());
  var y = parseInt($(".y-box").val());
  var w = parseInt($(".width").val());
  var h = parseInt($(".height").val());

  ctx.beginPath();
  ctx.setLineDash([2]); // пунктир
  ctx.rect(x,y,w,h); // рисуем коробку
  ctx.closePath();
  ctx.stroke();
}

$( ".addBall" ).click(function() {
  var x = parseInt($(".x-ball").val());
  var y = parseInt($(".y-ball").val());
  var r = parseInt($(".diam").val())/2;
  var elast = parseInt($(".elast").val())/100;
  var dx = parseInt($(".dx").val());
  var dy = parseInt($(".dy").val());

  var ball = new Ball(x, y, r, elast, dx, dy);
  balls.push( ball );
});

$( ".addBox" ).click(function() {
  var x = parseInt($(".x-box").val());
  var y = parseInt($(".y-box").val());
  var w = parseInt($(".width").val());
  var h = parseInt($(".height").val());

  var box = new Box(x, y, w, h);
  boxes.push( box );
});

$( ".submitGrav").click(function() {
  return ( gravity = parseInt( $(".gravity").val() )/100 );
});