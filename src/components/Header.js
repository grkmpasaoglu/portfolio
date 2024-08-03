import React, { useEffect, useState } from "react";
import HeaderDrop from "./HeaderDrop";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header className="fixed flex justify-between items-center p-8 syne-header h-28 z-50 bg-black w-full">
        <a href="/" className="text-custom-white xl:text-left">
          <div className="relative -mt-5">
            <div
              className={`absolute  flex flex-col  justify-center ${
                isScrolled
                  ? "opacity-0 transition-all duration-500"
                  : "opacity-100 transition-all duration-500"
              }`}
            >
              <p className="text-sm xl:text-xl xl:-mb-3">GORKEM</p>
              <p className="text-sm xl:text-xl">PASAOGLU</p>
            </div>
            <div
              className={`absolute flex flex-col justify-center ${
                isScrolled
                  ? "opacity-100 transition-all duration-500 text-custom-white rounded-lg"
                  : "opacity-0 transition-all duration-500"
              }`}
            >
              <p className="text-sm xl:text-xl  xl:-mb-3">GO</p>
              <p className="text-sm xl:text-xl ">PA</p>
            </div>
          </div>
        </a>
        <div className="flex space-x-4">
          <HeaderDrop />
          {/* <a
            href="/about"
            className="relative inline-block text-custom-white text-sm xl:text-lg syne-header group"
          >
            HAKKIMDA
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a> */}
        </div>
      </header>
    </div>
  );
};

export default Header;
