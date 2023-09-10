import React, { useEffect } from "react";
import {Helmet} from 'react-helmet';
function NoPage() {
  useEffect(() => {
    var canvas = document.getElementById("myCanvas"),
      ctx = canvas.getContext("2d"),
      direction = "",
      directionQueue = "",
      fps = 70,
      snake = [],
      snakeLength = 5,
      cellSize = 20,
      snakeColor = "#04F06A",
      foodColor = "#FF0000",
      food = {
        x: 0,
        y: 0,
      },
      i,
      loop,
      k,
      activated = false,
      firstKeyPress = true;

    const setCanvasDimensions = () => {
      if (activated) {
        cellSize = Math.round((window.innerHeight + window.innerWidth) / 100);
        canvas.width =
          Math.round(
            (window.innerWidth - (0 / 100) * window.innerWidth) / cellSize
          ) * cellSize;
        canvas.height =
          Math.round(
            (window.innerHeight - (20 / 100) * window.innerHeight) / cellSize
          ) * cellSize;
        createFood();
      }
    };

    window.addEventListener("resize", setCanvasDimensions);

    // makes canvas interactive upon load
    canvas.setAttribute("tabindex", 1);
    canvas.style.outline = "none";
    canvas.focus();
    // draws a square.. obviously
    function drawSquare(x, y, color) {
      ctx.fillStyle = color;
      ctx.fillRect(x, y, cellSize, cellSize);
    }
    // giving the food object its coordinates
    function createFood() {
      food.x = Math.floor(Math.random() * (canvas.width / cellSize)) * cellSize; // random x position from array
      food.y =
        Math.floor(Math.random() * (canvas.height / cellSize)) * cellSize;
      // looping through the snake and checking if there is a collision
      for (i = 0; i < snake.length; i++) {
        if (checkCollision(food.x, food.y, snake[i].x, snake[i].y)) {
          createFood();
        }
      }
    }
    // drawing food on the canvas
    function drawFood() {
      drawSquare(food.x, food.y, foodColor);
    }
    // setting the colors for the canvas. color1 - the background, color2 - the line color
    function setBackground() {
      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );
      gradient.addColorStop(0, "#ABEBD2");
      gradient.addColorStop(1, "#ABEBD2");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    // creating the snake and pushing coordinates to the array
    function createSnake() {
      snake = [];
      for (var i = snakeLength; i > 0; i--) {
        k = i * cellSize;
        snake.push({ x: k, y: 0 });
      }
    }
    // loops through the snake array and draws each element
    function drawSnake() {
      for (i = 0; i < snake.length; i++) {
        drawSquare(snake[i].x, snake[i].y, snakeColor);
      }
    }
    // keyboard interactions | direction != '...' doesn't let the snake go backwards
    function changeDirection(keycode) {
      if ((keycode === 37 || keycode === 65) && direction !== "right") {
        directionQueue = "left";
      } else if ((keycode === 38 || keycode === 87) && direction !== "down") {
        directionQueue = "up";
      } else if ((keycode === 39 || keycode === 68) && direction !== "left") {
        directionQueue = "right";
      } else if ((keycode === 40 || keycode === 83) && direction !== "up") {
        directionQueue = "down";
      }
    }
    // changing the snake's movement
    function moveSnake() {
      var x = snake[0].x; // getting the head coordinates...hhehehe... getting head..
      // anyway... read on...
      var y = snake[0].y;

      direction = directionQueue;

      if (direction === "right") {
        x += cellSize;
      } else if (direction === "left") {
        x -= cellSize;
      } else if (direction === "up") {
        y -= cellSize;
      } else if (direction === "down") {
        y += cellSize;
      }
      // removes the tail and makes it the new head...very delicate, don't touch this
      var tail = snake.pop();
      tail.x = x;
      tail.y = y;
      snake.unshift(tail);
    }
    // checks if too coordinates match up
    function checkCollision(x1, y1, x2, y2) {
      if (x1 === x2 && y1 === y2) {
        return true;
      } else {
        return false;
      }
    }
    // main game loop
    function game() {
      var head = snake[0];
      // checking for wall collisions
      if (
        head.x < 0 ||
        head.x > canvas.width - cellSize ||
        head.y < 0 ||
        head.y > canvas.height - cellSize
      ) {
        setBackground();
        createSnake();
        drawSnake();
        createFood();
        drawFood();
        directionQueue = "right";
      }
      // checking for colisions with snake's body
      for (i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
          setBackground();
          createSnake();
          drawSnake();
          createFood();
          drawFood();
          directionQueue = "right";
        }
      }
      // checking for collision with food
      if (checkCollision(head.x, head.y, food.x, food.y)) {
        snake[snake.length] = { x: head.x, y: head.y };
        createFood();
        drawFood();
      }

      canvas.onkeydown = function (evt) {
        evt = evt || window.event;
        evt.preventDefault();
        changeDirection(evt.keyCode);
      };

      ctx.beginPath();
      setBackground("#fff", "#eee");
      drawSnake();
      drawFood();
      moveSnake();
    }
    function newGame() {
      if (activated) {
        direction = "right"; // initial direction
        directionQueue = "right";
        ctx.beginPath();
        createSnake();
        createFood();
      }
      if (typeof loop != "undefined") {
        clearInterval(loop);
      } else {
        loop = setInterval(game, fps);
      }
    }
    document.addEventListener("keydown", (event) => {
      if (firstKeyPress) {
        activated = true;
        canvas.focus();
        setCanvasDimensions();
        newGame();
        createFood();
        document.getElementById("404Div").style.display = "none";
      }
      firstKeyPress = false;
    });
  });

  return (
    <article>
      <Helmet><title>404 Error</title></Helmet>
      <div className="flex items-center">
        <canvas className="mx-auto" id="myCanvas" width={1} height={1}></canvas>
      </div>
      <div
        id="404Div"
        className="flex flex-col h-404Div justify-center  text-white items-start px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-3xl  font-bold mb-4">Sorry!</p>
          <p className="text-4xl font-thin mb-4">
            We can't seem to find the resource you are looking for.
          </p>
          <p className="text-lg opacity-80 mb-8">
            Please check that the web address is spelled correctly.
          </p>
          <p className="text-sm opacity-80">
            PRESS ANY KEY TO PLAY{" "}
            <i className="text-secondary font-extrabold">SNAKE</i>
          </p>
        </div>
      </div>
    </article>
  );
}
export default NoPage;
