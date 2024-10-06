import React from "react";
import Link from "next/link";

import Navigator from "../Elements/Navigator";
import MenuFunctionIcons from "../Elements/MenuFunctionIcons";

export default function MenuSix({ classname }) {
  return (
    <header className={`menu ${classname}`}>
      <div className="px-4 xl:px-20">
        <div className="menu__wrapper">
          <h1>
            <Link href="/" className="block menu__wrapper__logo">
              <img src="/images/biovac.svg" alt="Logo" />
            </Link>
          </h1>
          <Navigator />
          <MenuFunctionIcons hide="phone" />
        </div>
      </div>
    </header>
  );
}
