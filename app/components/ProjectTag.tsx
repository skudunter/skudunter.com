type ColorMapping = {
  mainColor: string;
  secondaryColor?: string;
  textColor: string;
};

const colorMappings: Record<string, ColorMapping> = {
  "node-js": {
    mainColor: "green",
    secondaryColor: "darkgreen",
    textColor: "white",
  },
  express: {
    mainColor: "blue",
    secondaryColor: "darkblue",
    textColor: "white",
  },
  unity: {
    mainColor: "orange",
    secondaryColor: "darkorange",
    textColor: "black",
  },
  ffmpeg: {
    mainColor: "purple",
    secondaryColor: "darkpurple",
    textColor: "white",
  },
  "kaboom.js": {
    mainColor: "yellow",
    secondaryColor: "darkyellow",
    textColor: "black",
  },
  "react.js": {
    mainColor: "lightblue",
    secondaryColor: "darkblue",
    textColor: "white",
  },
  "next.js": {
    mainColor: "gray",
    secondaryColor: "darkgray",
    textColor: "white",
  },
  firebase: {
    mainColor: "red",
    secondaryColor: "darkred",
    textColor: "white",
  },
  "react-native": {
    mainColor: "teal",
    secondaryColor: "darkteal",
    textColor: "white",
  },
  "game-jam": {
    mainColor: "teal",
    secondaryColor: "darkteal",
    textColor: "white",
  },
  typescript: {
    mainColor: "teal",
    secondaryColor: "darkteal",
    textColor: "white",
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
      className={`rounded-lg ml-1 text-lg px-2 font-mono`}
    >
      #{title}
    </span>
  );
}
