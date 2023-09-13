import { readFileSync, existsSync } from "fs";
import { ReactNode } from "react";
import { marked } from "marked";

export default function ProjectPage({ params }: { params: { title: string } }) {
  return <>{getMarkDownFileContent(params.title)}</>;
}

function getMarkDownFileContent(fileName: string): ReactNode {
  const filePath: string = `./public/content/${fileName}.md`;

  if (existsSync(filePath)) {
    const markdownContent: string = readFileSync(filePath, "utf8");

    return (
      <div dangerouslySetInnerHTML={{ __html: marked(markdownContent) }} />
    );
  } else {
    return (
      <div className="grid place-items-center mt-64 text-white text-5xl underline decoration-secondary">
        <p>File not found</p>
      </div>
    );
  }
}
