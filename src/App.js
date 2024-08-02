// import React, { useRef } from 'react';
// import './App.css';
// import CarouselSlider from './components/Carousel';
// import useIntersectionObserver from './components/useIntersectionObserver';

// const App = () => {
//   const options = {
//     root: null, // Use the viewport as the root
//     rootMargin: '0px',
//     threshold: 1, // Trigger when 10% of the element is visible
//   };

//   // Refs for each component
//   const fadeInRef1 = useRef(null);
//   const fadeInRef2 = useRef(null);
//   const fadeInRef3 = useRef(null);
//   const fadeInRef4 = useRef(null);
//   const fadeInRef5 = useRef(null);
//   const fadeInRef6 = useRef(null);
//   const fadeInRef7 = useRef(null);
//   const fadeInRef8 = useRef(null);
//   const fadeInRef9 = useRef(null);
//   const fadeInRef10 = useRef(null);

//   // Visibility states
//   const isVisible1 = useIntersectionObserver(fadeInRef1, options);
//   const isVisible2 = useIntersectionObserver(fadeInRef2, options);
//   const isVisible3 = useIntersectionObserver(fadeInRef3, options);
//   const isVisible4 = useIntersectionObserver(fadeInRef4, options);
//   const isVisible5 = useIntersectionObserver(fadeInRef5, options);
//   const isVisible6 = useIntersectionObserver(fadeInRef6, options);
//   const isVisible7 = useIntersectionObserver(fadeInRef7, options);
//   const isVisible8 = useIntersectionObserver(fadeInRef8, options);
//   const isVisible9 = useIntersectionObserver(fadeInRef9, options);
//   const isVisible10 = useIntersectionObserver(fadeInRef10, options);

//   return (
//     <div className='bg-black'>
//       <div className="h-screen">
//         <header ref={fadeInRef1} className={`fixed top-0 left-0 right-0 flex justify-between items-center p-8 bg-black syne-header fade-in ${isVisible1 ? 'visible' : ''}`}>
//           <div className='text-custom-white'>
//             <p className='text-xl -mb-3'>GORKEM</p>
//             <p className='text-xl'>PASAOGLU</p>
//           </div>
//         </header>

//         <main className="flex flex-col justify-center h-full pt-16">
//           <div ref={fadeInRef2} className={`scrolling-container mb-4 fade-in ${isVisible2 ? 'visible' : ''}`}>
//             <div className="scrolling-text syne-font text-9xl text-custom-white">
//               <div>
//                 GORKEM PASAOGLU GORKEM PASAOGLU GORKEM PASAOGLU GORKEM PASAOGLU
//               </div>
//             </div>
//           </div>
//           <div ref={fadeInRef3} className={`text-custom-white ml-32 syne-header fade-in ${isVisible3 ? 'visible' : ''}`}>
//             <p className='text-lg'>Detayları dikkate alarak</p>
//             <p className='text-lg'>güçlü web tasarımı</p>
//             <p className='text-lg'>kişiye özel geliştirme.</p>
//           </div>
//         </main>

//         <footer ref={fadeInRef4} className={`absolute bottom-0 right-0 p-8 flex gap-4 fade-in ${isVisible4 ? 'visible' : ''}`}>
//           <a href="https://instagram.com/grkmpasaoglu" target="_blank" rel="noopener noreferrer">
//             <img
//               src="https://cdn.prod.website-files.com/636423ea1c03ca74c0a976d7/6472f62e038ebc884e13458c_icon-social-insta-v4.svg"
//               alt="Instagram Logo"
//               className='w-6 h-6 icon-white'
//             />
//           </a>
//           <a href="https://www.linkedin.com/in/gorkempasaoglu" target="_blank" rel="noopener noreferrer">
//             <img
//               src="https://cdn.prod.website-files.com/636423ea1c03ca74c0a976d7/646e2cb9c7a44a26efc89fee_icon-linkedin.svg"
//               alt="LinkedIn Logo"
//               className='w-6 h-6 icon-white'
//             />
//           </a>
//         </footer>

//         <footer ref={fadeInRef5} className={`absolute bottom-0 left-0 p-8 flex items-center fade-in ${isVisible5 ? 'visible' : ''}`}>
//           <a href="mailto:gorkempasaoglu@outlook.com" className='text-custom-white text-lg syne-header'>
//             ILETISIM
//           </a>
//         </footer>
//       </div>

//       <div className="flex flex-col items-center mt-8">
//         <div ref={fadeInRef6} className={`flex flex-row items-center justify-around w-full px-8 syne-header text-custom-white gap-8 fade-in ${isVisible6 ? 'visible' : ''}`}>
//           <div className="bg-gray-800 w-1/3 h-96 rounded-md p-4 flex flex-col justify-center px-10 gap-y-7 hover:pb-10 transition-all duration-300">
//             <h1 className='text-5xl'>
//               <p>UI & UX</p>
//               <p>DESIGN</p>
//             </h1>
//             <p className="text-lg">write something about ui & ux</p>
//           </div>
//           <div className="bg-gray-800 w-1/3 h-96 rounded-md p-4 flex flex-col justify-center px-10 gap-y-7 hover:pb-10 transition-all duration-300">
//             <h1 className='text-5xl'>
//               <p>RESPONSIVE</p>
//               <p>DESIGN</p>
//             </h1>
//             <p className="text-lg">write something about responsive</p>
//           </div>
//         </div>
//       </div>

//       <h1 ref={fadeInRef7} className={`text-5xl text-custom-white syne-header mt-32 px-10 w-4/5 fade-in ${isVisible7 ? 'visible' : ''}`}>
//         A kesintisiz kombinasyon ile yaratıcı bir şekilde tasarım ile ilgili nitel teknik gelişim.
//       </h1>

//       <main ref={fadeInRef8} className={`flex flex-row justify-evenly h-full pt-16 text-custom-white ml-10 syne-header gap-y-9 fade-in ${isVisible8 ? 'visible' : ''}`}>
//         <div className='w-1/3'>
//           <div className='text-custom-white syne-header'>
//             <p> Her proje için 'sıfırdan' tasarımlı, etkili ve estetik bir web sitesi hedefliyorum. Gürültüsüz, kısa iletişim hatlarıyla erişilebilir bir işbirliği. </p>
//           </div>
//         </div>
//         <div className='w-1/3 flex items-center'>
//           <div className='flex-shrink-0 w-24 h-24 rounded-full overflow-hidden border-4 border-gray-700 mr-4'>
//             <img
//               src="https://avatars.githubusercontent.com/u/101420814?v=4"
//               alt="Gorkem's profile"
//               className='w-full h-full object-cover'
//             />
//           </div>
//           <div className='text-custom-white'>
//             <h2 className='text-2xl'>GORKEM</h2>
//             <p className='text-xs'>Web Developer</p>
//             <p className='text-xs'>Hakkımda</p>
//           </div>
//         </div>
//       </main>

//       <h1 ref={fadeInRef9} className={`text-5xl text-custom-white syne-header mt-32 px-10 w-4/5 fade-in ${isVisible9 ? 'visible' : ''}`}>
//         Projeler
//       </h1>

//       <div ref={fadeInRef10} className={`overflow-x-auto p-8 fade-in ${isVisible10 ? 'visible' : ''}`}>
//         <CarouselSlider />
//       </div>

//       <footer className={`bottom-0 left-0 p-8 flex items-center text-custom-white syne-header fade-in ${isVisible10 ? 'visible' : ''}`}>
//         <i className="fas fa-map-marker-alt text-2xl mr-2"></i>
//         <p className='text-lg mr-5'>ANKARA, TÜRKİYE</p>
//         <a href="https://www.linkedin.com/in/gorkempasaoglu" target="_blank" rel="noopener noreferrer">
//         <img
//               src="https://cdn.prod.website-files.com/636423ea1c03ca74c0a976d7/646e2cb9c7a44a26efc89fee_icon-linkedin.svg"
//               alt="LinkedIn Logo"
//               className='w-4 h-4 icon-white mr-5'
//             />
//         </a>
//         <a href="https://instagram.com/grkmpasaoglu" target="_blank" rel="noopener noreferrer">
//           <img
//             src="https://cdn.prod.website-files.com/636423ea1c03ca74c0a976d7/6472f62e038ebc884e13458c_icon-social-insta-v4.svg"
//             alt="Instagram Logo"
//             className='w-4 h-4 icon-white'
//           />
//         </a>
//       </footer>
//     </div>
//   );
// }

// export default App;

// import React, { useRef } from 'react';
// import './App.css';
// import CarouselSlider from './components/Carousel';
// import useIntersectionObserver from './components/useIntersectionObserver';
// import { Carousel } from 'antd';

// const contentStyle = {
//   height: '160px',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',

// };

// const App = () => {
//   const options = {
//     root: null, // Use the viewport as the root
//     rootMargin: '0px',
//     threshold: 1, // Trigger when 10% of the element is visible
//   };

//   // Refs for each component
//   const fadeInRef1 = useRef(null);
//   const fadeInRef2 = useRef(null);
//   const fadeInRef3 = useRef(null);
//   const fadeInRef4 = useRef(null);
//   const fadeInRef5 = useRef(null);
//   const fadeInRef6 = useRef(null);
//   const fadeInRef7 = useRef(null);
//   const fadeInRef8 = useRef(null);
//   const fadeInRef9 = useRef(null);
//   const fadeInRef10 = useRef(null);

//   // Visibility states
//   const isVisible1 = useIntersectionObserver(fadeInRef1, options);
//   const isVisible2 = useIntersectionObserver(fadeInRef2, options);
//   const isVisible3 = useIntersectionObserver(fadeInRef3, options);
//   const isVisible4 = useIntersectionObserver(fadeInRef4, options);
//   const isVisible5 = useIntersectionObserver(fadeInRef5, options);
//   const isVisible6 = useIntersectionObserver(fadeInRef6, options);
//   const isVisible7 = useIntersectionObserver(fadeInRef7, options);
//   const isVisible8 = useIntersectionObserver(fadeInRef8, options);
//   const isVisible9 = useIntersectionObserver(fadeInRef9, options);
//   const isVisible10 = useIntersectionObserver(fadeInRef10, options);

//   return (
//     <div className='bg-black'>
//       <div className="h-screen">
//         <header ref={fadeInRef1} className={`fixed top-0 left-0 right-0 flex justify-between items-center z-50 p-8 bg-black syne-header fade-in ${isVisible1 ? 'visible' : ''}`}>
//           <div className='text-custom-white text-center md:text-left'>
//             <p className='text-lg md:text-xl -mb-2 md:-mb-3'>GORKEM</p>
//             <p className='text-lg md:text-xl'>PASAOGLU</p>
//           </div>
//         </header>

//         <main className="flex flex-col justify-center h-full pt-16">
//           <div ref={fadeInRef2} className={`scrolling-container mb-4 fade-in ${isVisible2 ? 'visible' : ''}`}>
//             <div className="scrolling-text syne-font text-9xl text-custom-white">
//               <div>
//                 GORKEM PASAOGLU GORKEM PASAOGLU GORKEM PASAOGLU GORKEM PASAOGLU
//               </div>
//             </div>
//           </div>
//           <div ref={fadeInRef3} className={`text-custom-white ml-32 syne-header fade-in ${isVisible3 ? 'visible' : ''}`}>
//             <p className='text-lg'>Detayları dikkate alarak</p>
//             <p className='text-lg'>güçlü web tasarımı</p>
//             <p className='text-lg'>kişiye özel geliştirme.</p>
//           </div>
//         </main>

//         <footer ref={fadeInRef4} className={`absolute bottom-0 right-0 p-4 md:p-8 flex gap-2 md:gap-4 fade-in ${isVisible4 ? 'visible' : ''}`}>
//           <a href="https://instagram.com/grkmpasaoglu" target="_blank" rel="noopener noreferrer">
//             <img
//               src="https://cdn.prod.website-files.com/636423ea1c03ca74c0a976d7/6472f62e038ebc884e13458c_icon-social-insta-v4.svg"
//               alt="Instagram Logo"
//               className='w-4 h-4 md:w-6 md:h-6 icon-white'
//             />
//           </a>
//           <a href="https://www.linkedin.com/in/gorkempasaoglu" target="_blank" rel="noopener noreferrer">
//             <img
//               src="https://cdn.prod.website-files.com/636423ea1c03ca74c0a976d7/646e2cb9c7a44a26efc89fee_icon-linkedin.svg"
//               alt="LinkedIn Logo"
//               className='w-4 h-4 md:w-6 md:h-6 icon-white'
//             />
//           </a>
//         </footer>

//         <footer ref={fadeInRef5} className={`absolute bottom-0 left-0 p-4 md:p-8 flex items-center fade-in ${isVisible5 ? 'visible' : ''}`}>
//           <a href="mailto:gorkempasaoglu@outlook.com" className='text-custom-white text-base md:text-lg syne-header'>
//             ILETISIM
//           </a>
//         </footer>
//       </div>

//       <div className="flex flex-col items-center mt-4 md:mt-8">
//         <div ref={fadeInRef6} className={`flex flex-col md:flex-row items-center justify-around w-full px-4 md:px-8 syne-header text-custom-white gap-4 md:gap-8 fade-in ${isVisible6 ? 'visible' : ''}`}>
//           <div className="bg-gray-800 w-full md:w-1/3 h-80 md:h-96 rounded-md p-4 flex flex-col justify-center px-4 md:px-10 gap-y-4 md:gap-y-7 hover:pb-10 transition-all duration-300">
//             <h1 className='text-3xl md:text-5xl'>
//               <p>UI & UX</p>
//               <p>DESIGN</p>
//             </h1>
//             <p className="text-base md:text-lg">Yapılandırılmış ve profesyonel bir görünüme sahip özelleştirilmiş web sitesi tasarımı.</p>
//           </div>
//           <div className="bg-gray-800 w-full md:w-1/3 h-80 md:h-96 rounded-md p-4 flex flex-col justify-between md:px-10 gap-y-4 md:gap-y-7 hover:pb-10 transition-all duration-300">
//             <Carousel autoplay dots={false} speed={2000} style={contentStyle} className="mb-2">
//               <div className='flex justify-center items-center h-2/3'>
//                 <img src='/imgs/1rm.png' alt='responsive designs' className="h-full object-contain" />
//               </div>
//               <div className='flex justify-center items-center h-2/3'>
//                 <img src='/imgs/2rm.png' alt='responsive designs' className="h-full object-contain" />
//               </div>
//               <div className='flex justify-center items-center h-2/3'>
//                 <img src='/imgs/3rm.png' alt='responsive designs' className="h-full object-contain" />
//               </div>
//             </Carousel>
//             <p className="text-base md:text-lg text-center">Tamamıyla Responsive Tasarım</p>
//           </div>
//         </div>
//       </div>

//       <h1 ref={fadeInRef7} className={`text-3xl md:text-5xl text-custom-white syne-header mt-16 md:mt-32 px-4 md:px-10 w-full md:w-4/5 fade-in ${isVisible7 ? 'visible' : ''}`}>
//         A kesintisiz kombinasyon ile yaratıcı bir şekilde tasarım ile ilgili nitel teknik gelişim.
//       </h1>

//       <main ref={fadeInRef8} className={`flex flex-col md:flex-row justify-evenly h-full pt-8 md:pt-16 text-custom-white syne-header gap-y-6 md:gap-y-9 fade-in ${isVisible8 ? 'visible' : ''}`}>
//         <div className='w-full md:w-1/3'>
//           <div className='text-custom-white syne-header'>
//             <p> Her proje için 'sıfırdan' tasarımlı, etkili ve estetik bir web sitesi hedefliyorum. Gürültüsüz, kısa iletişim hatlarıyla erişilebilir bir işbirliği. </p>
//           </div>
//         </div>
//         <div className='w-full md:w-1/3 flex items-center'>
//           <div className='flex-shrink-0 w-24 h-24 rounded-full overflow-hidden border-4 border-gray-700 mr-4'>
//             <img
//               src="https://avatars.githubusercontent.com/u/101420814?v=4"
//               alt="Gorkem's profile"
//               className='w-full h-full object-cover'
//             />
//           </div>
//           <div className='text-custom-white'>
//             <h2 className='text-xl md:text-2xl'>GORKEM</h2>
//             <p className='text-xs md:text-sm'>Web Developer</p>
//             <p className='text-xs md:text-sm'>Hakkımda</p>
//           </div>
//         </div>
//       </main>

//       <h1 ref={fadeInRef9} className={`text-3xl md:text-5xl text-custom-white syne-header mt-16 md:mt-32 px-4 md:px-10 w-full md:w-4/5 fade-in ${isVisible9 ? 'visible' : ''}`}>
//         Projeler
//       </h1>

//       <div ref={fadeInRef10} className={`overflow-x-auto p-4 md:p-8 fade-in ${isVisible10 ? 'visible' : ''}`}>
//         <CarouselSlider />
//       </div>

//       <footer className={`bottom-0 left-0 p-8 flex items-center text-custom-white syne-header fade-in ${isVisible10 ? 'visible' : ''}`}>
//         <i className="fas fa-map-marker-alt text-2xl mr-2"></i>
//         <p className='text-lg mr-5'>ANKARA, TÜRKİYE</p>
//         <a href="https://www.linkedin.com/in/gorkempasaoglu" target="_blank" rel="noopener noreferrer">
//           <img
//             src="https://cdn.prod.website-files.com/636423ea1c03ca74c0a976d7/646e2cb9c7a44a26efc89fee_icon-linkedin.svg"
//             alt="LinkedIn Logo"
//             className='w-4 h-4 icon-white mr-5'
//           />
//         </a>
//         <a href="https://instagram.com/grkmpasaoglu" target="_blank" rel="noopener noreferrer">
//           <img
//             src="https://cdn.prod.website-files.com/636423ea1c03ca74c0a976d7/6472f62e038ebc884e13458c_icon-social-insta-v4.svg"
//             alt="Instagram Logo"
//             className='w-4 h-4 icon-white'
//           />
//         </a>
//       </footer>
//     </div>

//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import About from "./components/About";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
