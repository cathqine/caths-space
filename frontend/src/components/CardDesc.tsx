import { useState } from "react";
import Tag from "./Tag";

interface CardDescProps {
  title: string,
  caption: string,
  status: string[],
  techstack: string[],
}

export default function CardDesc({ title, caption, status, techstack }: CardDescProps) {
  // tag types
  const frontend = ['ReactTSX', 'ReactJS', 'TailwindCSS', 'MUI']; // blue
  const stage = ['Launched', 'Figma Design', 'Github', 'Completed']; // green
  const inProgress = ['WIP', 'Archived']; // orange

  const [type, setType] = useState<string>('blue');

  return (
    <div className="lexend-light h-80 w-220 bg-gradient-to-b from-[#4b044c] to-[#0f0136] border-1 rounded-2xl flex flex-col justify-center p-10">
      <div className="flex flex-col mb-10">
        <span className="lexend text-3xl">{title}</span>
        <span className="pt-2 lexend-thin text-lg">{caption}</span>
      </div>

      <div className="flex flex-col mb-10">
        <div className="flex flex-row items-center">
          Status
          {status?.map((tag: string) => {
            // if (frontend.includes(tag)) setType('blue')
            // else if (stage.includes(tag)) setType('green')
            // else if (inProgress.includes(tag)) setType('orange')
            return (
              <Tag tag={tag} colour={type} />
            );
          })}
        </div>
        <div className="flex flex-row items-center mt-3">
          Tech stack
          {techstack?.map((tag: string) => {
            // if (frontend.includes(tag)) setType('blue')
            // else if (stage.includes(tag)) setType('green')
            // else if (inProgress.includes(tag)) setType('orange')
            return (
              <Tag tag={tag} colour={type} />
            );
          })}
        </div>
      </div>
    </div>
  );
}