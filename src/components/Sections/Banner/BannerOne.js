import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const BannerOne = () => {
  return (
    <section className={`banner-block bg-blue py-7`}>
      <Marquee>
        <h4 className={`heading4 text-white uppercase px-[60px]`}>
          Delivering WHO-Prequalified Solutions
        </h4>
        <Image
          src={"/images/fav-white.svg"}
          width={5000}
          height={5000}
          alt="fav-white"
          className="w-[26px]"
        />
        <h4 className={`heading4 text-white uppercase px-[60px]`}>
          Strategic Partnerships for Growth
        </h4>
        <Image
          src={"/images/fav-white.svg"}
          width={5000}
          height={5000}
          alt="fav-white"
          className="w-[26px]"
        />
        <h4 className={`heading4 text-white uppercase px-[60px]`}>
          Expanding Access to Vital Treatments
        </h4>
        <Image
          src={"/images/fav-white.svg"}
          width={5000}
          height={5000}
          alt="fav-white"
          className="w-[26px]"
        />
        <h4 className={`heading4 text-white uppercase px-[60px]`}>
          Local Manufacturing for Regional Needs
        </h4>
        <Image
          src={"/images/fav-white.svg"}
          width={5000}
          height={5000}
          alt="fav-white"
          className="w-[26px]"
        />
        <h4 className={`heading4 text-white uppercase px-[60px]`}>
          Navigating Regulatory Landscapes with Expertise
        </h4>
        <Image
          src={"/images/fav-white.svg"}
          width={5000}
          height={5000}
          alt="fav-white"
          className="w-[26px]"
        />
      </Marquee>
    </section>
  );
};

export default BannerOne;
