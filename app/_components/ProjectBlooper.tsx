import Image from "next/image";
import Link from "next/link";
import ProjectTag from "../_components/ProjectTag";
type ProjectBlooperProps = {
  fileName: string;
  image: string;
  title: string;
  description: string;
  tag?: Array<{ title: string; mainColor: string; textColor: string }>;
};
export function ProjectBlooper(props: ProjectBlooperProps) {
  const values = props.tag;
  return (
    <article className="bg-tersiary rounded-2xl text-primary transition ease-in duration-300 h-full hover:scale-102">
      <Link
        href={
          props.fileName.includes("https")
            ? `${props.fileName}`
            : `portfolio/${props.fileName}`
        }
      >
        <div className="flex h-setHeight p-0">
          <Image
            src={"/images/" + props.image}
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
              <ProjectTag
                key={index}
                mainColor={value.mainColor}
                textColor={value.textColor}
                title={value.title}
              />
            ))}
        </div>
      </Link>
    </article>
  );
}
