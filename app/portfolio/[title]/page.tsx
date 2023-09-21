import { readFileSync, existsSync } from "fs";
import { ReactNode } from "react";
import { marked } from "marked";
import path from 'path';

export default function ProjectPage({ params }: { params: { title: string } }) {
  return <>{getMarkDownFileContent(params.title)}</>;
}

function getMarkDownFileContent(fileName: string): ReactNode {
  const isDeployed = process.env.ISDEPLOYED === 'true';
  const basePath = isDeployed ? '/content' : './public/content';
  const filePath = path.join(process.cwd(), basePath, `${fileName}.md`);

  if (existsSync(filePath)) {
    const markdownContent = readFileSync(filePath, 'utf8');

    return (
      <div dangerouslySetInnerHTML={{ __html: marked(markdownContent) }} />
    );
  } else {
    return (
      <div className="grid place-items-center mt-64 text-white text-5xl font-semibold underline decoration-secondary">
        <p>File not found</p>
      </div>
    );
  }
}






