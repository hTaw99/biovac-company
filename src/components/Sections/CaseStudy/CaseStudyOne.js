"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import CaseStudyItem from "@/components/CaseStudy/CaseStudyItem";

const CaseStudyOne = ({ classname, data, start, limit }) => {
  return (
    <section className={`case-studies-block ${classname}`}>
      <div className="container">
        <div className="flex items-center justify-between w-full max-lg:flex-wrap gap-y-2">
          <div className="max-lg:w-full">
            <div className="tag text-label">Why we do</div>
            <h3 className="mt-3 heading3">Success Stories</h3>
          </div>
          <div className="w-full xl:w-5/12 lg:w-1/2">
            <span className="body2">
              Case studies that showcase the agency's approach, process, and
              results for specific clients.
            </span>
          </div>
        </div>
        <div className="mt-6 overflow-hidden list md:mt-10">
          <Swiper
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            className="relative h-full style-border style-section"
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
            }}
          >
            {data.slice(start, limit).map((item, index) => (
              <SwiperSlide key={index}>
                <CaseStudyItem data={item} style={"style-one"} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyOne;
