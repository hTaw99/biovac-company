"use client";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const BenefitOne = ({ classname, data, start, limit }) => {
  //     <Swiper
  //     spaceBetween={0}
  //     slidesPerView={2}
  //     loop={true}
  //     modules={[Autoplay]}
  //     className="relative h-full style-border"
  //     autoplay={{
  //       delay: 3000,
  //     }}
  //     breakpoints={{
  //       576: {
  //         slidesPerView: 3,
  //         spaceBetween: 0,
  //       },
  //       768: {
  //         slidesPerView: 4,
  //         spaceBetween: 0,
  //       },
  //       992: {
  //         slidesPerView: 4,
  //         spaceBetween: 0,
  //       },
  //       1200: {
  //         slidesPerView: 5,
  //         spaceBetween: 0,
  //       },
  //     }}
  //   >

  return (
    <section className={`section-benefit ${classname}`}>
      <div className="container">
        <div className="mb-8 text-center">
          <span className="tag text-label">Specialization</span>
          <h3 className="mt-3 heading3">Focus Areas</h3>
        </div>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
          }}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
          }}
          modules={[Autoplay]}
          className="grid lg:grid-cols-4 sm:grid-cols-2 gap-[30px]"
        >
          {data.slice(start, limit).map((item, index) => (
            <SwiperSlide key={index}>
              <div className="text-center benefit-item">
                <div className="block-icon">
                  {Icon[item.icon] &&
                    React.createElement(Icon[item.icon], {
                      className: "text-4xl",
                    })}
                </div>
                <h6 className="mt-2 heading6 sm:mt-4">{item.title}</h6>
                <div className="mt-2 text-surface1 mx-auto text-center max-w-[25ch]">
                  {item.desc}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default BenefitOne;
