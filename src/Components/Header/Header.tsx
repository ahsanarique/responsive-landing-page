import React, { FC } from "react";
import shape from "../../images/Shape_01@2x.png";
import headerImg from "../../images/image_01@2x.png";

const Header: FC = () => {
  const buttonSpacing: string =
    "border-2 border-white rounded-full px-6 py-3 col-span-12 md:col-span-6 lg:col-span-4 ";

  return (
    <header id="home" className="lg:bg-header-large-bg bg-header-small-bg">
      <div className="grid grid-cols-12 gap-4">
        <div className="text-center lg:text-left col-span-12 lg:col-span-6 flex flex-col justify-around lg:ml-20 mx-10">
          <div className="text-white font-poppins">
            <p className="lg:my-10 xs:my-5 my-5 ">BUSINESS WORKFLOW</p>
            <p className="lg:text-5xl md:text-4xl text-3xl font-bold">
              Get the most <br /> efficient UI design <br /> for your business
              now!
            </p>

            <p className="lg:mt-10 xs:mt-5 mt-5">
              Hire me to design a clean and modern UI for your <br /> product's
              website.
            </p>
          </div>
          <div className="grid grid-cols-12 gap-2 lg:mt-20 xs:mt-10 mt-10 font-poppins">
            <button
              className={`bg-white text-deep  font-bold ${buttonSpacing}`}
            >
              HIRE ME
            </button>
            <button className={`bg-transparent text-white ${buttonSpacing}`}>
              PORTFOLIO
            </button>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 flex flex-col justify-center items-center mt-16 lg:mr-20">
          <img className="w-3/4" src={headerImg} alt="large-img" />
        </div>
      </div>
      <img src={shape} alt="bg-shape" />
    </header>
  );
};

export default Header;
