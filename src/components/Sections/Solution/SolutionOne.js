"use client";

import ServiceItem from "@/components/Service/ServiceItem";
import { useState } from "react";

const ALL = 12;
const LIMIT = 6;

const SolutionOne = ({ data, start, limit }) => {
  const [isAllItemDisplayed, setIsItemAllDisplayed] = useState(false);
  return (
    <section className="py-10 mt-10 section-solution bg-linear lg:mt-20 sm:mt-14 lg:py-20 sm:py-14">
      <div className="container ">
        <span className="tag text-label">Why Partner with Us?</span>
        <h3 className="mt-3 heading3">
          Unlocking Success Through Strategic Partnership
        </h3>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 lg:gap-[30px] gap-5 md:mt-10 mt-6">
          {data
            .slice(start, isAllItemDisplayed ? ALL : LIMIT)
            .map((item, index) => (
              <ServiceItem data={item} key={index} />
            ))}
        </div>
        {!isAllItemDisplayed && (
          <div className="flex items-center justify-center w-full">
            <button
              className="self-center justify-center mx-auto mt-10 text-center button-main"
              onClick={() => setIsItemAllDisplayed(true)}
            >
              Show more
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
export default SolutionOne;
