import React from "react";
import Link from "next/link";

import Navigator from "../Elements/Navigator";
import MenuFunctionIcons from "../Elements/MenuFunctionIcons";
import { renderContainer } from "../../../common/utils";

export default function MenuOne({ container }) {
  return (
    <header className="bg-white border-b menu -style-1 border-outline">
      <div className={renderContainer(container)}>
        <div className="menu__wrapper">
          <h1>
            <Link href="/" className="block menu__wrapper__logo w-[110px]">
              <img src="/images/biovac.svg" alt="Logo" />
            </Link>
          </h1>
          <Navigator />
          <MenuFunctionIcons hide="button" />
        </div>
      </div>
    </header>
  );
}
