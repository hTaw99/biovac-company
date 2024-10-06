import React from "react";
import Link from "next/link";

import Navigator from "../Elements/Navigator";
import MenuFunctionIcons from "../Elements/MenuFunctionIcons";

export default function MenuTwo({ classname }) {
  return (
    <header className={`menu ${classname} border-b border-grey`}>
      <div className="container ">
        <div className="menu__wrapper">
          <h1>
            <Link
              href="/"
              className="block menu__wrapper__logo w-[110px] mix-blend-multiply bg-blend-multiply"
            >
              <img src="/images/biovac.svg" alt="Logo" />
            </Link>
          </h1>
          <Navigator className={"style-two"} />
          <MenuFunctionIcons hide="button" />
        </div>
      </div>
    </header>
  );
}
