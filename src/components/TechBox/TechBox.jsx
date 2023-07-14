import Image from "next/image";
import React from "react";

const TechBox = ({ tech }) => {
  const { name, icon } = tech;
  return (
    <div className="flex items-center gap-1">
      <Image src={icon} alt={name} width={20} height={20} />
      <p className="text-base text-light-gray">{name}</p>
    </div>
  );
};

export default TechBox;
