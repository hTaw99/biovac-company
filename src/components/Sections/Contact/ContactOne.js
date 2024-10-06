"use client";

import React, { useEffect, useState } from "react";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const sendEmail = () => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve({ statusCode: 200, message: "Sending successfully " }),
      1000
    );
  });
};

const ContactOne = ({ classname }) => {
  const [data, setData] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (data.statusCode === 200) {
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setData({});
      }, 1000);
    }
  }, [data.statusCode]);
  return (
    <section className={`section-contact py-[60px] ${classname}`}>
      <div className="container">
        <div className="items-center justify-between lg:flex">
          <div className="w-full text-white content-main xl:w-7/12 lg:w-1/2">
            <span className="text-white text-label tag bg-blue">
              Contact us
            </span>
            <h3 className="mt-3 heading3">
              Discover Your Healthcare Solutions
            </h3>
            <p className="mt-6 desc">
              Unlock the full potential of your business with our complimentary
              consultation. Our expert team will assess your pharmaceutical and
              healthcare needs, recommend tailored solutions, and chart a path
              to success. Schedule your consultation today and take the first
              step towards empowering your business with our
              comprehensive services.
            </p>

            <div className="flex items-center mt-6">
              <Icon.Envelope className="text-xl" />
              <span className="pl-3 body2">inquiry@biovacegypt.com</span>
            </div>
            <div className="flex items-center mt-2">
              <Icon.PhoneCall className="text-xl" />
              <span className="pl-3 body2">+201112901667</span>
            </div>
            <div className="flex items-center mt-2">
              <Icon.MapPin className="text-xl" />
              <span className="pl-3 body2">
                Portal A-208, Beverly Hills, Giza, Egypt
              </span>
            </div>
            <Link
              href={
                "https://www.google.com/maps?q=208+Beverly+Hills,+Second+Al+Sheikh+Zayed,+Giza+Governorate+3241201"
              }
              target="_blank"
              className="inline-block mt-2 underline"
            >
              Open map
            </Link>
          </div>
          <div className="w-full xl:w-1/3 lg:w-[40%] max-lg:mt-10">
            <div className="flex flex-col gap-5 py-6 bg-white form-block rounded-2xl px-7">
              {isSuccess && (
                <div className="p-2 text-white font-medium text-center rounded-md bg-[#38b000]">
                  Sended Successfully
                </div>
              )}
              <div className="heading5">Schedule an online call</div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setIsLoading(true);
                  sendEmail()
                    .then((data) => {
                      e.target.reset();
                      setData(data);
                    })
                    .finally(() => setIsLoading(false));
                }}
                className="grid gap-5 max-lg:grid-cols-2 gap-y-2"
              >
                <div className="w-full name max-sm:col-span-2">
                  <label
                    className="inline-block pb-2 caption1 text-surface1"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="w-full px-4 py-3 bg-white border rounded border-outline"
                    type="text"
                    id="name"
                    placeholder=""
                    required
                  />
                </div>
                <div className="w-full phone max-sm:col-span-2">
                  <label
                    className="inline-block pb-2 caption1 text-surface1"
                    htmlFor="phone"
                  >
                    Phone
                  </label>
                  <input
                    className="w-full px-4 py-3 bg-white border rounded border-outline"
                    type="text"
                    id="phone"
                    placeholder=""
                    required
                  />
                </div>
                <div className="w-full email max-sm:col-span-2">
                  <label
                    className="inline-block pb-2 caption1 text-surface1"
                    htmlFor="companyEmail"
                  >
                    Company Email
                  </label>
                  <input
                    className="w-full px-4 py-3 bg-white border rounded border-outline"
                    type="email"
                    id="companyEmail"
                    placeholder=""
                    required
                  />
                </div>
                <div className="w-full organization max-sm:col-span-2">
                  <label
                    className="inline-block pb-2 caption1 text-surface1"
                    htmlFor="company"
                  >
                    Company/ Organization
                  </label>
                  <input
                    className="w-full px-4 py-3 bg-white border rounded border-outline"
                    type="text"
                    id="company"
                    placeholder=""
                    required
                  />
                </div>

                <div className="w-full message max-lg:col-span-2">
                  <label
                    className="inline-block pb-2 caption1 text-surface1"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="w-full px-4 py-3 bg-white border rounded border-outline display-block"
                    name="message"
                    rows="3"
                    id="message"
                    placeholder=""
                    required
                  ></textarea>
                </div>
                <div className="mt-3 block-button max-lg:col-span-2">
                  <button className="w-full button-main">
                    {isLoading ? "Sending..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactOne;
