"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/bundle";

const heroContent = [
  {
    title: "Build Global Partnerships through Trust and Excellence.",
    image: "/images/slider/collaboration.webp",
  },
  {
    title: "Experience Tailored Solutions for Your Healthcare Needs.",
    image: "/images/slider/healthcare.webp",
  },
  {
    title: "Achieve Superior Growth Promptly.",
    image: "/images/slider/growth.webp",
  },
];

const SliderTwo = () => {
  return (
    <>
      <section className="w-full h-[100vh] slider ">
        <div className="w-full h-full slider-main">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            className="relative h-full style-slider style-white"
            // autoplay={{
            //   delay: 5000,
            // }}
          >
            {heroContent.map((con) => (
              <SwiperSlide>
                <div className="relative w-full h-full">
                  <div className="container flex items-center w-full h-full">
                    <div className="flex flex-col gap-6">
                      <span className="px-2 py-1 text-sm tracking-widest text-white uppercase rounded bg-blue max-w-fit">
                        With Us, You Will
                      </span>
                      <h2 className="text-white heading1">{con.title}</h2>
                    </div>
                    <div className="sub-img absolute left-0 top-0 w-full h-full z-[-1]">
                      <Image
                        src={con.image}
                        width={1920}
                        height={1280}
                        alt={con.title}
                        priority={true}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="bg-gradient-to-r from-black to-transparent opacity-50  absolute left-0 top-0 w-full h-full z-[-1]" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default SliderTwo;
