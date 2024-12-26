import { smallSphere, stars, check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const Pricing = () => {
  console.log(pricing.id);
  return (
    <section id="pricing" className="m-20">
      <div className="flex flex-col items-center mb-20">
        <img
          src={smallSphere}
          alt="Sphere"
          className="my-20"
          width={255}
          height={255}
        />
        <p className="font-code text-n-4">[ Get started with Brainwave ]</p>
        <h2 className="h2 my-2">Pay once, use forever</h2>
      </div>
      <div>
        <ul className="flex gap-2">
          {pricing.map((item) => (
            <li
              key={item.id}
              className="flex flex-col p-8 even:py-14 odd:py-8 odd:my-6 border-2 border-n-6 rounded-2xl [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
            >
              <h4 className="h4">{item.title}</h4>
              <p className="body-2 text-n-4">{item.description}</p>
              {item.price ? (
                <h3 className="h3 my-6">
                  $
                  <span className="text-[5.5rem] leading-none font-bold">
                    {item.price}
                  </span>
                </h3>
              ) : (
                <h3 className="h3 my-8 opacity-0">Kuch bhi hain</h3>
              )}
              {item.id == 2 ? (
                <Button className="font-code">GET STARTED</Button>
              ) : (
                <Button className="font-code" white>
                  GET STARTED
                </Button>
              )}
              <ul className="mt-12">
                {item.features.map((list) => (
                  <li className="flex items-start gap-3 py-4 border-t border-n-6 text-sm">
                    <img src={check} alt="check" className="" />
                    <p>{list}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full flex mt-16">
        <a
          href="#pricing"
          className="w-full underline text-center font-code font-semibold"
        >
          SEE THE FULL DETAILS
        </a>
      </div>
    </section>
  );
};

export default Pricing;
