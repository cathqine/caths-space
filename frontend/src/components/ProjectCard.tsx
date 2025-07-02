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

  // use state to see if it is in mobile mode, if it is in mobile mode then it is hidden. otherwise it is not hidden
  return (
    <div className="flex flex-row mb-30">
      {
        (index % 2 === 1) ?
          <div className="flex md:flex-row flex-col overflow-y-hidden">
            <PhotoCard leftval={'ml-0'} rightval={'mr-20'} hidden={''} /> {/* overflow-y doesn't work for these? */}
            <CardDesc
              title={title}
              caption={caption}
              status={status}
              techstack={techstack} />
          </div> :
          <div className="flex md:flex-row flex-col overflow-y-hidden">
            <PhotoCard leftval={'ml-0'} rightval={'mr-0'} hidden={'visible md:hidden'} />
            <CardDesc
              title={title}
              caption={caption}
              status={status}
              techstack={techstack} />
            <PhotoCard leftval={'ml-20'} rightval={'mr-0'} hidden={'max-md:hidden visible'} />
          </div>
      }
    </div>
  );
}