import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import Button from "./Button";

const Roadmap = () => {
  return (
    <section id="roadmap" className="m-20">
      <div className="flex flex-col items-center mb-20">
        <p className="font-code text-n-4">[ Ready to get started ]</p>
        <h2 className="h2 my-2">What we’re working on</h2>
      </div>

      <div className="mb-44">
        <div className="flex flex-wrap justify-between gap-4 relative">
          {roadmap.map((item) => {
            return (
              <div
                key={item.id}
                className={`w-[49%] border-2 border-n-6 rounded-3xl p-20 relative ${
                  item.id === "1" || item.id === "3" ? "top-28" : ""
                }`}
              >
                <div className="flex justify-between items-center font-code p-8 text-sm">
                  <span>[ {item.date} ]</span>
                  <div className="px-4 py-1 rounded bg-white text-black flex gap-2">
                    <img src={loading1} /> {item.status}
                  </div>
                </div>

                <div>
                  <img src={item.imageUrl} alt="image" />
                </div>

                <div className="my-2">
                  <h3 className="h3 mb-6">{item.title}</h3>
                  <p className="body-2 text-n-4">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="text-center">
        <Button>OUR ROADMAP</Button>
      </div>
    </section>
  );
};

export default Roadmap;
