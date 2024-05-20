type ColorMapping = {
  mainColor: string;
  secondaryColor?: string;
  textColor: string;
};

const colorMappings: Record<string, ColorMapping> = {
  "node-js": {
    mainColor: "#026e00",
    secondaryColor: "#43853d",
    textColor: "white",
  },
  express: {
    mainColor: "#0969da",
    secondaryColor: "#259dff",
    textColor: "#010101",
  },
  unity: {
    mainColor: "black",
    secondaryColor: "black",
    textColor: "white",
  },
  ffmpeg: {
    mainColor: "#4cae4c",
    secondaryColor: "#4cae4c",
    textColor: "#242424",
  },
  "kaboom.js": {
    mainColor: "#ef6155",
    secondaryColor: "#fec418",
    textColor: "#20202e",
  },
  "react.js": {
    mainColor: "#16181d",
    secondaryColor: "#2b303b",
    textColor: "#149eca",
  },
  "next.js": {
    mainColor: "white",
    secondaryColor: "white",
    textColor: "black",
  },
  firebase: {
    mainColor: "#ffcb2b",
    secondaryColor: "#f5820a",
    textColor: "white",
  },
  "react-native": {
    mainColor: "#61dafb",
    secondaryColor: "#5cbed9",
    textColor: "#242526",
  },
  "game-jam": {
    mainColor: "#772D8B",
    secondaryColor: "#F24333",
    textColor: "#FCF7FF",
  },
  typescript: {
    mainColor: "#3178c6",
    secondaryColor: "#3178c6",
    textColor: "white",
  },
  vite: {
    mainColor: "#bd34fe",
    secondaryColor: "#53b9ff",
    textColor: "#ffc71f",
  },
  javaScript: {
    mainColor: "#f7df1e",
    secondaryColor: "#f7df1e",
    textColor: "black",
  },
  simulation: {
    mainColor: "black",
    secondaryColor: "green",
    textColor: "#08d903",
  },
  python: {
    mainColor: "#ffd752",
    secondaryColor: "#ffd752",
    textColor: "#1e425e ",
  },
};

export enum ProjectTagTitle {
  NodeJs = "node-js",
  Express = "express",
  Unity = "unity",
  FFMpeg = "ffmpeg",
  KaboomJs = "kaboom.js",
  ReactJs = "react.js",
  NextJs = "next.js",
  Firebase = "firebase",
  ReactNative = "react-native",
  GameJam = "game-jam",
  TypeScript = "typescript",
  Vite = "vite",
  JavaScript = "javaScript",
  Simulation = "simulation",
  Python = "python",
}

type ProjectTypeProps = {
  title: ProjectTagTitle;
};

export default function ProjectTag({ title }: ProjectTypeProps) {
  const { mainColor, secondaryColor, textColor } = colorMappings[title] || {};

  return (
    <span
      style={{
        backgroundImage: `linear-gradient(to top right, ${mainColor}, ${
          secondaryColor || mainColor
        })`,
        color: textColor,
      }}
      className={`rounded-lg ml-1 mt-1 text-lg px-2 font-mono`}
    >
      #{title}
    </span>
  );
}
