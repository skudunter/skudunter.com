type ProjectTypeProps = {
  title: string;
  mainColor: string;
  secondaryColor?: string;
  textColor: string;
};

export default function ProjectTag({
  title,
  mainColor,
  secondaryColor,
  textColor,
}: ProjectTypeProps) {
  return (
    <span
      style={{
        backgroundImage: `linear-gradient(to top right,${mainColor},${
          secondaryColor ? secondaryColor : mainColor
        })`,
        color: textColor,
      }}
      className={`rounded-lg ml-1 text-lg px-2 font-mono `}
    >
      {title}
    </span>
  );
}
