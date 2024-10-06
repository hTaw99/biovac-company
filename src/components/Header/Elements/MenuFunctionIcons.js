"use client";

import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";

import SearchBox from "./SearchBox";
import CartItemsSidebar from "./CartItemsSidebar";
import MobileNavSidebar from "./MobileNavSidebar";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";

export default function MenuFunctionIcons(props) {
  const cartState = useSelector((state) => state.cartReducer);
  const hide = props.hide || "";
  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  function calcalateTotal(arr) {
    let total = 0;
    arr.forEach((item) => (total += item.price * item.cartQuantity));
    return total;
  }
  return (
    <>
      <div
        className={`menu__wrapper__functions ${classNames(props.className)}`}
      >
        <div className="flex items-center gap-4 pr-10 list__button">
          {!hide.includes("phone") && (
            <div className="flex items-center gap-2 bg-grey px-2.5 py-[5px] rounded-full max-xl:hidden">
              <span className="flex items-center justify-center w-8 h-8 bg-white rounded-full icon text-blue">
                <Icon.PhoneCall className="flex-shrink-0 text-2xl" />
              </span>
              <span className="flex-shrink-0 text-button text-blue whitespace-nowrap">
                +201112901667
              </span>
            </div>
          )}
          <Link
            href={"/pages/contact-us"}
            className="button-main text-button-sm max-sm:hidden"
          >
            Contact
          </Link>
        </div>
        <div className="flex items-center list__icons">
          <button
            className="flex-shrink-0 menu-icon -navbar"
            onClick={(e) => {
              e.preventDefault();
              setShowMobileNav(!showMobileNav);
            }}
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
