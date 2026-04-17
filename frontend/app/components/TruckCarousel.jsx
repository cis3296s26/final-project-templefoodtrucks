"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function TruckCarousel() {
  const slides = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvTUveExe36bKtvQ0M-Rd3r5_6KAdDMLGimQ&s",
    },
    {
      src: "https://i.etsystatic.com/20140997/r/il/5d3f07/3628177355/il_570xN.3628177355_rv2v.jpg",
    },
    {
      src: "https://static0.cbrimages.com/wordpress/wp-content/uploads/2019/03/Squirtle-Squad-Pokemon.jpg",
    },
    {
      src: "https://static0.srcdn.com/wordpress/wp-content/uploads/2023/02/pokemon-squirtle-squad-rangers.jpg",
    },
    {
      src: "https://archives.bulbagarden.net/media/upload/thumb/b/b6/Squirtle_Squad.png/640px-Squirtle_Squad.png",
    },
  ];

  return (
    <Swiper
      style={{
        "--swiper-navigation-color": "#040",
        "--swiper-pagination-color": "#040",
      }}
      modules={[Pagination, Navigation, Autoplay]}
      className="w-full max-w-200 h-128 border-2 border-black"
      pagination={{ clickable: true }}
      loop={true}
      speed={3000}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      navigation
      spaceBetween={0}
      slidesPerView={1}
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={i} className="">
          <img src={slide.src} className="w-full h-full object-cover" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
