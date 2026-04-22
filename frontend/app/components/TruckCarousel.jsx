"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function TruckCarousel({ images}) {
  if (!images || images.length === 0) {
    return <div className="w-full h-full border-2 border-dashed border-gray-400 flex items-center justify-center bg-gray-100 italic">No images available</div>;
  }
return (
    <Swiper
      style={{
        "--swiper-navigation-color": "#040",
        "--swiper-pagination-color": "#040",
      }}
      modules={[Pagination, Navigation, Autoplay]}
      className="w-full h-full border-2 border-black"
      pagination={{ clickable: true }}
      loop={images.length > 1} // Only loop if there's more than one image
      speed={300}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      navigation
      spaceBetween={0}
      slidesPerView={1}
    >
      {images.map((imgObj, i) => (
        <SwiperSlide key={imgObj.id || i}>
          <img 
            src={imgObj.image} // Direct link from the JSON you just showed me            alt={`Gallery ${i}`}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
