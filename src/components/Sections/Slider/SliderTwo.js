"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { convertToSlug } from "@/common/utils";
import VideoFrame from "@/components/Other/VideoFrame";

const SliderTwo = () => {
  const [openVideo, setOpenVideo] = useState(false);

  return (
    <>
      <section className="w-full slider style-two">
        <div className="w-full h-full slider-main">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            className="relative h-full style-slider style-white"
            autoplay={{
              delay: 5000,
            }}
          >
            <SwiperSlide>
              <div className="relative w-full h-full slider-item">
                <div className="container flex items-center w-full h-full">
                  <div className="flex flex-col gap-6">
                    <span className="px-2 py-1 text-sm tracking-widest text-white uppercase rounded bg-blue max-w-fit">
                      With Us, You Will
                    </span>
                    <h2 className="text-white heading1">
                      Achieve Superior.
                      <br />
                      Growth Promptly
                    </h2>
                  </div>
                  <div className="sub-img absolute left-0 top-0 w-full h-full z-[-1]">
                    <Image
                      src={"/images/slider/growth.webp"}
                      width={4000}
                      height={3000}
                      alt="organic1"
                      priority={true}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="bg-gradient-to-r from-black to-transparent opacity-50  absolute left-0 top-0 w-full h-full z-[-1]" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-full slider-item">
                <div className="container flex items-center w-full h-full">
                  <div className="flex flex-col gap-6">
                    <span className="px-2 py-1 text-sm tracking-widest text-white uppercase rounded bg-blue max-w-fit">
                      With Us, You Will
                    </span>
                    <h2 className="text-white heading1">
                      Build Global Partnerships
                      <br />
                      Through Trust and Excellence.
                    </h2>
                  </div>
                  <div className="sub-img absolute left-0 top-0 w-full h-full z-[-1]">
                    <Image
                      src={"/images/slider/collaboration.webp"}
                      width={1920}
                      height={1280}
                      alt="Build Global Partnerships"
                      priority={true}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="bg-gradient-to-r from-black to-transparent opacity-50  absolute left-0 top-0 w-full h-full z-[-1]" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-full slider-item">
                <div className="container flex items-center w-full h-full">
                  <div className="flex flex-col gap-6">
                    <span className="px-2 py-1 text-sm tracking-widest text-white uppercase rounded bg-blue max-w-fit">
                      With Us, You Will
                    </span>
                    <h2 className="text-white heading1">
                      Experience Tailored Solutions
                      <br />
                      for Your Healthcare Needs
                    </h2>
                  </div>

                  <div className="sub-img absolute left-0 top-0 w-full h-full z-[-1]">
                    <Image
                      src={"/images/slider/healthcare.webp"}
                      width={1920}
                      height={1280}
                      alt="Experience Tailored Solutions"
                      priority={true}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="bg-gradient-to-r from-black to-transparent opacity-50  absolute left-0 top-0 w-full h-full z-[-1]" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {openVideo ? <VideoFrame setOpenVideo={setOpenVideo} /> : <></>}
      </section>
    </>
  );
};

export default SliderTwo;
