import React from "react";
import Link from "next/link";

import Navigator from "../Elements/Navigator";
import MenuFunctionIcons from "../Elements/MenuFunctionIcons";
import { BiovacLogo } from "@/icons/biovac-logo";

export default function MenuTwo({ classname }) {
  return (
    <header className="z-[1000] absolute top-0 inset-x-0 w-full ">
      <div className="container ">
        <div className="menu__wrapper">
          <Link href="/" className="text-white">
            <BiovacLogo src="/images/biovac.svg" alt="Biovac Logo" />
          </Link>
          <Navigator />
          <MenuFunctionIcons />
        </div>
      </div>
    </header>
  );
}
