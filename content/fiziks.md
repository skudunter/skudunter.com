# Fiziks: A Simple Physics Simulation

![Fiziks Logo](https://github.com/skudunter/fiziks/blob/main/fiziks.png?raw=true)

## Introduction

Welcome to Fiziks, my first foray into physics simulation using TypeScript and Verlet Integration. This project aims to simulate simple 2D particle physics, collisions, and more. Despite its simplicity in places, it serves as a solid foundation for understanding the basics of physics engines.

### Why Fiziks?
Physics simulations are a fascinating way to explore the principles of motion, forces, and interactions in a controlled environment. By building Fiziks, I wanted to learn how to simulate physical behaviors and gain hands-on experience with coding a physics engine. This project abstracts as much as possible into the Fiziks class, making it easier to manage and expand.

## Features

- **2D Particle Physics and Collisions:** Simulates basic particle interactions and collisions in a 2D space.
- **Constraints and Links:** Creates relationships between particles to form more complex structures.
- **Motors:** Adds motion to particles, enabling dynamic simulations.
- **Rigidbody Physics:** Connects cells and links to form rigid bodies that behave realistically.

## Files

- **`cell.ts`:** Contains the class for simulating a single cell.
- **`engine.ts`:** Contains the class for simulating a circular, horizontal, or vertical engine.
- **`link.ts`:** Contains the class for simulating a single link between two cells.
- **`fiziks.ts`:** Contains the main physics solver and top-level API.
- **`rigidBody.ts`:** Contains the class for connecting cells and links to form a rigidbody.
- **`util.ts`:** Contains utility functions to make development easier.
- **`main.ts`:** Contains a demo setup for a simple pendulum.

## Usage

### Installation

To get started with Fiziks, follow these steps to clone the repository and install the necessary dependencies.

```bash
git clone https://github.com/skudunter/fiziks
cd fiziks
npm i
npm run dev
```

## Sources

Here are some resources I found helpful while developing Fiziks:

- [pezzas-work](https://www.youtube.com/watch?v=lS_qeBy3aQI)
- [coding-math](https://www.youtube.com/watch?v=3HjO_RGIjCU)
- [Verlet Integration Article](https://betterprogramming.pub/making-a-verlet-physics-engine-in-javascript-1dff066d7bc5)

## Bugs

While working on Fiziks, I've encountered a few bugs that I haven't yet ironed out:

- Polygons only have collisions on their points.

Feel free to explore the

## Links

- [github](https://github.com/skudunter/fiziks)