import { process } from "@/utils/process";
import "./Process.css";
import ProcessCard from "@/components/ProcessCard/ProcessCard";
import BackgroundSquare from "@/components/shared/BackgroundSquare/BackgroundSquare";

const Process = () => {
  return (
    <section className="process py-32">
      <div className="container relative">
        <BackgroundSquare count={4} />
        <div className="intro text-center max-w-4xl mx-auto">
          <h2 className="hero__heading text-7xl font font-medium mb-4">
            The Alchemy <br />
            of Creation
          </h2>
          <p className="text-light-gray text-xl">
            Diving into the Steps and Strategies of my Creative Process
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-8">
          {process.map((info, index) => (
            <ProcessCard
              key={index}
              phase={info.phase}
              title={info.title}
              intro={info.intro}
              description={info.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
