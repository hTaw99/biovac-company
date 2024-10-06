import Link from "next/link";

const CtaTwo = () => {
  return (
    <section className="cta-block ">
      <div className="container ">
        <div className="flex flex-wrap items-center justify-between gap-6 px-10 overflow-hidden bg-blue gap-y-4 max-lg:flex-col max-lg:justify-center py-7 rounded-2xl">
          <h4 className="text-white heading4 max-lg:text-center">
            In Search of a Premium Business Consultant?
          </h4>
          {/* <Link className="button-main" href="/pages/contact-us">
            Get a free Quote
          </Link> */}
        </div>
      </div>
    </section>
  );
};
export default CtaTwo;
