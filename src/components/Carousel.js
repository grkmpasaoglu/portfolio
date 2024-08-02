import React from "react";

const Carousel = () => {
  return (
    <div className="flex overflow-x-scroll mx-auto">
        <a href="https://github.com/grkmpasaoglu/pos-application" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-[600px] h-[400px] rounded-md overflow-hidden flex flex-col justify-center items-center text-custom-white">
          <div className="text-custom-white syne-header h-96 rounded-md flex flex-col justify-center px-12 gap-y-7">
            <img src="/gifs/pos.gif" alt="pos Application" />
            <div className=" flex flex-row justify-between">
              <h1 className="text-3xl font-bold">pos Application</h1>
              <h2 className="text-sm  font-bold">Design & Develop</h2>
            </div>
          </div>
        </a>

        <a href="https://github.com/grkmpasaoglu/quiz-app" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-[600px] h-[400px] rounded-md overflow-hidden flex flex-col justify-center items-center text-custom-white">
        <div className="text-custom-white syne-header h-96 rounded-md flex flex-col justify-center px-12 gap-y-7">
          <img src="/gifs/quiz.gif" alt="quiz App" />
          <div className=" flex flex-row justify-between">
            <h1 className="text-3xl font-bold">Quiz App</h1>
            <h2 className="text-sm  font-bold">Design & Develop</h2>
          </div>
        </div>
      </a>

      <a href="https://github.com/grkmpasaoglu/popupsmart-clone" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-[600px] h-[400px] rounded-md overflow-hidden flex flex-col justify-center items-center text-custom-white">
      <div className="text-custom-white syne-header h-96 rounded-md flex flex-col justify-center px-12 gap-y-7">
          <img src="/gifs/popup.gif" alt="pos Application" />
          <div className=" flex flex-row justify-between">
            <h1 className="text-3xl font-bold">Popupsmart Clone</h1>
            <h2 className="text-sm  font-bold">Design & Clone</h2>
          </div>
        </div>
      </a>

      <a href="https://github.com/grkmpasaoglu/lol-champs" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-[600px] h-[400px] rounded-md overflow-hidden flex flex-col justify-center items-center text-custom-white">
      <div className="text-custom-white syne-header h-96 rounded-md flex flex-col justify-center px-12 gap-y-7">
          <img src="/gifs/lol.gif" alt="pos Application" />
          <div className=" flex flex-row justify-between">
            <h1 className="text-3xl font-bold">LOL Champs</h1>
            <h2 className="text-sm  font-bold">Design & Develop</h2>
          </div>
        </div>
      </a>


    </div>
  );
};

export default Carousel;
