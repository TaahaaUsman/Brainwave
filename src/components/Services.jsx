import { service1, service2, service3, check } from "../assets";
import { brainwaveServicesIcons } from "../constants";
import Button from "./Button";

const Services = () => {
  const options = ["Photo generating", "Photo enhance", "Seamless Integration"];
  const text = "Brainwave unlocks the potential of AI-powered applications";
  return (
    <section id="how-to-use" className="m-20">
      <div className="w-full flex flex-col gap-5 mb-20">
        <h2 className="h2 text-center">Generative AI made for creators.</h2>
        <p className="body-2 text-n-4 text-center">
          Brainwave unlocks the potential of AI-powered applications
        </p>
      </div>
      <div className="w-full flex">
        <img src={service1} alt="First" className="w-[80%]" />
        <div className="pt-56">
          <h3 className="text-3xl font-semibold">Smartest AI</h3>
          <p className="body-2 text-n-4 my-10">{text}</p>
          <div>
            <ul className="">
              {options.map((item) => (
                <li className="py-4 border-t border-n-6">
                  <div className="flex gap-2 items-center">
                    <img src={check} alt="check" />
                    <p className="">{item}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-10">
        <div className="w-[49%] relative overflow-hidden rounded-2xl">
          <img
            src={service2}
            alt="service2"
            className="w-full h-full object-cover bg-no-repeat"
          />
          <div className="absolute bottom-16 left-10 bg-transparent">
            <h4 className="h4">Photo editing</h4>
            <p className="body-2 text-n-4">
              Automatically enhance your photos using our AI app's photo editing
              feature. Try it now!
            </p>
          </div>
        </div>

        <div className="w-[49%] overflow-hidden rounded-2xl bg-n-7">
          <div className="p-10">
            <h4 className="h4 mb-4">Video generation</h4>
            <p className="body-2 text-n-4 mb-6">
              The world’s most powerful AI photo and video art generation
              engine. What will you create?
            </p>
            <div>
              <ul className="flex justify-between items-center">
                {brainwaveServicesIcons.map((item) => (
                  <li className="p-6 bg-n-6 rounded-lg">
                    <img src={item} alt="someThink" className="" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="p-4">
            <img src={service3} alt="service3" className="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
