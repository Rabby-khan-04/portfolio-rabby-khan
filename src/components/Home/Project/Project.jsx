"use client";
import BackgroundSquare from "@/components/shared/BackgroundSquare/BackgroundSquare";
import "./Project.css";
import { useEffect, useState } from "react";
import ProjectCard from "@/components/shared/ProjectCard/ProjectCard";

const Project = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("./projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="work">
      <div className="line__brake"></div>
      <div className="max-w-[1180px] mx-auto px-3 lg:px-4 xl:px-0 py-32 relative">
        <BackgroundSquare />
        <div className="intro text-center mb-[72px]">
          <h2 className="hero__heading text-7xl font font-medium mb-4">
            From Vision to Reality
          </h2>
          <p className="text-light-gray text-xl">
            Illustrating My Proficiency through Completed Projects and Success
            Stories
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;