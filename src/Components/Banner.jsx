// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import Data from "./cover.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../App.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
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
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-screen rounded-xl"
      >
        {Data.map((result, index) => (
          <SwiperSlide key={index}>
            <p className="bg-[#FBC7F7] text-xl font-semibold">{result.title}</p>
            <img src={result.img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
