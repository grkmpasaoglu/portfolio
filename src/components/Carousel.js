import React, { useEffect, useRef } from "react";

const Carousel = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scrollElement = scrollRef.current;
      const scrollAmount = scrollElement.scrollWidth * 0.1;
      scrollElement.scrollLeft = scrollAmount;
    }
  }, []);

  return (
    <div
      ref={scrollRef}
      className="md:flex overflow-x-scroll mx-auto"
    >
      <a
        href="https://github.com/grkmpasaoglu/pos-application"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-shrink-0 w-full md:w-[600px] h-80 md:h-[400px] mb-4 md:mb-0 md:mr-4 rounded-md overflow-hidden flex flex-col justify-center items-center text-custom-white"
      >
        <div className="text-custom-white syne-header h-96 rounded-md flex flex-col justify-center px-12 gap-y-7">
          <img src="/gifs/pos.gif" alt="pos Application" />
          <div className="flex flex-row justify-between">
            <h1 className="text-3xl font-bold">POS Application</h1>
            <h2 className="text-sm font-bold">Design & Develop</h2>
          </div>
        </div>
      </a>

      <a
        href="https://github.com/grkmpasaoglu/quiz-app"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-shrink-0 w-full md:w-[600px] h-80 md:h-[400px] mb-4 md:mb-0 md:mr-4 rounded-md overflow-hidden flex flex-col justify-center items-center text-custom-white"
      >
        <div className="text-custom-white syne-header h-96 rounded-md flex flex-col justify-center px-12 gap-y-7">
          <img src="/gifs/quiz.gif" alt="Quiz App" />
          <div className="flex flex-row justify-between">
            <h1 className="text-3xl font-bold">Quiz App</h1>
            <h2 className="text-sm font-bold">Design & Develop</h2>
          </div>
        </div>
      </a>

      <a
        href="https://github.com/grkmpasaoglu/popupsmart-clone"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-shrink-0 w-full md:w-[600px] h-80 md:h-[400px] mb-4 md:mb-0 md:mr-4 rounded-md overflow-hidden flex flex-col justify-center items-center text-custom-white"
      >
        <div className="text-custom-white syne-header h-96 rounded-md flex flex-col justify-center px-12 gap-y-7">
          <img src="/gifs/popup.gif" alt="Popupsmart Clone" />
          <div className="flex flex-row justify-between">
            <h1 className="text-3xl font-bold">Popupsmart Clone</h1>
            <h2 className="text-sm font-bold">Design & Clone</h2>
          </div>
        </div>
      </a>

      <a
        href="https://github.com/grkmpasaoglu/lol-champs"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-shrink-0 w-full md:w-[600px] h-[400px] mb-4 md:mb-0 rounded-md overflow-hidden flex flex-col justify-center items-center text-custom-white"
      >
        <div className="text-custom-white syne-header h-96 rounded-md flex flex-col justify-center px-12 gap-y-7">
          <img src="/gifs/lol.gif" alt="LOL Champs" />
          <div className="flex flex-row justify-between">
            <h1 className="text-3xl font-bold">LOL Champs</h1>
            <h2 className="text-sm font-bold">Design & Develop</h2>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Carousel;
