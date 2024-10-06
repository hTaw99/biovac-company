import Link from "next/link";
import classNames from "classnames";
import menuData from "@/data/header/navigation.json";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { usePathname } from "next/navigation";
import { convertToSlug } from "@/common/utils";

export const navbar = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/pages/products" },
  { label: "About us", to: "/pages/about-us" },
  { label: "Contact us", to: "/pages/contact-us" },
];

export default function Navigator({ disableSubmenu, className }) {
  const pathname = usePathname();

  function renderMenu() {
    return navbar.map((item, index) => {
      return (
        <li
          className={`relative ${pathname === item.to ? "active" : ""}`}
          key={index}
        >
          <Link href={process.env.PUBLIC_URL + item.to}>
            <span>{item.label}</span>
          </Link>
        </li>
      );

      if (item.title === "Solutions") {
        return (
          <li
            key={index}
            className={`${pathname.includes("/services/") ? "active" : ""}`}
          >
            <Link href={process.env.PUBLIC_URL + item.to}>
              <span>{item.title}</span>
            </Link>
            <div className="flex dropdown-menu -wide">
              <div className="left w-3/4 pr-[15px]">
                <div className="service-cate heading6">IT Solutions</div>
                {/* <ul className="grid grid-cols-3 gap-5 gap-y-2.5 mt-2">
                  {item.subMenu.slice(0, 6).map((i, index) => (
                    <li
                      key={index}
                      className={`${pathname === i.to ? "active" : ""}`}
                    >
                      <Link
                        className={`flex items-center gap-2`}
                        href={process.env.PUBLIC_URL + "/services/[slug]"}
                        as={
                          process.env.PUBLIC_URL +
                          "/services/" +
                          convertToSlug(i.title)
                        }
                      >
                        <span
                          className={`${i.icon} text-blue text-2xl flex-shrink-0`}
                        ></span>
                        <span>{i.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul> */}
                <div className="mt-5 service-cate heading6">Digital Agency</div>
                <ul className="grid grid-cols-3 gap-5 gap-y-2.5 mt-2">
                  {item.subMenu.slice(6, 12).map((i, index) => (
                    <li
                      key={index}
                      className={`${pathname === i.to ? "active" : ""}`}
                    >
                      <Link
                        className={`flex items-center gap-2`}
                        href={process.env.PUBLIC_URL + "/services/[slug]"}
                        as={
                          process.env.PUBLIC_URL +
                          "/services/" +
                          convertToSlug(i.title)
                        }
                      >
                        <span
                          className={`${i.icon} text-blue text-2xl flex-shrink-0`}
                        ></span>
                        <span>{i.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="right w-1/4 pl-[15px]">
                <div className="p-6 rounded-lg content bg-linear">
                  <div className="heading6">Explore All Services</div>
                  <div className="mt-1 caption1 text-surface1">
                    Unlocking the Full Spectrum of IT Solutions and Business
                    Consulting for your needs
                  </div>
                  <Link
                    className="mt-3 button-main text-button-sm"
                    href="/services/service-detail"
                  >
                    Explore Now
                  </Link>
                  <div className="mt-8 more-infor">
                    <div className="flex items-center mail">
                      <Icon.Envelope className="text-lg" />
                      <div className="pl-2 caption1">hi.avitex@gmail.com</div>
                    </div>
                    <div className="flex items-center mt-3 call">
                      <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 rounded-full bg-blue">
                        <Icon.Phone
                          weight="fill"
                          className="text-sm text-white"
                        />
                      </span>
                      <div className="pl-2 text-title">123 456 7890</div>
                    </div>
                    <div className="list-social flex items-center gap-2.5 mt-4">
                      <Link
                        className="flex items-center justify-center w-10 h-10 duration-300 bg-white rounded-full item text-surface1 hover:bg-black hover:text-white"
                        href="https://www.facebook.com/"
                        target="_blank"
                      >
                        <span className="text-base icon-facebook"></span>
                      </Link>
                      <Link
                        className="flex items-center justify-center w-10 h-10 duration-300 bg-white rounded-full item text-surface1 hover:bg-black hover:text-white"
                        href="https://www.linkedin.com/"
                        target="_blank"
                      >
                        <span className="text-base icon-linkedin"></span>
                      </Link>
                      <Link
                        className="flex items-center justify-center w-10 h-10 duration-300 bg-white rounded-full item text-surface1 hover:bg-black hover:text-white"
                        href="https://www.twitter.com/"
                        target="_blank"
                      >
                        <span className="text-base icon-twitter"></span>
                      </Link>
                      <Link
                        className="flex items-center justify-center w-10 h-10 duration-300 bg-white rounded-full item text-surface1 hover:bg-black hover:text-white"
                        href="https://www.youtube.com/"
                        target="_blank"
                      >
                        <span className="text-base icon-youtube"></span>
                      </Link>
                      <Link
                        className="flex items-center justify-center w-10 h-10 duration-300 bg-white rounded-full item text-surface1 hover:bg-black hover:text-white"
                        href="https://www.instagram.com/"
                        target="_blank"
                      >
                        <span className="text-sm icon-instagram"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        );
      }
      if (item.title === "Pages") {
        return (
          <li
            className={`relative ${
              pathname.includes("/pages/") ? "active" : ""
            }`}
            key={index}
          >
            <Link href={process.env.PUBLIC_URL + item.to}>
              <span>{item.title}</span>
            </Link>
            <ul className="grid grid-cols-2 gap-5 dropdown-menu style-pages">
              {item.subMenu?.map((i, index) => (
                <li
                  key={index}
                  className={`${pathname.includes(i.to) ? "active" : ""}`}
                >
                  <Link href={i.to}>
                    <span>{i.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        );
      }
      return (
        <li
          className={`relative ${
            pathname.includes(
              "/" + convertToSlug(item.title.toLowerCase()) + "/"
            )
              ? "active"
              : ""
          }`}
          key={index}
        >
          <Link href={process.env.PUBLIC_URL + item.to}>
            <span>{item.title}</span>
          </Link>
          <ul className="dropdown-menu">
            {item.subMenu?.map((i, index) => (
              <li
                key={index}
                className={`${pathname.includes(i.to) ? "active" : ""}`}
              >
                <Link href={i.to}>
                  <span>{i.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </li>
      );
    });
  }
  // if (disableSubmenu) {
  //   return (
  //     <div className={`navigator -off-submenu ${classNames(className)}`}>
  //       <ul>
  //         {menuData.map((item, index) => (
  //           <li key={index}>
  //             <Link href={process.env.PUBLIC_URL + item.to}>
  //               <span>{item.title}</span>
  //             </Link>
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   );
  // }
  return (
    <div className={`navigator ${classNames(className)}`}>
      <ul>{renderMenu()}</ul>
    </div>
  );
}
