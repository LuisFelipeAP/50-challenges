const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");

const decreaseButton = document.querySelector("#decrease");
const increaseButton = document.querySelector("#increase");
const sizeElement = document.querySelector("#size");
const colorElement = document.querySelector("#color");

const clearElement = document.querySelector("#clear");

let size = 20;
let isPressed = false;
let color = "black";
let x;
let y;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

canvas.addEventListener("mouseup", () => {
  isPressed = false;

  x = undefined;
  y = undefined;
});

function drawCircle(x, y) {
  context.beginPath();
  context.arc(x, y, size, 0, Math.PI * 2);
  context.fillStyle = color;
  context.fill();
}

function drawLine(x1, y1, x2, y2) {
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.strokeStyle = color;
  context.lineWidth = size;
  context.stroke();
}

function update() {
  sizeElement.innerHTML = size;
}

increaseButton.addEventListener("click", () => {
  size += 5;

  if (size > 50) {
    size = 50;
  }

  update();
});

decreaseButton.addEventListener("click", () => {
  size -= 5;

  if (size < 5) {
    size = 5;
  }

  update();
});

colorElement.addEventListener("change", (e) => (color = e.target.value));

clearElement.addEventListener("click", () =>
  context.clearRect(0, 0, canvas.width, canvas.height)
);
