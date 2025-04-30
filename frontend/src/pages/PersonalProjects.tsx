// import React from "react";

import Card from "../components/Card"

export default function PersonalProjects() {
  return (
    <>
      <title>cath's space - personal projects</title>
      <section className="lexend text-5xl">
        Personal Projects
      </section>

      <section className="mt-16 grid grid-cols-3 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </>
  );
}