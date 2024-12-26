import React from "react";
import Button from "./Button";
import { curve, robot } from "../assets";
import { companyLogos } from "../constants";

const Hero = () => {
  console.log(companyLogos);
  return (
    <>
      <section className="py-6 px-4">
        <div className="flex flex-col items-center my-24 mx-12">
          <div className="relative">
            <h1 className="relative text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-center">
              Explore the Possibilities of AI Chatting with Brainwave
            </h1>
            <img
              src={curve}
              alt="curve"
              className="w-52 md:w-56 lg:w-60 absolute"
            />
          </div>
          <p className="text-gray-400 text-sm text-center my-8">
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>
          <Button href="#pricing" white>
            GET STARTED
          </Button>
        </div>

        <div className="flex items-center flex-col justify-center gap-12">
          <img
            src={robot}
            alt="robot"
            className="rounded-3xl sm:w-6/12 object-contain"
          />
          <p className="text-gray-400 text-sm ">
            Helping people create beautiful content at
          </p>
        </div>
        <div className="hidden lg:flex lg:justify-evenly lg:items-center my-16">
          {companyLogos.map((item) => (
            <img src={item} alt="item" />
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;
