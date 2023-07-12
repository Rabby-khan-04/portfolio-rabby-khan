import Image from "next/image";
import "./ProjectCard.css";
import Tilt from "react-parallax-tilt";

const ProjectCard = ({ project, index }) => {
  const {
    id,
    title,
    description,
    tech,
    thumbnail,
    image,
    date,
    liveLink,
    clientCode,
    serverCode,
  } = project;

  return (
    <div className={`project__card ${index % 2 === 1 ? "mt-24" : ""}`}>
      <div className="p-20 project__thumbnail mb-4">
        <Tilt
          className="parallax-effect-glare-scale rounded-xl overflow-hidden w-[380px] mx-auto"
          perspective={2500}
          glareEnable={true}
          glareMaxOpacity={0.45}
          scale={1.05}
        >
          <Image
            src={thumbnail}
            className="opacity-70 hover:opacity-100 transition-all duration-300 w-[380px] mx-auto inline-block rounded-xl"
            alt="Project Image"
            width={380}
            height={442}
          />
        </Tilt>
      </div>
      <div>
        <div className="flex justify-between items-center">
          <h2 className="hero__heading text-[32px]">{title}</h2>
          <div className="btn__pill">
            <span className="text-light-gray text-sm">{date}</span>
          </div>
        </div>
        <p className="text-light-gray text-base">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
