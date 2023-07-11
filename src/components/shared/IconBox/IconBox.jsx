import React from "react";

const IconBox = ({ Icon, title }) => {
  return (
    <div className="flex items-center text-light-gray2 gap-2">
      <Icon className="text-[28px]" />
      <h3 className="text-base">{title}</h3>
    </div>
  );
};

export default IconBox;
