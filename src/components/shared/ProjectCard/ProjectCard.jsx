import Image from "next/image";
import "./ProjectCard.css";
import Tilt from "react-parallax-tilt";
import { useRouter } from "next/navigation";

const ProjectCard = ({ project, index }) => {
  const router = useRouter();
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

  const handlePortfolioNavigation = (id) => {
    router.push(`/portfolio/${id}`);
  };

  return (
    <div
      className={`project__card link cursor-pointer ${
        index % 2 === 1 ? "lg:mt-24" : ""
      }`}
      onClick={() => handlePortfolioNavigation(id)}
    >
      <div className="p-10 md:p-16 xl:p-20 project__thumbnail mb-4">
        <Tilt
          className="parallax-effect-glare-scale rounded-xl overflow-hidden sm:w-[380px] w-full mx-auto"
          perspective={2500}
          glareEnable={true}
          glareMaxOpacity={0.45}
          scale={1.05}
        >
          <Image
            src={thumbnail}
            className="opacity-70 hover:opacity-100 transition-all duration-300 sm:w-[380px] mx-auto inline-block rounded-xl w-full"
            alt="Project Image"
            width={380}
            height={442}
            layout="responsive"
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
