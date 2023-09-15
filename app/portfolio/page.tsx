import { ProjectBlooper } from "../components/ProjectBlooper";
import { ProjectTagTitle } from "../components/ProjectTag";
export default function PortfolioPage() {
  return (
    <>
      <header className="flex justify-center">
        <h1 className="text-white font-semibold text-5xl mt-16 ">Projects</h1>
      </header>
      <main className="mt-16 w-11/12 mx-auto">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <li>
            <ProjectBlooper
              fileName="bullet"
              image="bullet.png"
              title="GMTK Game Jam 2023"
              description="'Roles reversed' was the theme of the GMTK game jam this year,I built this platformer using unity where the bullets are your allies."
              tag={[ProjectTagTitle.Unity,ProjectTagTitle.GameJam]}
            />
          </li>
          <li>
            <ProjectBlooper
              fileName="react-native-chess"
              image="react-native-chess.png"
              title="Native Chess"
              description="Native Chess is a testament to my ability to quickly learn React Native and Firebase. It offers secure login, registration, a leaderboard, and engaging gameplay. I honed skills in TypeScript, Firebase storage, authentication, and Expo development."
              tag={[ProjectTagTitle.TypeScript,ProjectTagTitle.ReactNative,ProjectTagTitle.Firebase]}
            />
          </li>
          <li>
            <ProjectBlooper
              fileName="visometer"
              image="visometer-title.png"
              title="Visometer"
              description="Visometer is a dynamic web application I crafted using Next.js, offering a deep dive into web development while creating custom API endpoints. Its primary mission is to deliver precise weather data🌊"
              tag={[ProjectTagTitle.NextJs,ProjectTagTitle.TypeScript,ProjectTagTitle.ReactJs]}
            />
          </li>
          <li>
            <ProjectBlooper
              fileName="ballistics"
              image="ballistics.png"
              title="Ballistics"
              description="A local multiplayer game made in Unity where 2 players run around and attack eachother."
              tag={[ProjectTagTitle.Unity]}
            />
          </li>
          <li>
            <ProjectBlooper
              fileName="velocity"
              image="velocity.png"
              title="Velocity"
              description="A fully custom car physics demo complete with procedural terrain generation."
              tag={[ProjectTagTitle.Unity]}
            />
          </li>
          <li>
            <ProjectBlooper
              fileName="kaboom-multiplayer-game"
              image="kaboom-multiplayer-game.png"
              title="Kaboom"
              description="Get ready to rumble in Kaboom Local Multiplayer Game, where two robots go head-to-head in explosive battles! 🤖💥"
              tag={[ProjectTagTitle.KaboomJs,ProjectTagTitle.Vite]}
            />
          </li>
          <li>
            <ProjectBlooper
              fileName="https://imgtoascii-51d7b.web.app/"
              image="imgtoascii-example.png"
              title="Image to ASCII"
              description="Software that takes in an image as input and allows you to turn it into a ascii version aswell as allowing control of other settings."
              tag={[ProjectTagTitle.JavaScript]}
            />
          </li>
          <li>
            <ProjectBlooper
              fileName="momentum"
              image="momentum.png"
              title="MOMENTUM"
              description="My first 3D Unity game,made by following the Brackeys tutorial and then adding some artistic touch,with procedural level generation."
              tag={[ProjectTagTitle.Unity]}
            />
          </li>
          <li>
            <ProjectBlooper
              fileName="tank"
              image="tanks.png"
              title="Express  Tanks"
              description="A Multiplayer game made using node-js,express and websocket.io,complete with weappn upgrades and powerups."
              tag={[ProjectTagTitle.Express,ProjectTagTitle.NodeJs]}
            />
          </li>
          <li>
            <ProjectBlooper
              fileName="yt-shorts-bot"
              image="yt-shorts-bot.png"
              title="Youtube shorts bot"
              description="A script that scrapes reddit,uses text-to-speech and ffmpeg to (sometimes) create a youtube shorts format video."
              tag={[ProjectTagTitle.FFMpeg,ProjectTagTitle.NodeJs]}
            />
          </li>
        </ul>
      </main>
    </>
  );
}
