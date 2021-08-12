import React, { FC, useState, useRef, useEffect } from "react";
import whiteLogo from "../../images/logo_white.png";
import darkLogo from "../../images/logo_01.png";

const NavigationBar: FC = () => {
  const buttonSpacing: string = "border-2 border-white rounded-full px-8 py-2";

  const [show, setShow] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const [navBg, setNavBg] = useState<string>(
    "bg-gradient-to-r from-light to-deep"
  );
  const [navTextColor, setNavTextColor] = useState<string>("text-white");
  const [logoSrc, setLogoSrc] = useState<string>(whiteLogo);
  const [buttonStyle, setButtonStyle] = useState<string>("bg-white text-deep");
  const [menuBorder, setMenuBorder] = useState<string>("border-white");
  const [menuButtonColor, setMenuButtonColor] = useState<string>("white");

  useEffect(() => {
    const current = ref.current;

    if (show) {
      current?.classList.remove("hidden");
    }

    return () => current?.classList.add("hidden");
  }, [show]);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setNavBg("bg-white");
      setNavTextColor("text-black-900");
      setLogoSrc(darkLogo);
      setButtonStyle("bg-contentButton text-white");
      setMenuBorder("border-gray-700");
      setMenuButtonColor("gray");
    } else {
      setNavBg("bg-gradient-to-r from-light to-deep");
      setNavTextColor("text-white");
      setLogoSrc(whiteLogo);
      setButtonStyle("bg-white text-deep");
      setMenuBorder("border-white");
      setMenuButtonColor("white");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navButton = (
    <button
      onClick={() => setShow(!show)}
      className={`mobile-menu-button p-4 border rounded-lg mr-5 ${menuBorder}`}
    >
      <svg
        className="h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke={`${menuButtonColor}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  );

  return (
    <section className="sticky top-0 font-poppins">
      <nav
        className={`${navBg} ${navTextColor} flex lg:justify-around justify-between items-center border-b border-opacity-20 py-2`}
      >
        <div className="ml-5">
          <img src={logoSrc} alt="logo" />
        </div>
        <div className=" lg:block hidden">
          <a className="mr-4 font-bold" href="#home">
            Home
          </a>
          <a className="ml-4" href="#portfolio">
            Portfolio
          </a>
        </div>
        <div>
          <button
            className={`${buttonStyle} font-bold lg:block hidden ${buttonSpacing}`}
          >
            HIRE ME
          </button>
        </div>

        <div className="block lg:hidden">{navButton}</div>
      </nav>

      <nav
        ref={ref}
        className="bg-white w-full absolute top-0  lg:hidden hidden shadow-fullPage"
      >
        <div className="flex justify-between items-center border-b border-gray-700 border-opacity-20 py-2">
          <div className="ml-5">
            <img src={darkLogo} alt="logo" />
          </div>
          <div>
            <button
              onClick={() => setShow(!show)}
              className={`mobile-menu-button p-4 border border-gray-700 rounded-lg mr-5`}
            >
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="gray"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex flex-col text-center mt-16">
          <a href="#home" className="mb-8 font-bold text-lg font-black-700">
            Home
          </a>
          <a href="#portfolio" className="text-lg">
            Portfolio
          </a>
          <button className="bg-contentButton font-bold text-white px-8 py-3 rounded-full mt-16 mb-14 w-3/4 mx-auto">
            HIRE ME
          </button>
        </div>
      </nav>
    </section>
  );
};

export default NavigationBar;
