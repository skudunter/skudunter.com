import Image from "next/image";

export default function PortfolioPage() {
  return (
    <>
      <header className="flex justify-center">
        <h1 className="text-white font-semibold text-5xl mt-16 ">Projects</h1>
      </header>
      <main className="mt-16 w-11/12 mx-auto">
        <ul className="grid text-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <li>
            <Project
              href="/portfolio/tank"
              image="./images/tanks.png"
              title="Express  Tanks"
              description="A Multiplayer game made using node-js,express and websocket.io,complete with weappn upgrades and powerups."
              tag={[
                {
                  title: "#node-js",
                  mainColor: "#35d110",
                  textColor: "#1f231e",
                },
                {
                  title: "#express",
                  mainColor: "grey",
                  textColor: "black",
                },
              ]}
            />
          </li>
          <li>
            <Project
              href="https://imgtoascii-51d7b.web.app/"
              image="./images/imgtoascii-example.png"
              title="Image to ASCII"
              description="Software that takes in an image as input and allows you to turn it into a ascii version aswell as allowing control of other settings."
              tag={[
                {
                  title: "#canvas",
                  mainColor: "grey",
                  textColor: "black",
                },
              ]}
            />
          </li>
          <li>
            <Project
              href="/portfolio/momentum"
              image="./images/momentum.png"
              title="MOMENTUM"
              description="My first 3D Unity game,made by following the Brackeys tutorial and then adding some artistic touch,with procedural level generation."
              tag={[
                {
                  title: "#unity",
                  mainColor: "Black",
                  textColor: "White",
                },
              ]}
            />
          </li>
          <li>
            <Project
              href="/portfolio/chess"
              image="./images/chess.png"
              title="Chess Lite"
              description="Its Chess,with a minimax algorithm as opponent."
            />
          </li>
          <li>
            <Project
              href="/portfolio/yt-shorts-bot"
              image="./images/yt-shorts-bot.png"
              title="Youtube shorts bot"
              description="A script that scrapes reddit,uses text-to-speech and ffmpeg to (sometimes) create a youtube shorts format video."
              tag={[
                {
                  title: "#node-js",
                  mainColor: "#35d110",
                  textColor: "#1f231e",
                },
                {
                  title: "#ffmpeg",
                  mainColor: "Green",
                  textColor: "White",
                },
              ]}
            />
          </li>
        </ul>
      </main>
    </>
  );
}

function Project(props: any) {
  const values = props.tag;
  return (
    <article className="bg-tersiary rounded-2xl text-primary transition ease-in duration-300 h-full hover:scale-102">
      <a href={props.href}>
        <div className="flex h-setHeight p-0">
          <Image
            src={'/'+props.image}
            alt="the cover page of one of my projects that I have worked on"
            width={1200}
            height={1200}
            className=" block object-cover w-full h-auto rounded-t-2xl"
          ></Image>
        </div>
        <h2 className="text-2xl my-3 font-bold transition duration-500 ease-in-out hover:text-secondary">
          {props.title}
        </h2>
        <p className=" opacity-70 text-lg p-1">{props.description}</p>
        <div className="inline-flex float-left my-2 ml-2">
          {values &&
            values.map((value: any, index: any) => (
              <Tag
                key={index}
                mainColor={value.mainColor}
                textColor={value.textColor}
                title={value.title}
              />
            ))}
        </div>
      </a>
    </article>
  );
}

function Tag(props: any) {
  return (
    <span
      style={{ background: props.mainColor, color: props.textColor }}
      className={`rounded-lg flex-wrap ml-1 text-lg px-1`}
    >
      {props.title}
    </span>
  );
}
