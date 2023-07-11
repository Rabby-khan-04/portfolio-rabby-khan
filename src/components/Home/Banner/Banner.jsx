import stars from "@/assets/images/banner/stars.png";

const Banner = () => {
  const backgroundStyle = {
    // background: `url(${stars.src}) no-repeat center center fixed`,
    // backgroundSize: "contain",
    // backgroundRepeat: "repeat",
  };

  return (
    <section className="h-screen banner" style={backgroundStyle}></section>
  );
};

export default Banner;
