"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";

const TopNavTwo = () => {
  const [isOpenLanguage, setIsOpenLanguage] = useState(false);
  const [isOpenCurrence, setIsOpenCurrence] = useState(false);
  const [language, setLanguage] = useState("english");
  const [currence, setCurrence] = useState("new york office");

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".select-block")) {
        setIsOpenLanguage(false);
        setIsOpenCurrence(false);
      }
    });

    return () => {
      document.removeEventListener("click", (e) => {
        if (!e.target.closest(".select-block")) {
          setIsOpenLanguage(false);
          setIsOpenCurrence(false);
        }
      });
    };
  }, [isOpenLanguage, isOpenCurrence]);

  return (
    <>
      <div className="text-white top-nav style-two bg-blue">
        <div className="flex items-center justify-between w-full h-[44px] xl:px-20 px-4">
          <div className="flex items-center h-full left">
            <div
              className="select-block h-full pl-5 pr-10 -ml-4 choose-type choose-language flex items-center gap-1.5 hover:bg-blue hover:text-white duration-300"
              onClick={() => {
                setIsOpenLanguage(!isOpenLanguage);
                setIsOpenCurrence(false);
              }}
            >
              <p className="capitalize selected caption2">{language}</p>
              <ul
                className={`list-option bg-white ${
                  isOpenLanguage ? "open" : ""
                }`}
              >
                {["english", "espana", "france"].map((item, index) => (
                  <li
                    key={index}
                    className="text-black capitalize caption2 whitespace-nowrap"
                    onClick={() => setLanguage(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <Icon.CaretDown size={12} />
            </div>
            <div
              className="select-block h-full pl-5 pr-10 choose-type choose-currency flex items-center gap-1.5 hover:bg-blue hover:text-white duration-300 max-sm:hidden"
              onClick={() => {
                setIsOpenCurrence(!isOpenCurrence);
                setIsOpenLanguage(false);
              }}
            >
              <p className="capitalize selected caption2">{currence}</p>
              <ul
                className={`list-option bg-white ${
                  isOpenCurrence ? "open" : ""
                }`}
              >
                {[
                  "new york office",
                  "barcelona office",
                  "marseille office",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="text-black capitalize caption2 whitespace-nowrap"
                    onClick={() => setCurrence(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <Icon.CaretDown size={12} />
            </div>
          </div>
          <div className="flex items-center right-block">
            <div className="flex items-center location max-lg:hidden">
              <Icon.MapPin className="text-xl" />
              <span className="ml-2 caption1 ">
                160 Broadway 15th floor, New York
              </span>
            </div>
            <div className="flex items-center mail lg:ml-7">
              <Icon.Envelope className="text-xl" />
              <span className="ml-2 caption1 ">hi.avitex@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNavTwo;
