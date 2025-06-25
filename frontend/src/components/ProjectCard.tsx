import CardDesc from "./CardDesc";
import PhotoCard from "./PhotoCard";

interface ProjectCardProps {
  index: number,
  title: string,
  caption: string,
  status: string[],
  techstack: string[],

}

export default function ProjectCard({ index, title, caption, status, techstack }: ProjectCardProps) {
  return (
    <div className="flex flex-row mb-30">
      {
        (index % 2 === 1) ?
          <>
            <PhotoCard leftval={0} rightval={20} />
            <CardDesc
              title={title}
              caption={caption}
              status={status}
              techstack={techstack} />
          </> :
          <>
            <CardDesc
              title={title}
              caption={caption}
              status={status}
              techstack={techstack} />
            <PhotoCard leftval={20} rightval={0} />
          </>
      }
    </div>
  );
}