import "./ProcessCard.css";
import procesGrid from "@/assets/images/process/process_card_grid.png";
import procesStar from "@/assets/images/process/process_card_star.png";
import light from "@/assets/images/process/light.png";
import Image from "next/image";
import star from "@/assets/images/process/star.svg";

const ProcessCard = ({ phase, title, intro, description }) => {
  return (
    <div className="process__card overflow-hidden">
      <div className="space-y-6 p-8 sm:p-11">
        <div className="btn__pill">
          <div className="star_icon h-6 w-6 relative">
            <Image
              src={star}
              alt="star"
              width={12}
              height={12}
              className="absolute left-[6px] top-1"
            />
            <Image
              src={star}
              alt="star"
              width={6}
              height={6}
              className="absolute left-[15px] top-3"
            />
            <Image
              src={star}
              alt="star"
              width={4}
              height={4}
              className="absolute left-[5px] top-[14px]"
            />
          </div>
          <span className="text-white text-sm">{phase}</span>
        </div>
        <h2 className="text-3xl font-semibold hero__heading">{title}</h2>
        <div>
          <p className="italic text-base text-light-gray mb-1">{intro}</p>
          <p className="text-base text-light-gray">{description}</p>
        </div>
      </div>
      <Image
        src={procesStar}
        alt="stars in background"
        className="absolute top-0 -z-10 left-0 right-0 mx-auto w-3/5 rotate-90"
        layout="responsive"
      />
      <Image
        src={procesGrid}
        alt="stars in background"
        className="absolute top-0 -z-10 right-0
        w-3/5"
      />
      <Image
        src={light}
        alt="stars in background"
        className="absolute top-0 -z-10 right-0 -left-2/4 rotate-180"
      />
    </div>
  );
};

export default ProcessCard;
