import React from "react";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { convertToSlug } from "@/common/utils";

const ServiceOne = ({ data, start, limit }) => {
  return (
    <section className="py-10 service-block bg lg:py-20 sm:py-14">
      <div className="container">
        <div className="flex items-center justify-between w-full max-lg:flex-wrap gap-y-4">
          <div className="w-full xl:w-2/3 lg:w-3/4">
            <div className="tag text-label">Our Services</div>
            <h3 className="mt-3 heading3">How We Can Support You.</h3>
            <p className="mt-3 text-lg desc text-surface1">
              Biovac Egypt offers One-stop-shopping comprehensive services to
              our collaborating partners by carefully planning and implementing
              every step, with optimal market growth in mind.
            </p>
          </div>
        </div>
        <div className="grid gap-5 mt-10 md:grid-cols-2 lg:gap-7 md:gap-y-4 gap-y-5">
          {data.slice(start, limit).map((item, index) => (
            <span
              key={index}
              className="flex items-center h-full px-5 py-4 rounded-lg service-item -list bg-surface"
            >
              <div className="pl-3 service-name heading6">{item.title}</div>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServiceOne;
