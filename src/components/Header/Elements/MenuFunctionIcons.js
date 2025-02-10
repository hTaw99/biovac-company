"use client";

import React, { useEffect, useState } from "react";
import classNames from "classnames";

import MobileNavSidebar from "./MobileNavSidebar";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";

export default function MenuFunctionIcons(props) {
  const hide = props.hide || "";
  const [showMobileNav, setShowMobileNav] = useState(false);
  const color = props.forHomePage ? "text-white" : "text-blue";
  const [el, setEl] = useState(null);

  useEffect(() => {
    setEl(document.getElementById("section-contact"));
  }, []);

  return (
    <>
      <div
        className={`menu__wrapper__functions ${classNames(props.className)}`}
      >
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-grey px-2.5 py-[5px] rounded-full max-xl:hidden">
            <span className="flex items-center justify-center w-8 h-8 bg-white rounded-full icon text-blue">
              <Icon.PhoneCall className="flex-shrink-0 text-2xl" />
            </span>
            <span
              className={`flex-shrink-0 ${color} text-button whitespace-nowrap`}
            >
              +20 10 50 48 9999
            </span>
          </div>

          <Link
            href={{ pathname: "/", hash: "section-contact" }}
            className="button-main text-button-sm max-sm:hidden"
          >
            Contact
          </Link>
          <button
            className="flex-shrink-0 text-white lg:hidden -navbar"
            onClick={(e) => setShowMobileNav(!showMobileNav)}
          >
            <Icon.List className="text-3xl" />
          </button>
        </div>
      </div>
      {/* Search input */}
      {/* <SearchBox showSearch={showSearch} setShowSearch={setShowSearch} /> */}
      {/* Cart sidebar */}
      {/* <CartItemsSidebar showCart={showCart} setShowCart={setShowCart} /> */}
      {/* Mobile navigation sidebar */}
      <MobileNavSidebar
        showMobileNav={showMobileNav}
        setShowMobileNav={setShowMobileNav}
      />
    </>
  );
}
