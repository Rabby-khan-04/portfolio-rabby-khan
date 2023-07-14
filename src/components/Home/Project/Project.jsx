"use client";
import BackgroundSquare from "@/components/shared/BackgroundSquare/BackgroundSquare";
import "./Project.css";
import { useEffect, useState } from "react";
import ProjectCard from "@/components/shared/ProjectCard/ProjectCard";

const Project = () => {
  const [portfolio, setPortfolio] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Rabby-khan-04/portfolio-projects/main/projects.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setPortfolio(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="work" name="portfolio">
      <div className="line__brake"></div>
      <div className="max-w-[1180px] mx-auto px-3 lg:px-4 xl:px-0 py-10 sm:py-16 md:py-20 lg:py-32 relative">
        <BackgroundSquare />
        <div className="intro text-center mb-[72px]">
          <h2 className="hero__heading text-5xl md:text-6xl lg:text-7xl font-medium mb-4">
            From Vision to Reality
          </h2>
          <p className="text-light-gray text-xl">
            Illustrating My Proficiency through Completed Projects and Success
            Stories
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-lg:max-w-xl mx-auto">
          {portfolio.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
