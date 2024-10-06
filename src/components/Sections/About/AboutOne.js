import Link from "next/link";

const AboutOne = () => {
  return (
    <section className="about-block">
      <div className="container py-10 border-b lg:py-20 md:py-14 border-outline">
        <div className="content rounded-2xl bg-linear-blue md:p-10 p-7">
          <div className="flex pb-8 border-b heading max-lg:flex-col gap-y-4 md:pb-10 border-line">
            <div className="w-full xl:w-5/12 lg:w-1/2">
              <div className="text-white tag text-label bg-blue">About Us</div>
              <h3 className="mt-4 text-white heading3">
                The best partner for your business in Africa and Middle East.
              </h3>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="text-white desc">
                Biovac Egypt, established in 2007, is a leading player in the
                Egyptian pharmaceutical and vaccine sectors, specializing in
                importing WHO-prequalified vaccines and strategic
                pharmaceuticals. We have partnered with major international
                manufacturers like Biofarma Indonesia and NKF China. We actively
                seek strategic partnerships to enhance our reach in Africa and
                the Middle East, positioning Biovac as a key contributor to
                regional healthcare solutions.
              </div>
              <Link
                className="inline-block mt-4 text-white duration-300 border-b-2 border-white text-button-sm hover:border-black hover:text-black"
                href="/company/about-us"
              >
                Join us today!
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 pt-8 counter md:grid-cols-4 gap-y-6 md:pt-10">
            <div className="px-5 border-l border-white counter-item">
              <div className="text-white count-number heading3">17</div>
              <div className="mt-1 text-white body1">Years experiences</div>
            </div>
            <div className="px-5 border-l border-white counter-item">
              <div className="text-white count-number heading3">25</div>
              <div className="mt-1 text-white body1">Products</div>
            </div>
            <div className="px-5 border-l border-white counter-item">
              <div className="text-white count-number heading3">20</div>
              <div className="mt-1 text-white body1">Employees</div>
            </div>
            <div className="px-5 border-l border-white counter-item">
              <div className="flex items-center">
                <div className="text-white count-number heading3">25</div>
                <span className="text-white capitalize heading3">m</span>
              </div>
              <div className="mt-1 text-white body1">
                2023 Total sales in units
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutOne;
