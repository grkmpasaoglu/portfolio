import React from "react";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";

const About = () => {
    return (
        <div className="bg-black text-custom-white">
            <Header />
            <div className="flex flex-col xl:flex-row pt-32 px-4">
                <div className="md:w-8/12 mb-8 md:mb-0 md:ml-32">
                    <h1 className="syne-header text-5xl xl:text-8xl">WEB</h1>
                    <h1 className="animated-text syne-header text-5xl xl:text-8xl mt-4">
                        <span></span>
                    </h1>
                </div>
                <div className="xl:w-4/12 mt-10 xl:mt-0 flex items-center justify-center">
                    <img
                        src="https://avatars.githubusercontent.com/u/101420814?v=4"
                        alt="Gorkem's profile"
                        className="object-cover w-48 h-48 xl:w-72 xl:h-72 rounded-full overflow-hidden"
                    />
                </div>
            </div>

            <div className="w-full md:w-10/12 mx-auto syne-header space-y-4 text-custom-white md:border-l-4 rounded-md border-white px-4 md:px-6  py-4 md:py-6">
                <p>1999 yılında Ankara'da doğdum.</p>
                <p>İlokul ve lise eğitimimi burada tamamladım.</p>
                <p>
                    Kırıkkale Üniversitesi Bilgisayar Mühendisliği bölümünden 3.20 GPA ve
                    bölüm üçüncülüğü ile mezun oldum.
                </p>
                <p>
                    Limak Technology ve Popupsmart firmalarında staj yaparak web
                    geliştirme alanında deneyim kazandım.
                </p>
                <p>
                    Front-end ve full-stack geliştirme konularında çalıştım ve dinamik
                    API'lerle projeler geliştirdim.
                </p>
                <p>
                    JavaScript, React, TypeScript, NextJS, Tailwind CSS gibi alanlarda
                    deneyimlerim bulunmakta.
                </p>
            </div>

            <div className="w-full md:w-11/12 mx-auto syne-header space-y-4 text-custom-white mt-16">
                <h2 className="px-4 md:px-12 mb-4 text-xl md:text-2xl syne-header">Hakkımda</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
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
                        <h1 className="text-lg md:text-xl mb-3">Eğitim</h1>
                        <p className="text-sm md:text-base">
                            Kırıkkale Üniversitesi Bilgisayar Mühendisliği Bölümünden 3.20 GPA
                            / bölüm 3. lüğü ile mezun oldum
                        </p>
                        <p className="text-sm md:text-base">
                            Veri Yapıları ve Algoritmalar, Nesne Yönelimli Programlama,
                            Veritabanı Sistemleri, Yazılım Mühendisliği, Bilgisayar
                            Organizasyonu derslerini aldım.
                        </p>
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
                        <h1 className="text-lg md:text-xl mb-3">Beceriler</h1>
                        <p className="text-sm md:text-base">Programlama</p>
                        <p className="text-sm md:text-base">
                            JavaScript, TypeScript, React, NodeJS, NextJS, Tailwind CSS, Git,
                            MsSQL
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

                        <h1 className="text-xl md:text-2xl mb-3">Popupsmart</h1>
                        <p className="text-base">Full-Stack Developer Intern</p>
                        <p className="text-base">
                            Şirketin versiyon geçişinde yardımcı oldum ve pop-up yazılımına
                            dayalı deneyim kazandım. JavaScript'te dinamik yazım deneyimi ve
                            SEO dostu, performans odaklı ve gözlemlenebilir web uygulamaları
                            geliştirme deneyimi elde ettim.
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
                        <p className="text-base">Front-End Developer Intern</p>
                        <p className="text-base">
                            React ile ön yüz geliştirme üzerine odaklandım ve dinamik
                            bileşenlerle web sitesi sayfaları oluşturdum.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;
