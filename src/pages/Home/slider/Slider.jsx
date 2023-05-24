import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Slider() {
  return (
    <div>
      <h1 className="text-6xl text-center  text-white">UpComing Products</h1>

      <Swiper
        autoplay={{ delay: 1000 }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        initialSlide="2"
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation,Autoplay]}
      >
        <SwiperSlide>
          <div className=" relative shadow-xl ">
            <figure>
              <img
                src="/img-gallary/upComing.jpg"
                className="w-[300px] h-[300px] rounded-lg"
                alt="Shoes"
              />
            </figure>
            <div className=" h-full flex items-end absolute top-0 rounded-b-lg">
              <div className="bg-white p-4 rounded-b-lg">
                <h2 className="card-title">Action Figure</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" relative shadow-xl ">
            <figure>
              <img
                src="/img-gallary/upComing2.jpg"
                className="w-[300px] h-[300px] rounded-lg"
                alt="Shoes"
              />
            </figure>
            <div className=" h-full flex items-end absolute top-0 rounded-b-lg">
              <div className="bg-white p-4 rounded-b-lg">
                <h2 className="card-title">Action Figure</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" relative shadow-xl ">
            <figure>
              <img
                src="/img-gallary/upComing3.jpg"
                className="w-[300px] h-[300px] rounded-lg"
                alt="Shoes"
              />
            </figure>
            <div className=" h-full flex items-end absolute top-0 rounded-b-lg">
              <div className="bg-white p-4 rounded-b-lg">
                <h2 className="card-title">Action Figure</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" relative shadow-xl ">
            <figure>
              <img
                src="/img-gallary/upComing4.jpg"
                className="w-[300px] h-[300px] rounded-lg"
                alt="Shoes"
              />
            </figure>
            <div className=" h-full flex items-end absolute top-0 rounded-b-lg">
              <div className="bg-white p-4 rounded-b-lg">
                <h2 className="card-title">Action Figure</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" relative shadow-xl ">
            <figure>
              <img
                src="/img-gallary/gallary8.jpg"
                className="w-[300px] h-[300px] rounded-lg"
                alt="Shoes"
              />
            </figure>
            <div className=" h-full flex items-end absolute top-0 rounded-b-lg">
              <div className="bg-white p-4 rounded-b-lg">
                <h2 className="card-title">Action Figure</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <div className="flex  justify-around w-60 mx-auto items-center  mt-4">
          <div className="swiper-button-prev p-2 cursor-pointer bg-white text-primary rounded-full">
            <FaArrowLeft />
          </div>
          <div className="swiper-pagination cursor-pointer"> </div>
          <div className="swiper-button-next cursor-pointer p-2 bg-white text-primary rounded-full">
            <FaArrowRight />
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default Slider;
