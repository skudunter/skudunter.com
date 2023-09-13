
export default function ProjectTag({
  title, mainColor, textColor,
}: {
  title: string;
  mainColor: string;
  textColor: string;
}) {
  return (
    <span
      style={{ background: mainColor, color: textColor }}
      className={`rounded-lg flex-wrap ml-1 text-lg px-1`}
    >
      {title}
    </span>
  );
}
