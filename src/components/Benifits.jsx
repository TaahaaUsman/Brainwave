import React from "react";
import { benefits } from "../constants";
import Button from "./Button";
import Arrow from "../assets/svg/Arrow";

const Benifits = () => {
  return (
    <section id="features">
      <div>
        <h1 className="h2 text-center my-24">
          Chat Smarter, Not Harder
          <br /> with Brainwave
        </h1>
      </div>

      <div className="">
        <ul className="flex flex-wrap justify-evenly items-center gap-10">
          {benefits.map((item) => (
            <li
              key={item.id}
              className="w-96 p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] group relative" // Add group class here
            >
              <div
                className="w-full h-full absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-2xl"
                style={{
                  backgroundImage: `url(${item.imageUrl})`,
                }}
              ></div>
              <div className="w-full border-1 rounded-2xl py-6 px-8 relative z-10">
                <h3 className="h5 mb-5">{item.title}</h3>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex justify-between items-center mt-32">
                  <img
                    src={item.iconUrl}
                    alt="Kuchbhi"
                    width={48}
                    height={48}
                  />
                  <div className="flex">
                    <p className="font-code">Explore More</p>
                    <Arrow />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Benifits;
