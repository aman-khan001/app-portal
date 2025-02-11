'use client'
import Image from "next/image";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
         <Image class="bd-placeholder-img w-100" src={'/images/slider/1.jpg'} width={850} height={480} />
         
           <div class="carousel-caption text-start">
             <a  className="text-light text-decoration-none" href="#"><h1 className=" fs-5">Another example headline.</h1></a>
           </div>
        </SwiperSlide>
        <SwiperSlide>
        <Image class="bd-placeholder-img w-100" src={'/images/slider/1.jpg'} width={850} height={480} />
         
         <div class="carousel-caption text-start">
           <a  className="text-light text-decoration-none" href="#"><h1 className=" fs-5">Another example headline.</h1></a>
         </div>
        </SwiperSlide>
        <SwiperSlide>
        <Image class="bd-placeholder-img w-100" src={'/images/slider/1.jpg'} width={850} height={480} />
         
         <div class="carousel-caption text-start">
           <a  className="text-light text-decoration-none" href="#"><h1 className=" fs-5">Another example headline.</h1></a>
         </div>
        </SwiperSlide>
        <SwiperSlide>
        <Image class="bd-placeholder-img w-100" src={'/images/slider/1.jpg'} width={850} height={480} />
         
         <div class="carousel-caption text-start">
           <a  className="text-light text-decoration-none" href="#"><h1 className=" fs-5">Another example headline.</h1></a>
         </div>
        </SwiperSlide>
        <SwiperSlide>
        <Image class="bd-placeholder-img w-100" src={'/images/slider/1.jpg'} width={850} height={480} />
         
         <div class="carousel-caption text-start">
           <a  className="text-light text-decoration-none" href="#"><h1 className=" fs-5">Another example headline.</h1></a>
         </div>
        </SwiperSlide>
        <SwiperSlide>
        <Image class="bd-placeholder-img w-100" src={'/images/slider/1.jpg'} width={850} height={480} />
         
         <div class="carousel-caption text-start">
           <a  className="text-light text-decoration-none" href="#"><h1 className=" fs-5">Another example headline.</h1></a>
         </div>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}







// const Slider = () => {
//   return (
//     <>
//     <div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
//     <div class="carousel-indicators">
//       <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
//       <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class="active" aria-current="true"></button>
//       <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
//     </div>
//     <div class="carousel-inner">
//       <div class="carousel-item">
//         <Image class="bd-placeholder-img w-100" src={'/images/slider/1.jpg'} width={850} height={410} />
//         <div class="container">
//           <div class="carousel-caption text-start">
//             <a  className="text-light text-decoration-none" href="#"><h1 className=" fs-5">Another example headline.</h1></a>
//           </div>
//         </div>
//       </div>
//       <div class="carousel-item active">
//       <Image class="bd-placeholder-img w-100" src={'/images/slider/2.jpg'} width={850} height={410} />
//         <div class="container">
//           <div class="carousel-caption text-start">
//             <a  className="text-light text-decoration-none" href="#"><h1 className=" fs-5">Another example headline.</h1></a>
//           </div>
//         </div>
//       </div>
//       <div class="carousel-item">
//       <Image class="bd-placeholder-img w-100" src={'/images/slider/3.jpg'} width={850} height={410} />
//         <div class="container">
//           <div class="carousel-caption text-start">
//             <a  className="text-light text-decoration-none" href="#"><h1 className=" fs-5">Another example headline.</h1></a>
//           </div>
//         </div>
//       </div>
//     </div>
//     <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
//       <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//       <span class="visually-hidden">Previous</span>
//     </button>
//     <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
//       <span class="carousel-control-next-icon" aria-hidden="true"></span>
//       <span class="visually-hidden">Next</span>
//     </button>
//   </div>
//     </>
//   )
// }

// export default Slider;