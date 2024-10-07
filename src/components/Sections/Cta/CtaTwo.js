import Link from "next/link";

// display: inline-block;
// font-weight: 600;
// color: setColor(white);
// background-color: setColor(blue);
// border-radius: 4px;
// text-transform: capitalize;
// letter-spacing: 1.28px;
// cursor: pointer;
// transition: all ease 0.4s;
const CtaTwo = () => {
  return (
    <section className="cta-block ">
      <div className="container ">
        <div className="flex flex-wrap items-center justify-between gap-6 px-10 overflow-hidden bg-blue gap-y-4 max-lg:flex-col max-lg:justify-center py-7 rounded-2xl">
          <h4 className="text-white heading4 max-lg:text-center">
            Want to check our products?
          </h4>
          <Link
            className="bg-white tra px-6 text-blue py-3 font-semibold rounded transition-all hover:bg-[#f7f7ff] "
            href="/page/products"
          >
            Check products
          </Link>
        </div>
      </div>
    </section>
  );
};
export default CtaTwo;
