// import React from "react";
import ProjectCard from "../components/ProjectCard";

export default function PersonalProjects() {
  return (
    <>
      <title>cath's space - personal projects</title>
      <section className="lexend text-5xl">
        Personal Projects
      </section>

      <section className="mt-16 flex flex-col">
        <ProjectCard index={1} />
        <ProjectCard index={2} />
        {/* <PhotoCard />
        <CardDesc /> */}
      </section>
    </>
  );
}