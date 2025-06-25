import CardDesc from "./CardDesc";
import PhotoCard from "./PhotoCard";

interface ProjectCardProps {
  index: number,
}

export default function ProjectCard({ index }: ProjectCardProps) {
  return (
    <div className="flex flex-row mb-30">
      {
        (index % 2 === 1) ?
          <>
            <PhotoCard leftval={0} rightval={20} />
            <CardDesc
              title={"eCOM Dashboard"}
              caption={"An ESG dashboard app assisting corporations & investors in exploring, monitoring and reporting ESG metrics."}
              status={["Completed", "Github"]}
              techstack={["ReactTSX", "TailwindCSS", "NodeTSX"]}
            />
          </> :
          <>
            <CardDesc title={"Electus"} caption={"A voting tool for UNSW society held AGMs."} status={["Completed", "Github"]}
              techstack={["ReactTSX", "TailwindCSS", "NodeTSX"]} />
            <PhotoCard leftval={20} rightval={0} />
          </>
      }
    </div>
  );
}