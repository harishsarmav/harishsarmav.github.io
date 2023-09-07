// Get the canvas element and its context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Paddle properties
const paddleWidth = 100;
const paddleHeight = 10;
let paddleX = (canvas.width - paddleWidth) / 2;

// Ball properties
const ballRadius = 10;
let ballX = canvas.width / 2;
let ballY = canvas.height - 30;
let ballSpeedX = 2;
let ballSpeedY = -2;

// Keyboard input
let rightPressed = false;
let leftPressed = false;

// Event listeners for keyboard input
document.addEventListener('keydown', (e) => {
    if (e.key == 'Right' || e.key == 'ArrowRight') {
        rightPressed = true;
    } else if (e.key == 'Left' || e.key == 'ArrowLeft') {
        leftPressed = true;
    }
});

document.addEventListener('keyup', (e) => {
    if (e.key == 'Right' || e.key == 'ArrowRight') {
        rightPressed = false;
    } else if (e.key == 'Left' || e.key == 'ArrowLeft') {
        leftPressed = false;
    }
});

// Update game state
function updateGame() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the paddle
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = '#0095DD';
    ctx.fill();
    ctx.closePath();

    // Draw the ball
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#0095DD';
    ctx.fill();
    ctx.closePath();

    // Move the paddle
    if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 4;
    } else if (leftPressed && paddleX > 0) {
        paddleX -= 4;
    }

    // Move the ball
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    // Ball collisions with walls
    if (ballX + ballRadius > canvas.width || ballX - ballRadius < 0) {
        ballSpeedX = -ballSpeedX;
    }

    if (ballY - ballRadius < 0) {
        ballSpeedY = -ballSpeedY;
    } else if (ballY + ballRadius > canvas.height) {
        // Ball collision with the paddle
        if (ballX > paddleX && ballX < paddleX + paddleWidth) {
            ballSpeedY = -ballSpeedY;
        } else {
            // Game over
            document.location.reload();
        }
    }

    // Request the next frame
    requestAnimationFrame(updateGame);
}

// Start the game loop
updateGame();
