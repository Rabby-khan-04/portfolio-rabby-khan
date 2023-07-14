"use client";

import TechBox from "@/components/TechBox/TechBox";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsArrowLeft, BsCodeSlash } from "react-icons/bs";
import { Tooltip } from "react-tooltip";

const SinglePortfolioPage = ({ params }) => {
  const [currentPortfolio, setCurrentPortfolio] = useState({});
  const id = Number(params.id);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Rabby-khan-04/portfolio-projects/main/projects.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setCurrentPortfolio(data.find((item) => item.id === id));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const {
    title,
    description,
    tech,
    thumbnail,
    image,
    date,
    liveLink,
    clientCode,
    serverCode,
  } = currentPortfolio;

  console.log(tech);

  return (
    <section className="grid lg:grid-cols-5 xl:grid-cols-3">
      <div className="lg:col-span-3 xl:col-span-2">
        <Image
          src={image}
          alt="Project Image"
          width={1000}
          height={1000}
          layout="responsive"
        />
      </div>
      <div className="relative px-4 sm:px-5 md:px-10 py-[30px] lg:col-span-2 xl:col-span-1 order-first lg:order-last">
        <div className="sticky top-8">
          <div>
            <Link href="/" className="btn__rounded">
              <BsArrowLeft className="text-light-gray text-2xl" />
            </Link>
          </div>
          <div className=" mt-[30px] mb-4 flex items-center justify-between">
            <h2 className="hero__heading text-[32px]">{title}</h2>
            <div className="btn__pill">
              <span className="text-light-gray text-sm">{date}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-6 flex-wrap">
            {tech &&
              tech.map((techItem, index) => (
                <TechBox key={index} tech={techItem} />
              ))}
          </div>

          <p className="text-lg text-light-gray">{description}</p>
          <div className="flex items-center gap-5 mt-5 flex-wrap">
            <a
              className="btn__pill__xl text-xl text-light-gray"
              href={clientCode}
              target="_blank"
              data-tooltip-id="client-code"
              data-tooltip-content="Client Side Code"
            >
              <BsCodeSlash className="text-light-gray text-2xl" />
              <Tooltip id="client-code" place="bottom" variant="light" />
            </a>

            {serverCode && (
              <a
                className="btn__pill__xl text-xl text-light-gray"
                href={serverCode}
                target="_blank"
                data-tooltip-id="server-code"
                data-tooltip-content="Server Side Code"
              >
                <BsCodeSlash className="text-light-gray text-2xl" />
                <Tooltip id="server-code" place="bottom" variant="light" />
              </a>
            )}

            <a
              className="btn__pill__xl text-xl text-light-gray"
              href={liveLink}
              target="_blank"
            >
              Live View
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SinglePortfolioPage;
