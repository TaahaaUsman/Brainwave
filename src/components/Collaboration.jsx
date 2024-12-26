import { check } from "../assets";
import { collabContent } from "../constants";
import Button from "./Button";

const Collaboration = () => {
  const text = collabContent[0].text;
  return (
    <section className="m-20">
      <div className="w-full flex justify-between">
        <div className="w-[40%] py-10 px-20">
          <h2 className="h2 mb-16">AI Chat App for seamless collaboration</h2>
          <div>
            <ul className="flex flex-col gap-6">
              {collabContent.map((item) => (
                <li key={item.id}>
                  <div className="flex gap-3 items-center">
                    <img src={check} alt="check" />
                    <h2 className="">{item.title}</h2>
                  </div>
                  {item.text ? (
                    <p className="body-2 mt-4 text-n-4">{item.text}</p>
                  ) : (
                    ""
                  )}
                </li>
              ))}
            </ul>
          </div>
          <Button className="font-code mt-10">TRY IT NOW</Button>
        </div>

        <div className="w-[40%]">
          <p className="body-2 text-n-4">{text}</p>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
