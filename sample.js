// Set up initial positions and speeds
var balloonX = 100,
  balloonY = 700,
  balloonSpeed = -0.5;
var airplaneX = 60,
  airplaneY = 215,
  airplaneSpeed = 1;
var cloudX = 330,
  cloudY = 348,
  cloudSpeed = -0.2;

function drawBalloon(ctx) {
  // Your existing code to draw the hot air balloon...
}

function drawAirplane(ctx) {
  // Your existing code to draw the airplane...
}

function drawCloud(ctx) {
  // Your existing code to draw the cloud...
}

function animate() {
  var ctx = document.getElementById("canvas").getContext("2d");
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Clear the canvas

  // Update positions
  balloonY += balloonSpeed;
  airplaneX += airplaneSpeed;
  cloudX += cloudSpeed;

  // Draw the elements at their new positions
  drawBalloon(ctx, balloonX, balloonY);
  drawAirplane(ctx, airplaneX, airplaneY);
  drawCloud(ctx, cloudX, cloudY);

  // Loop the animation
  requestAnimationFrame(animate);
}

// Start the animation
animate();
