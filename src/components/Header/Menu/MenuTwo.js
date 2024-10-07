import React from "react";
import Link from "next/link";

import Navigator from "../Elements/Navigator";
import MenuFunctionIcons from "../Elements/MenuFunctionIcons";
import { BiovacLogo } from "@/icons/biovac-logo";

export default function MenuTwo({ forHomePage }) {
  return (
    <header
      className={forHomePage ? "z-[1000] absolute top-0 inset-x-0 w-full " : ""}
    >
      <div className="container ">
        <div className="menu__wrapper">
          <Link href="/" className={forHomePage ? "text-white" : "text-blue"}>
            <BiovacLogo src="/images/biovac.svg" alt="Biovac Logo" />
          </Link>
          <Navigator forHomePage={forHomePage} />
          <MenuFunctionIcons forHomePage={forHomePage} />
        </div>
      </div>
    </header>
  );
}
