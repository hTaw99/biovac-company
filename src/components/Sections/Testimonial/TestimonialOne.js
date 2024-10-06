"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import Rate from "@/components/Other/Rate";

export default function TestimonialOne({ classname, data }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (item) => {
    setActiveIndex(item.activeIndex);
  };

  return (
    <section id="success-stories" className="testimonial-block style-one">
      <div className="container py-10 border-b lg:py-20 md:py-14 border-outline">
        <div className="mb-6 max-lg:w-full">
          <div className="tag text-label">Proven Successes</div>
          <h3 className="mt-3 heading3">Success Stories</h3>
        </div>
        <div className={`w-full flex items-center justify-center ${classname}`}>
          <div className=" w-full relative rounded-[40px] overflow-hidden bg-linear max-md:flex max-sm:flex-col-reverse">
            <div className="list-testimonials sm:w-7/12 lg:pb-12 pb-9">
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                className="relative h-full style-testimonial"
                pagination={{ clickable: true }}
                modules={[Pagination]}
                onSlideChange={handleSlideChange}
              >
                {data.slice(0, 3).map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="testimonial-item lg:px-[60px] px-9 lg:py-12 py-9">
                      <div className="flex items-center gap-px star">
                        <Rate
                          currentRate={item.rate}
                          style={"text-blue text-xl"}
                        />
                      </div>
                      <h4 className="mt-4 heading4 lg:mt-6">{item.review}</h4>
                      <p className="mt-4 whitespace-normal service-desc">
                        {item.description}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="top-0 right-0 list-avatar md:absolute sm:w-5/12 md:h-full max-md:w-full">
              {data.map((item, index) => (
                <div
                  className={`bg-img w-full  ${
                    index === activeIndex ? "active" : ""
                  }`}
                  key={index}
                >
                  <Image
                    width={540}
                    height={370}
                    src={item.image}
                    alt={item.image}
                    className={`w-full h-[370px] sm:h-full object-cover `}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
