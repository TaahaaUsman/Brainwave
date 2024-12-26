import { socials } from "../constants";

const Footer = () => {
  return (
    <footer className="h-32 mx-20">
      <div className="w-full h-full flex justify-between items-center border-t border-n-7">
        <div className="body-2 text-n-4">
          © {new Date().getFullYear()} All rights reserved.
        </div>
        <div>
          <ul className="w-full h-full flex items-center gap-6">
            {socials.map((item) => {
              return (
                <a
                  href={item.url}
                  key={item.id}
                  target="_blank"
                  className="flex justify-center items-center w-10 h-10 bg-n-7 hover:bg-n-6 rounded-full transition-colors"
                >
                  <img src={item.iconUrl} alt="icon" />
                </a>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
