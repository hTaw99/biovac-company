import Image from "next/image";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import serviceData from "@/data/service/data.json";
import { convertToSlug } from "@/common/utils";

export default function FooterOne({ classname }) {
  const date = new Date();
  const year = date.getUTCFullYear();

  return (
    <footer id="footer">
      <div className={`footer-block ${classname}`}>
        <div className="container py-[60px]">
          <div className="flex justify-between gap-y-8 max-xl:flex-wrap">
            <div className="xl:w-1/4 md:w-1/2">
              <div className="flex flex-col gap-5 footer-company-infor">
                <Link href="/" className="logo">
                  {classname ? (
                    <Image
                      src={"/images/logo-white.svg"}
                      width={5000}
                      height={5000}
                      alt="logo"
                      className="w-[148px]"
                    />
                  ) : (
                    <Image
                      src={"/images/biovac.svg"}
                      width={5000}
                      height={5000}
                      alt="logo"
                      className="w-[148px]"
                    />
                  )}
                </Link>
                <div className="caption1">
                  Biovac Egypt, established in 2007, is a leading player in the
                  Egyptian pharmaceutical and vaccine sectors, specializing in
                  importing WHO-prequalified vaccines and strategic
                  pharmaceuticals.
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex footer-navigate md:justify-evenly max-md:gap-20 max-sm:gap-y-6 max-sm:flex-wrap">
                <div className="footer-nav-item">
                  <div className="item-heading text-button">Company</div>
                  <ul className="mt-3 list-nav">
                    <li className="mt-2">
                      <Link
                        className={`caption1 hover-underline ${
                          classname && "underline-white"
                        }`}
                        href="/company/about-us"
                      >
                        About us
                      </Link>
                    </li>
                    <li className="mt-2">
                      <Link
                        className={`caption1 hover-underline ${
                          classname && "underline-white"
                        }`}
                        href="/company/our-teams"
                      >
                        Products
                      </Link>
                    </li>
                    <li className="mt-2">
                      <Link
                        className={`caption1 hover-underline ${
                          classname && "underline-white"
                        }`}
                        href="/company/testimonials"
                      >
                        Success stories
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-nav-item">
                  <div className="item-heading text-button">Why us</div>
                  <ul className="mt-3 list-nav">
                    {serviceData.slice(0, 6).map((item) => (
                      <li className="mt-2" key={item.id}>
                        <span
                          className={`caption1 hover-underline ${
                            classname && "underline-white"
                          }`}
                        >
                          {item.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="flex items-center justify-center py-2 border-t sm:justify-between max-sm:flex-col gap-y-2 border-outline">
              <div className="flex items-center left-block">
                <div className="copy-right text-surface1 caption1">
                  ©{year} BIOVAC. All Rights Reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
