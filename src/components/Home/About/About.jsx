import about from "@/assets/images/about/about.png";
import Image from "next/image";
import "./About.css";
import Counter from "@/components/shared/Counter/Counter";

const About = () => {
  return (
    <section className="py-32 about" name="about">
      <div className="container grid grid-cols-2 gap-8">
        <div>
          <Image src={about} alt="about" />
        </div>
        <div className="space-y-6 self-center">
          <h2 className="text-4xl font-semibold text-primary">
            Code Crusader: Unleashing Web Wonders and Exploring Tech Horizons
          </h2>
          <p className="text-light-gray text-lg">
            I am a highly skilled web developer based in Bangladesh with a
            strong passion for JavaScript. Over the past few years, I have
            dedicated myself to mastering front-end development using the MERN
            stack. My primary goal is to create visually pleasing and
            user-friendly experiences for both developers and end users.
          </p>
          <p className="text-light-gray text-lg">
            I{"'"}ve always been a tech fanatic, spending most of my time
            messing with computers and building cool stuff. Anime and movies are
            my jam, with One Piece, Naruto Shippuden, and Demon Slayer topping
            my favorites list. When I{"'"}m not engulfed in epic anime
            adventures, I{"'"}m busy developing websites, hanging out with
            friends, and playing games. Life{"'"}s a blast when you combine
            technology, anime, and good times with friends!
          </p>
          <div className="flex items-center gap-8">
            <Counter title="Years Old" number="22" />
            <Counter title="Years Freelancing" number="2+" />
            <Counter title="Clients" number="35+" />
            <Counter title="Commits On Github" number="666+" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
