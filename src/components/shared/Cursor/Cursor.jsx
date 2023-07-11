"use client";
import dynamic from "next/dynamic";

const Cursor = () => {
  const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
    ssr: false,
  });
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={70}
      innerScale={1}
      outerScale={1.5}
      outerAlpha={0.05}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
      ]}
      showSystemCursor={true}
      innerStyle={{
        backgroundColor: "#3bc2fe",
      }}
      outerStyle={{
        border: "3px solid #3bc2fe",
      }}
    />
  );
};

export default Cursor;
