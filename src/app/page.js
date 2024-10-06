import LayoutOne from "@/components/Layout/LayoutOne";
import SliderOne from "@/components/Sections/Slider/SliderOne";
import AboutOne from "@/components/Sections/About/AboutOne";
import BenefitOne from "@/components/Sections/Benefit/BenefitOne";
import benefitData from "@/data/benefit/data.json";
import SolutionOne from "@/components/Sections/Solution/SolutionOne";
import serviceData2 from "@/data/service/services.json";
import serviceData from "@/data/service/data.json";
import ServiceOne from "@/components/Sections/Service/ServiceOne";
import CaseStudyOne from "@/components/Sections/CaseStudy/CaseStudyOne";
import caseStudyData from "@/data/case-study/data.json";
import BannerOne from "@/components/Sections/Banner/BannerOne";
import BrandOne from "@/components/Sections/Brand/BrandOne";
import TestimonialOne from "@/components/Sections/Testimonial/TestimonialOne";
import testimonialData from "@/data/testimonial/data.json";
import ContactOne from "@/components/Sections/Contact/ContactOne";
import SliderTwo from "@/components/Sections/Slider/SliderTwo";
import LayoutTwo from "@/components/Layout/LayoutTwo";
import CtaTwo from "@/components/Sections/Cta/CtaTwo";

export default function Home() {
  return (
    <>
      <LayoutTwo className="-style-1">
        <SliderTwo />
        {/* <SliderOne className="-style-1 lg:py-[60px] py-10" /> */}
        <AboutOne />
        <BenefitOne
          classname="my-10 lg:my-20 sm:my-14"
          data={benefitData}
          start={0}
          limit={6}
        />
        <CtaTwo />
        <ServiceOne data={serviceData2} start={0} limit={12} />
        <SolutionOne data={serviceData} start={0} limit={12} />
        {/* <CaseStudyOne
          classname={" bg-white lg:py-20 sm:py-14 py-10"}
          data={caseStudyData}
          start={0}
          limit={3}
        /> */}
        <BannerOne />
        <TestimonialOne data={testimonialData} />
        <BrandOne classname={"bg-white lg:py-20 md:py-14 py-10"} />
        <ContactOne classname={"bg-linear-blue"} />
      </LayoutTwo>
    </>
  );
}
