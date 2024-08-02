import React from "react";
import "../App.css";
import CarouselSlider from "../components/Carousel";
import { Carousel } from "antd";
import Header from "./Header";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div className="bg-black">
      <Header />

      <div className="h-screen">
        <main className="flex flex-col justify-center h-full pt-16">
          <div className="scrolling-container mb-4">
            <div className="scrolling-text syne-font text-9xl text-custom-white">
              <div>
                GORKEM PASAOGLU GORKEM PASAOGLU GORKEM PASAOGLU GORKEM PASAOGLU
              </div>
            </div>
          </div>
          <div className="text-custom-white ml-8 md:ml-32 syne-header">
            <p className="text-lg">Detayları dikkate alarak</p>
            <p className="text-lg">güçlü web tasarımı</p>
            <p className="text-lg">kişiye özel geliştirme.</p>
          </div>
        </main>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-11/12 mx-auto my-12">
        {/* Soldaki Div */}
        <div className="order-2 md:order-1 h-96 text-custom-white flex flex-col justify-center items-start px-8 py-6">
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
            <p className="text-base md:text-lg text-center mt-4 font-medium">
              Tamamıyla Responsive Tasarım
            </p>
          </div>
        </div>
      </div>


      <main className="flex flex-col md:flex-row justify-evenly h-full pt-8 md:pt-16 text-custom-white syne-header gap-y-6 md:gap-y-9">
        <div className="w-full px-4 md:w-1/3">
          <div className="text-custom-white syne-header">
            <p>
              Her proje için 'sıfırdan' tasarımlı, etkili ve estetik bir web
              sitesi hedefliyorum. Gürültüsüz, kısa iletişim hatlarıyla
              erişilebilir bir işbirliği.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex items-center">
          <div className="flex-shrink-0 w-24 h-24 rounded-full overflow-hidden border-4 border-gray-700 mr-4">
            <img
              src="https://avatars.githubusercontent.com/u/101420814?v=4"
              alt="Gorkem's profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-custom-white">
            <h2 className="text-xl md:text-2xl">GORKEM</h2>
            <p className="text-xs md:text-sm">Web Developer</p>
            <p className="text-xs md:text-sm">Hakkımda</p>
          </div>
        </div>
      </main>

      <h1 className="text-3xl md:text-5xl text-custom-white syne-header mt-16 md:mt-32 px-4 md:px-10 w-full md:w-4/5 flex items-center space-x-2">
        <span>Projeler</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-6 h-6">
          <path fill="#ffffff" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
        </svg>
      </h1>

      <div className="overflow-x-auto p-4 md:p-8">
        <CarouselSlider />
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
