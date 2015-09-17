var WIDTH;
var HEIGHT;
var ctx;
var delta; // погрешность
var balls = [];
var boxes = [];
var gravity = 0.81;
var fillStyleBox = "#C75080";
var fillStyleBall = "#6B206A";


function init() {
  ctx = $("#canvas")[0].getContext("2d"); // обращаемся к canvas
  WIDTH = $("#canvas").width();
  HEIGHT = $("#canvas").height();
  return setInterval(draw, 10); // каждые 10 милисекунд обновляется изображение
}

function clear() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT); // сброс картинки
}

function checkBoxCollision() {
  for (var i = 0; i < boxes.length; i++) {
    for (var j = 0; j < balls.length; j++) {
      var box = boxes[i];
      var ball = balls[j];

      // обозначаем границы коробки и мяча
      var boxLeftX = box.x;
      var boxRightX = box.x + box.w;
      var boxTopY = box.y;
      var boxBottomY = box.y + box.h;

      var ballLeftX = ball.x - ball.r;
      var ballRightX = ball.x + ball.r;
      var ballTopY = ball.y - ball.r;
      var ballBottomY = ball.y + ball.r;

      var elast = ball.elast; // эластичность мяча

      // если гориз. проек. мяча пересекает гориз. проек. коробки
      if ( ballRightX >= boxLeftX && ballLeftX <= boxRightX ) {
        // если вертик. проек. мяча пересекает верт. проек. коробки
        if ( ballBottomY > boxTopY && ballTopY < boxBottomY ) {

          // если предыд. поз. мяча выше коробки
          if ( boxTopY > ballBottomY - ball.dy ) {
            // выравниваем мяч по верхнему краю коробки
            balls[j].y = boxTopY - ball.r;
            // меняем направление по вертикали и скорость
            ball.dy = - ball.dy * elast;
          }

          // если предыд. поз. мяча ниже коробки
          else if ( boxBottomY < ballTopY - ball.dy ) {
            // выравниваем мяч по нижнему краю коробки
            balls[j].y = boxBottomY + ball.r;
            // меняем направление по вертикали и скорость
            ball.dy = - ball.dy * elast;
          }

          // если предыд. поз. мяча левее коробки
          else if ( boxLeftX > ballRightX - ball.dx ) {
            // выравниваем мяч по левому краю коробки
            balls[j].x = boxLeftX - ball.r;
            // меняем направление по горизонтали и скорость
            ball.dx = - ball.dx * elast;
          }

          // если предыд. поз. мяча правее коробки
          else if ( boxRightX < ballLeftX - ball.dx ) {
            // выравниваем мяч по правому краю коробки
            balls[j].x = boxRightX + ball.r;
            // меняем направление по горизонтали и скорость
            ball.dx = - ball.dx * elast;
          }

        }
      }
    }; // balls[j]
  }; // boxes[i]
} // checkBoxCollision()

function checkBallCollision() {
  // console.log("gdfjgkdfjgl");
  for (var i = 0; i < balls.length; i++) {
    for (var j = 0; j < balls.length; j++) {
      if (i != j) {
        var ballI = balls[i];
        var ballJ = balls[j];

        ballIRightX = ballI.x + ballI.r;
        ballJRightX = ballJ.x + ballJ.r;

        ballILeftX = ballI.x - ballI.r;
        ballJLeftX = ballJ.x - ballJ.r;

        ballITopY = ballI.y - ballI.r;
        ballJTopY = ballJ.y - ballJ.r;

        ballIBottomY = ballI.y + ballI.r;
        ballJBottomY = ballJ.y + ballJ.r;

        var elast = ballI.elast; // эластичность мяча

        if ( ballIRightX >= ballJLeftX && ballILeftX <= ballJRightX ) {
          if ( ballIBottomY > ballJTopY && ballITopY < ballJBottomY ) {
          // если предыд. поз. мяча выше другого мяча
            if ( ballJTopY > ballIBottomY - ballI.dy ) {
              // выравниваем мяч по верхнему краю другого мяча
              balls[i].y = ballJTopY - ballI.r;
              // меняем направление по вертикали и скорость
              ballI.dy = - ballI.dy * elast;
            }

            // если предыд. поз. мяча ниже другого мяча
            else if ( ballJBottomY < ballITopY - ballI.dy ) {
              // выравниваем мяч по нижнему краю другого мяча
              balls[i].y = ballJBottomY + ballI.r;
              // меняем направление по вертикали и скорость
              ballI.dy = - ballI.dy * elast;
            }

            // если предыд. поз. мяча левее коробки
            else if ( ballJLeftX > ballIRightX - ballI.dx ) {
              // выравниваем мяч по левому краю другого мяча
              balls[i].x = ballJLeftX - ballI.r;
              // меняем направление по горизонтали и скорость
              ballI.dx = - ballI.dx * elast;
            }

            // если предыд. поз. мяча правее коробки
            else if ( ballJRightX < ballILeftX - ballI.dx ) {
              // выравниваем мяч по правому краю другого мяча
              balls[i].x = ballJRightX + ballI.r;
              // меняем направление по горизонтали и скорость
              ballI.dx = - ballI.dx * elast;
            }

          }; // if
        }; // if

      } // if (i != j)
    }; // balls[j]
  }; // balls[i]
} // checkBallCollision()


// function checkObjRelations( objI, objJ) {

//   var elast = objI.elast; // эластичность мяча

//   // если гориз. проек. объектаI пересекает гориз. проек. объектаJ
//   if ( ballRightX >= boxLeftX && ballLeftX <= boxRightX ) {
//     // если вертик. проек. объектаI пересекает верт. проек. объектаJ
//     if ( ballBottomY > boxTopY && ballTopY < boxBottomY ) {

//       // если предыд. поз. объектаI выше объектаJ
//       if ( boxTopY > ballBottomY - ball.dy ) {
//         // выравниваем объектI по верхнему краю объектаJ
//         balls[j].y = boxTopY - ball.r;
//         // меняем направление по вертикали и скорость
//         ball.dy = - ball.dy * elast;
//       }

//       // если предыд. поз. объектаI ниже объектаJ
//       else if ( boxBottomY < ballTopY - ball.dy ) {
//         // выравниваем объектI по нижнему краю объектаJ
//         balls[j].y = boxBottomY + ball.r;
//         // меняем направление по вертикали и скорость
//         ball.dy = - ball.dy * elast;
//       }

//       // если предыд. поз. объектаI левее объектаJ
//       else if ( boxLeftX > ballRightX - ball.dx ) {
//         // выравниваем объектI по левому краю объектаJ
//         balls[j].x = boxLeftX - ball.r;
//         // меняем направление по горизонтали и скорость
//         ball.dx = - ball.dx * elast;
//       }

//       // если предыд. поз. объектаI правее объектаJ
//       else if ( boxRightX < ballLeftX - ball.dx ) {
//         // выравниваем объектI по правому краю объектаJ
//         balls[j].x = boxRightX + ball.r;
//         // меняем направление по горизонтали и скорость
//         ball.dx = - ball.dx * elast;
//       }

//     }
//   }
// }

function draw() {
  clear();
  previewBall();
  previewBox();

  if (boxes.length > 0) {
    for (var i = 0; i < boxes.length; i++) {
      boxes[i].draw();
    };
  }

  if (balls.length > 0) {
    for (var i = 0; i < balls.length; i++) {
      balls[i].draw();
      balls[i].update();
    };
  }
  checkBoxCollision();
  checkBallCollision();
}

init();