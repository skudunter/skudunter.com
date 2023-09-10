'use client'
import React, { useEffect } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
// import ContactForm from './ContactForm';

function AboutPage() {
  useEffect(() => {
    const canvas: any = document.getElementById("aboutCanvas");
    const ctx = canvas.getContext("2d");

    let startX = Math.random() * 255;
    let startY = Math.random() * 255;
    let endX = Math.random() * 255;
    let endY = Math.random() * 255;

    const range = 5;
    let deltaStartX = getRndInteger(-range, range);
    let deltaStartY = getRndInteger(-range, range);
    let deltaEndX = getRndInteger(-range, range);
    let deltaEndY = getRndInteger(-range, range);

    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;

    function startSimulation() {
      if (r > 255) {
        r = 255;
      } else if (r < 0) {
        r = 0;
      }
      if (g > 255) {
        g = 255;
      } else if (g < 0) {
        g = 0;
      }
      if (b > 255) {
        b = 255;
      } else if (b < 0) {
        b = 0;
      }

      // Draw a line
      ctx.strokeStyle = rgbToHex(r, g, b);
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.stroke();
      ctx.closePath();
      ctx.lineTo(50, 50);

      // Pick a new color
      r += getRndInteger(-5, 5);
      g += getRndInteger(-5, 5);
      b += getRndInteger(-5, 5);

      // Move a bit
      startX += deltaStartX;
      startY += deltaStartY;
      endX += deltaEndX;
      endY += deltaEndY;

      if (startX < 0 || startX > canvas.width) {
        deltaStartX *= -1;
      }

      if (startY < 0 || startY > canvas.height) {
        deltaStartY *= -1;
      }

      if (endX < 0 || endX > canvas.width) {
        deltaEndX *= -1;
      }

      if (endY < 0 || endY > canvas.height) {
        deltaEndY *= -1;
      }

      requestAnimationFrame(startSimulation);
    }

    function getRndInteger(min: number, max: number): number {
      return Math.random() * (max - min) + min;
    }

    function rgbToHex(r: number, g: number, b: number): string {
      const q = Math.floor(r).toString(16).padStart(2, "0");
      const w = Math.floor(g).toString(16).padStart(2, "0");
      const l = Math.floor(b).toString(16).padStart(2, "0");
      return "#" + q + w + l;
    }

    //  Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth - 20;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", setCanvasDimensions);

    // Start simulation
    for (let i = 0; i < 1; i++) {
      startSimulation();
    }
    setCanvasDimensions();
  }, []);
  return (
    <>
      <article>
        <canvas
          id="aboutCanvas"
          className="absolute -z-10"
          width="1"
          height="1"
        ></canvas>

        <div className="mx-auto mt-8 w-8/12 h-auto bg-tersiary bg-opacity-70 rounded-2xl text-center text-slate-50 py-4 ">
          <h1 className="font-bold text-5xl">Hey there!</h1>
          <br></br>
          <p className="text-2xl font-thin w-11/12 mx-auto">
            I&apos;m a software developer from the beautiful city of Cape Town.
            With a passion for crafting elegant and efficient code, I&apos;m
            proficient in a range of programming languages and technologies.
            Whether it&apos;s building sleek user interfaces with React.js and
            p5.js, crafting robust backends with Node.js and SQL, or developing
            engaging games with C#, .Net, and Unity, I&apos;m always up for a
            challenge. And when it comes to styling, I&apos;ve got you covered
            with my knowledge of CSS, Tailwind, and HTML. From Delphi to Pascal,
            I&apos;ve got the skills to bring your projects to life!
          </p>
          <br></br>
          <p className="text-2xl italic font-semibold">
            &quot;Any fool can write code that a computer can understand. Good
            programmers write code that humans can understand.&quot;
          </p>
        </div>
      </article>

      <article>
        <div className="z-10 mx-auto mt-8 w-8/12 h-auto bg-gradient-to-b from-tersiary rounded-2xl text-center text-white py-4 ">
          <h1 className="text-5xl font-semibold">My Skills:</h1>
          <ul className="mt-4">
            <AnimationOnScroll animateOnce animateIn="animate-scrollIn">
              <li className="text-3xl ">JavaScript</li>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce
              delay={100}
              animateIn="animate-scrollIn"
            >
              <li>node-js</li>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce
              delay={100}
              animateIn="animate-scrollIn"
            >
              <li>react.js</li>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce
              delay={100}
              animateIn="animate-scrollIn"
            >
              <li>p5.js</li>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce
              delay={200}
              animateIn="animate-scrollIn"
            >
              <li className="mt-4 text-3xl">C#</li>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce
              delay={300}
              animateIn="animate-scrollIn"
            >
              <li>.Net</li>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce
              delay={400}
              animateIn="animate-scrollIn"
            >
              <li className="mt-4 text-3xl">Unity</li>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce
              delay={500}
              animateIn="animate-scrollIn"
            >
              <li className="mt-4 text-3xl">SQL</li>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce
              delay={600}
              animateIn="animate-scrollIn"
            >
              <li className="mt-4 text-3xl">CSS</li>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce
              delay={700}
              animateIn="animate-scrollIn"
            >
              <li>tailwind</li>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce
              delay={800}
              animateIn="animate-scrollIn"
            >
              <li className="mt-4 text-3xl">HTML</li>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce
              delay={900}
              animateIn="animate-scrollIn"
            >
              <li className="mt-4 text-3xl">Pascal</li>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce
              delay={1000}
              animateIn="animate-scrollIn"
            >
              <li>Delphi</li>
            </AnimationOnScroll>
          </ul>
        </div>
      </article>
      <article>
        <h1 className="text-center font-bold text-white my-16 pt-10 text-5xl">
          Contact me
        </h1>
        {/* <ContactForm /> */}
      </article>
    </>
  );
}

export default AboutPage;
