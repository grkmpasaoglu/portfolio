import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";
import HeaderDrop from "./HeaderDrop";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage } = useContext(LanguageContext);

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
              className={`absolute flex flex-col justify-center ${isScrolled
                ? "opacity-0 transition-all duration-500"
                : "opacity-100 transition-all duration-500"
                }`}
            >
              <p className="text-sm xl:text-xl xl:-mb-3">GORKEM</p>
              <p className="text-sm xl:text-xl">PASAOGLU</p>
            </div>
            <div
              className={`absolute flex flex-col justify-center ${isScrolled
                ? "opacity-100 transition-all duration-500 text-custom-white rounded-lg"
                : "opacity-0 transition-all duration-500"
                }`}
            >
              <p className="text-sm xl:text-xl xl:-mb-3">GO</p>
              <p className="text-sm xl:text-xl">PA</p>
            </div>
          </div>
        </a>
        <div className="flex space-x-4 items-center">
          <HeaderDrop />
          <button
            onClick={toggleLanguage}
            className="flex items-center text-custom-white text-sm xl:text-lg syne-header"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              className="w-5 h-5 xl:w-6 xl:h-6 mr-2"
              fill="currentColor" // SVG'nin rengini butonun rengini alacak şekilde ayarlar
            >
              <path d="M0 128C0 92.7 28.7 64 64 64l192 0 48 0 16 0 256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64l-256 0-16 0-48 0L64 448c-35.3 0-64-28.7-64-64L0 128zm320 0l0 256 256 0 0-256-256 0zM178.3 175.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-64 144c-4.5 10.1 .1 21.9 10.2 26.4s21.9-.1 26.4-10.2l8.9-20.1 73.6 0 8.9 20.1c4.5 10.1 16.3 14.6 26.4 10.2s14.6-16.3 10.2-26.4l-64-144zM160 233.2L179 276l-38 0 19-42.8zM448 164c11 0 20 9 20 20l0 4 44 0 16 0c11 0 20 9 20 20s-9 20-20 20l-2 0-1.6 4.5c-8.9 24.4-22.4 46.6-39.6 65.4c.9 .6 1.8 1.1 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.9 27.4s-18 12.5-27.4 6.9l-18.9-11.3c-4.5-2.7-8.8-5.5-13.1-8.5c-10.6 7.5-21.9 14-34 19.4l-3.6 1.6c-10.1 4.5-21.9-.1-26.4-10.2s.1-21.9 10.2-26.4l3.6-1.6c6.4-2.9 12.6-6.1 18.5-9.8l-12.2-12.2c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l14.6 14.6 .5 .5c12.4-13.1 22.5-28.3 29.8-45L448 228l-72 0c-11 0-20-9-20-20s9-20 20-20l52 0 0-4c0-11 9-20 20-20z"/>
            </svg>
            {language === "TR" ? "🇬🇧" : "🇹🇷"}
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
