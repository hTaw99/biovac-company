import React from "react";
import Image from "next/image";

const OutstandingCaseStudies = () => {
  return (
    <div className="heading-content">
      <div className="container">
        <div className="block overflow-hidden bg-white shadow-lg content-main style-one rounded-3xl">
          <div className="relative flex items-center justify-between max-lg:flex-col-reverse">
            <div className="lg:w-1/2">
              <div className="text-content lg:p-20 max-lg:px-8 max-lg:py-10">
                {/* <div className="tag text-label">data.category</div> */}
                <div className="mt-4 name heading3">
                  The best partner for your business in Africa and Middle East.
                </div>
                <div className="mt-4 desc body2 text-surface1">
                  Biovac Egypt, established in 2007, is a leading player in the
                  Egyptian pharmaceutical and vaccine sectors, specializing in
                  importing WHO-prequalified vaccines and strategic
                  pharmaceuticals. We have partnered with major international
                  manufacturers like Biofarma Indonesia and NKF China. We
                  actively seek strategic partnerships to enhance our reach in
                  Africa and the Middle East, positioning Biovac as a key
                  contributor to regional healthcare solutions.
                </div>
              </div>
            </div>
            <div className="top-0 right-0 h-full lg:w-1/2 lg:absolute">
              <div className="h-full bg-img">
                <Image
                  width={1280}
                  height={5000}
                  className="object-cover w-full h-full"
                  src="/images/portfolio/biovac-company.webp"
                  alt={"data.thumbImage"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutstandingCaseStudies;
