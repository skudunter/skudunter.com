"use client";
import { useEffect } from "react";
import Image from "next/image";

function HomePage() {
  useEffect(() => {
    let canvas: any = document.getElementById("gameCanvas");
    var ctx = canvas.getContext("2d");
    let element = document.querySelector("body > header")!.scrollHeight;
    let width = window.innerWidth / 40;
    let height = window.innerHeight / 5;
    let radius = (window.innerHeight + window.innerWidth) / 100;
    ctx.fillStyle = "#ABEBD2";
    canvas.width = window.outerWidth;
    canvas.height = window.innerHeight - element;

    ctx.fillRect(0, 0, canvas.width, canvas.height);

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight - document.querySelector("body > header")!.scrollHeight;;
      radius = (window.innerHeight + window.innerWidth) / 100;
      width = canvas.width / 40;

      if (width < 20) {
        width = 20;
      }
      height = canvas.height / 5;
      if (height < 50) {
        height = 50;
      }
    });

    class Paddle {
      y: number;
      x: number;
      constructor(x: number, y: number) {
        this.y = y;
        this.x = x;
      }
      show() {
        ctx.fillStyle = "#f8fafc";
        ctx.fillRect(this.x, this.y, width, height);
      }
    }
    class Ball {
      x: number;
      r: number;
      y: number;
      vx: number;
      vy: number;
      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.r = radius;
        if (Math.random() >= 0.5) {
          this.vx = -8;
        } else {
          this.vx = 8;
        }
        this.vy = 5 * Math.random() * 2 - 1;
      }
      show() {
        ctx.fillStyle = "#f8fafc";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.fill();
      }
      move() {
        this.x += this.vx;
        this.y += this.vy;
      }
      collide() {
        if (this.x + this.r > canvas.width - 10 - width) {
          this.vx = -this.vx;
        } else if (this.x - this.r < 10 + width) {
          this.vx = -this.vx;
        }
        if (this.y + this.r > canvas.height) {
          this.vy = -this.vy;
        } else if (this.y - this.r < 0) {
          this.vy = -this.vy;
        }
      }
    }

    let p1: Paddle = new Paddle(10, canvas.height / 2 - height / 2);
    let p2: Paddle = new Paddle(
      canvas.width - width - 10,
      canvas.height / 2 - height / 2
    );
    let bll: Ball = new Ball(canvas.width / 2, canvas.height / 2);

    p1.show();
    p2.show();
    bll.show();

    function playGame() {
      ctx.fillStyle = "#ABEBD2";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      bll.move();
      bll.show();
      p1.show();
      p2.show();
      bll.show();
      bll.collide();
      p1.y = bll.y - height / 2;
      p2.y = bll.y - height / 2;
      for (let i = 0; i < canvas.height / 40; i++) {
        ctx.fillRect(canvas.width / 2 - 3, i * 40, canvas.width / 300, 30);
      }
      ctx.font = canvas.width / 30 + "px Arial";
      ctx.textAlign = "center";
      ctx.fillText(
        "Hello World;",
        canvas.width / 2 + canvas.width / 90,
        canvas.height / 2
      );
      requestAnimationFrame(playGame);
    }

    requestAnimationFrame(playGame);
  });
  return (
    <>
      <article>
        <span className="fixed justify-center w-full mr-8 space-x-2 flex z-10 mt-1 xs:justify-end xs:right-1 sm:right-3 sm:bottom-3 select-none">
          <a href="/app/pages/coming.html">
            <Image
              alt="youtube"
              className="w-10 h-10 opacity-70 transition ease-in-out hover:opacity-100 duration-500 hover:scale-125 sm:w-20 sm:h-20"
              src="../images/youtube.svg"
              width={600}
              height={600}
            />
          </a>
          <a href="https://github.com/skudunter">
            <Image
              alt="github"
              className="w-10 h-10 opacity-70 transition ease-in-out hover:opacity-100 duration-500 hover:scale-125 sm:w-20 sm:h-20"
              src="../images/github.svg"
              width={600}
              height={600}
            />
          </a>
          <a href="https://skudunter.itch.io/">
            <Image
              alt="itch.io"
              className="w-7 h-7 opacity-70 transition ease-in-out hover:opacity-100 duration-500 hover:scale-125 sm:w-16 sm:h-16 mt-2"
              src="../images/itchio-textless-white.svg"
              width={600}
              height={600}
            />
          </a>
        </span>
        <canvas
          id="gameCanvas"
          height="1160"
          className="fixed w-full h-auto"
        ></canvas>
      </article>
      <footer className="fixed text-white bottom-0">
        © 2023 Skudunter, LLC.
      </footer>
    </>
  );
}
export default HomePage;
