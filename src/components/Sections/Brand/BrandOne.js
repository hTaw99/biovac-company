"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/bundle";
import Image from "next/image";
import Link from "next/link";

const logos = [
  "/images/brand/nkfpharma.png",
  "/images/brand/panacea-biotec.png",
  "/images/brand/bio-pharma.png",
  "/images/brand/bionet.svg",
  "/images/brand/minhai.png",
  "/images/brand/ncpc.png",
  "/images/brand/sk.png",
  "/images/brand/sucb.png",
  "/images/brand/moh.png",
  "/images/brand/upa.png",
  "/images/brand/eda.png",
  "/images/brand/vacsera.png",
  "/images/brand/nanocare.png",
  "/images/brand/polygon.png",
];

export default function BrandOne({ classname }) {
  return (
    <section className={`section-brand ${classname}`}>
      <div className="container ">
        <h5 className="text-center heading5">
          Trusted by partners all around the world
        </h5>
        <div className="flex items-center justify-center mt-7">
          <div className="w-full list lg:w-11/12">
            <Swiper
              spaceBetween={0}
              slidesPerView={2}
              loop={true}
              modules={[Autoplay]}
              className="relative flex items-center justify-center h-full style-border"
              autoplay={{
                delay: 3000,
              }}
              breakpoints={{
                576: {
                  slidesPerView: 3,
                  spaceBetween: 0,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 0,
                },
                992: {
                  slidesPerView: 4,
                  spaceBetween: 0,
                },
                1200: {
                  slidesPerView: 5,
                  spaceBetween: 0,
                },
              }}
            >
              {logos.map((logo, index) => (
                <SwiperSlide
                  className="flex items-center justify-center"
                  key={index}
                >
                  <Link
                    href={"#!"}
                    scroll={false}
                    className="flex w-[150px] h-[70px] items-center justify-center brand-item"
                  >
                    <Image
                      width={150}
                      height={44}
                      src={logo}
                      alt="1"
                      className="object-contain w-full h-full"
                    />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
