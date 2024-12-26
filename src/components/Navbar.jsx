import React, { useState, useEffect } from "react";
import { brainwave } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import ButtonGradient from "../assets/svg/ButtonGradient";
import MenuSvg from "../assets/svg/MenuSvg";

const Navbar = () => {
  const firstFour = navigation.slice(0, 4);
  const [isClicked, setIsClicked] = useState(null);
  const [checkMobile, setCheckMobile] = useState(false);
  const [openNavigation, setOpenNavigation] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setCheckMobile(window.innerWidth <= 1140);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <nav className="h-16 px-4 py-9 w-full flex justify-between items-center border-b-[0.5px] border-gray-600 fixed bg-black z-10">
        <div className="flex justify-center items-center cursor-pointer">
          <img
            src={brainwave}
            alt="brainwave"
            className="w-36 sm:w-40 md:w-44 lg:w-52"
          />
        </div>

        <div
          className={`${
            checkMobile ? "hidden" : ""
          } text-gray-400 w-[63%] flex justify-between items-center text-sm font-code font-bold`}
        >
          <ul className="flex gap-8">
            {firstFour.map((item, id) => (
              <li
                key={id}
                className={`${
                  isClicked === id ? "text-white" : "text-gray-400"
                }`}
                onClick={() => setIsClicked(id)}
              >
                <a href={item.url} className="hover:text-white transition-all">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex gap-8  items-center">
            <a
              key={navigation[4].id}
              href={navigation[4].url}
              className="hover:text-white transition-all"
            >
              {navigation[4].title}
            </a>
            <Button>{navigation[5].title}</Button>
            <ButtonGradient />
          </div>
        </div>

        <div className={`${checkMobile ? "" : "hidden"}`}>
          <Button onClick={() => setOpenNavigation(!openNavigation)}>
            <MenuSvg openNavigation={openNavigation} />
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`${
          checkMobile && openNavigation ? "flex" : "hidden"
        } h-full flex justify-center items-center mt-[20%]`}
      >
        <ul className="h-full w-full flex flex-col gap-4">
          {navigation.map((item) => (
            <li key={item.id} className="w-full text-center">
              <Button href={item.url} className="">
                {item.title}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
