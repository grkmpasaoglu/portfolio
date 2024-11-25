import React, { useContext } from "react";
import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button, Carousel } from "antd";
import CarouselSlider from "../components/Carousel";
import { LanguageContext } from "../context/LanguageContext";
import { useTranslation } from "react-i18next";

const About = () => {
  const { language } = useContext(LanguageContext);

  const { t, i18n } = useTranslation();
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <Header />
      <div className="bg-black text-custom-white animate-fade-in-up">
        <div className="flex flex-col xl:flex-row pt-32 px-4">
          <div className="md:w-8/12 mb-8 md:mb-0 md:ml-32">
            <h1 className="syne-header text-5xl xl:text-8xl">WEB</h1>
            <h1 className="animated-text syne-header text-5xl xl:text-8xl mt-4">
              <span></span>
            </h1>
          </div>
          <div className="xl:w-4/12 my-4 xl:mt-0 xl:mr-32 flex items-center justify-center">
            <img
              src="https://avatars.githubusercontent.com/u/101420814?v=4"
              alt="Gorkem's profile"
              className="object-cover w-48 h-48 xl:w-72 xl:h-72 rounded-full overflow-hidden"
            />
          </div>
        </div>

        <div className="w-full md:w-10/12 mx-auto syne-header space-y-4 text-custom-white md:border-l-4 rounded-md border-white px-4 md:px-6 py-4 md:py-6">
          {t("intro", { returnObjects: true }).map((sentence, index) => (
            <p key={index}>{sentence}</p>
          ))}
        </div>

        <div className="w-full md:w-11/12 mx-auto syne-header space-y-4 text-custom-white mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
            <div className="relative bg-gray-800 p-6 md:p-8 hover:-translate-y-2 transition-transform duration-300">
              <svg
                className="absolute top-4 right-4 w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="#ffffff"
                  d="M219.3 .5c3.1-.6 6.3-.6 9.4 0l200 40C439.9 42.7 448 52.6 448 64s-8.1 21.3-19.3 23.5L352 102.9l0 57.1c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-57.1L48 93.3l0 65.1 15.7 78.4c.9 4.7-.3 9.6-3.3 13.3s-7.6 5.9-12.4 5.9l-32 0c-4.8 0-9.3-2.1-12.4-5.9s-4.3-8.6-3.3-13.3L16 158.4l0-71.8C6.5 83.3 0 74.3 0 64C0 52.6 8.1 42.7 19.3 40.5l200-40zM111.9 327.7c10.5-3.4 21.8 .4 29.4 8.5l71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5C401 348.6 448 409.4 448 481.3c0 17-13.8 30.7-30.7 30.7L30.7 512C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6z"
                />
              </svg>
              <>
                <h1 className="text-lg md:text-3xl mb-3">
                  {t("education.title")}
                </h1>

                {t("education.description", { returnObjects: true }).map(
                  (desc, index) => (
                    <p key={index} className="text-sm my-2 md:text-base">
                      {desc}
                    </p>
                  )
                )}
              </>
            </div>
            <div className="relative bg-gray-800 p-6 md:p-8 hover:-translate-y-2 transition-transform duration-300">
              <svg
                className="absolute top-4 right-4 w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path
                  fill="#ffffff"
                  d="M384 96l0 224L64 320 64 96l320 0zM64 32C28.7 32 0 60.7 0 96L0 320c0 35.3 28.7 64 64 64l117.3 0-10.7 32L96 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-74.7 0-10.7-32L384 384c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L64 32zm464 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0zm16 64l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm-16 80c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16zm32 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
                />
              </svg>
              <div>
                <h1 className="text-lg md:text-3xl mb-3">
                  {t("skills.title")}
                </h1>
                <p className="text-sm my-2 md:text-base">
                  {t("skills.programming")}
                </p>
                <p className="text-sm md:text-base">
                  {t("skills.technologies")}
                </p>
              </div>
            </div>
            <div class="relative bg-gray-800 p-8 hover:-translate-y-2 transition-all duration-300">
              <svg
                class="absolute top-4 right-4 w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="#ffffff"
                  d="M48 0C21.5 0 0 21.5 0 48L0 464c0 26.5 21.5 48 48 48l96 0 0-80c0-26.5 21.5-48 48-48s48 21.5 48 48l0 80 96 0c26.5 0 48-21.5 48-48l0-416c0-26.5-21.5-48-48-48L48 0zM64 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm112-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM80 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM272 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z"
                />
              </svg>

              <h1 className="text-xl md:text-2xl mb-3">Popupsmart</h1>
              <p className="text-base my-2">Full-Stack Developer Intern</p>
              <p className="text-base">
                {t("experiences.popupsmart.description")}
              </p>
            </div>
            <div class="relative bg-gray-800 p-8 hover:-translate-y-2 transition-all duration-300">
              <svg
                class="absolute top-4 right-4 w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="#ffffff"
                  d="M48 0C21.5 0 0 21.5 0 48L0 464c0 26.5 21.5 48 48 48l96 0 0-80c0-26.5 21.5-48 48-48s48 21.5 48 48l0 80 96 0c26.5 0 48-21.5 48-48l0-416c0-26.5-21.5-48-48-48L48 0zM64 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm112-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM80 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM272 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z"
                />
              </svg>
              <h1 className="text-xl md:text-2xl mb-3">Limak Technology</h1>
              <p className="text-base my-2">Front-End Developer Intern</p>
              <p className="text-base">{t("experiences.limak.description")}</p>
            </div>

            <div class="relative bg-gray-800 p-8 hover:-translate-y-2 transition-all duration-300">
              <svg
                class="absolute top-4 right-4 w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="#ffffff"
                  d="M48 0C21.5 0 0 21.5 0 48L0 464c0 26.5 21.5 48 48 48l96 0 0-80c0-26.5 21.5-48 48-48s48 21.5 48 48l0 80 96 0c26.5 0 48-21.5 48-48l0-416c0-26.5-21.5-48-48-48L48 0zM64 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm112-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM80 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM272 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z"
                />
              </svg>
              <h1 className="text-xl md:text-2xl mb-3">
                2C Bilgi Teknolojileri
              </h1>
              <p className="text-base my-2">React Developer</p>
              <p className="text-base">{t("experiences.2c.description")}</p>
            </div>

            <div className="relative bg-gray-800 p-8 hover:-translate-y-2 transition-all duration-300">
              <svg
                className="absolute top-4 right-4 w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="#ffffff"
                  d="M48 0C21.5 0 0 21.5 0 48L0 464c0 26.5 21.5 48 48 48l96 0 0-80c0-26.5 21.5-48 48-48s48 21.5 48 48l0 80 96 0c26.5 0 48-21.5 48-48l0-416c0-26.5-21.5-48-48-48L48 0zM64 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm112-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM80 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM272 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z"
                />
              </svg>
              <h1 className="text-xl md:text-2xl mb-3">Freelance</h1>
              <p className="text-base my-2">React Developer</p>
              <p className="text-base">
                {t("experiences.freelance.description")}
              </p>
            </div>
          </div>
        </div>

        <div className="scrolling-container mt-8 mb-4 xl:mb-40">
          <div className="scrolling-text text-9xl syne-font text-custom-white">
            <div>
              GORKEM PASAOGLU GORKEM PASAOGLU GORKEM PASAOGLU GORKEM PASAOGLU
              GORKEM PASAOGLU GORKEM PASAOGLU GORKEM PASAOGLU GORKEM PASAOGLU
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-4 w-11/12 mx-auto my-12">
          {/* Soldaki Div */}
          <div className="order-2 md:order-1 xl:h-96 text-custom-white flex flex-col justify-center items-start px-8 xl:py-6">
            <h1 className="text-4xl md:text-6xl mb-4 font-bold leading-tight">
              <p>UI & UX</p>
              <p>DESIGN</p>
            </h1>
            <h2 className="text-3xl md:text-5xl font-semibold">
              FULLY RESPONSIVE
            </h2>
          </div>

          {/* Sağdaki Div */}
          <div className="order-1 md:order-2 h-96 flex items-center justify-center px-4">
            <div className="w-full max-w-screen-lg">
              <Carousel
                autoplay
                dots={false}
                speed={2000}
                className="w-full h-full"
              >
                <div className="flex justify-center items-center h-full">
                  <img
                    src="/imgs/3rm.png"
                    alt="responsive designs"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-center items-center h-full">
                  <img
                    src="/imgs/2rm.png"
                    alt="responsive designs"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-center items-center h-full">
                  <img
                    src="/imgs/1rm.png"
                    alt="responsive designs"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Carousel>
            </div>
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl text-custom-white syne-header mt-16 md:mt-32 px-4 md:px-10 w-full md:w-4/5 flex items-center space-x-2">
          {t("projects.title")}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            className="w-6 h-6 hidden xl:block"
          >
            <path
              fill="#ffffff"
              d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
            />
          </svg>

          <svg
            className="w-8 h-6  block xl:hidden "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="#ffffff"
              d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
            />
          </svg>
        </h1>

        <div className="">
          <CarouselSlider />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 w-11/12 xl:w-8/12 mx-auto my-12 syne-header">
          {/* Soldaki Div */}
          <div className="text-custom-white flex flex-col justify-center items-start px-8 xl:py-6">
            <p className="text-xl"> {t("projects.detailPhrase1")}</p>

            <p className="text-xl"> {t("projects.detailPhrase2")}</p>

            <p className="text-xl"> {t("projects.detailPhrase3")}</p>
          </div>

          {/* Sağdaki Div */}
          <div className="text-custom-white flex flex-col justify-center items-start px-8 xl:py-6">
            <p className="text-xl"> {t("projects.descriptionPhrase1")}</p>

            <p className="text-xl"> {t("projects.descriptionPhrase2")}</p>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default About;
