// import React from "react";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <>
      <title>cath's space - personal projects</title>
      <section className="lexend text-5xl ml-10 mr-10">
        Projects
      </section>

      <section className="mt-16 ml-0 md:ml-5 w-max h-max flex flex-col items-center justify-center">
        <ProjectCard index={1}
          title={"eCOM Dashboard"}
          caption={"An ESG dashboard app assisting corporations & investors in exploring, monitoring and reporting ESG metrics."}
          status={["Completed", "Github"]}
          techstack={["ReactTSX", "TailwindCSS", "NodeTSX"]} />
        <ProjectCard index={2}
          title={"Electus"}
          caption={"A voting tool for UNSW society held AGMs."}
          status={["Completed", "Github"]}
          techstack={["ReactTSX", "TailwindCSS", "NodeTSX"]} />
        <ProjectCard index={3}
          title={"Baked by Dora"}
          caption={"The official BBD cafe website."}
          status={["WIP", "Github", 'Figma Design']}
          techstack={["ReactTSX", "TailwindCSS", "NodeTSX"]} />
        {/* <PhotoCard />
        <CardDesc /> */}
      </section>
    </>
  );
}