// import stars from "@/assets/images/banner/stars.png";
import IconBox from "@/components/shared/IconBox/IconBox";
import "./Banner.css";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMongodb } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import CodeEditor from "@/components/CodeEditor/CodeEditor";

const Banner = () => {
  const backgroundStyle = {
    // background: `url(${stars.src}) no-repeat center center fixed`,
    // backgroundSize: "contain",
    // backgroundRepeat: "repeat",
  };

  return (
    <section className="banner py-32" style={backgroundStyle}>
      <div className="container grid grid-cols-8 gap-8">
        <div className="intro col-span-5 space-y-6">
          <h3 className="text-lg font-semibold text-primary">
            Welcome to my site
          </h3>
          <h1 className="text-7xl font-bold hero__heading">
            I{"'"}m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondery">
              Rabby Khan
            </span>
            , a MernStack developer.
          </h1>
          <div className="flex items-center gap-5">
            <IconBox Icon={FaReact} title="React.js" />
            <IconBox Icon={SiNextdotjs} title="Next.js" />
            <IconBox Icon={IoLogoNodejs} title="Node.js" />
            <IconBox Icon={SiMongodb} title="MongoDB" />
            <IconBox Icon={SiTailwindcss} title="Tailwind" />
          </div>
          <p className="text-light-gray text-lg">
            I love writing code that takes things next level creating highly
            performant websites, automated API integrations, building my own
            dev-tools, and creating stunning user-experiences that makes you
            feel WOW!.
          </p>
          <p className="text-light-gray text-lg">
            I am always keen to learn and explore new technologies, frameworks
            and programming languages. Currently, I{"'"}m learning about
            Tree.js.
          </p>
          <div className="flex items-center gap-8">
            <a href="mailto:ajrabbyk72@gmail.com" className="primary__btn">
              Let{"'"}s Work
            </a>
            <button type="button" className="outline__btn">
              Resume
            </button>
          </div>
        </div>
        <div className="code__editor col-span-3 self-end">
          <CodeEditor />
        </div>
      </div>
    </section>
  );
};

export default Banner;
