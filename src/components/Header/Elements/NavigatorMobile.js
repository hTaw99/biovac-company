import Link from "next/link";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import * as Icon from "@phosphor-icons/react/dist/ssr";

import menuData from "../../../data/header/navigation.json";
import { navbar } from "./Navigator";

export default function Navigator() {
  const [dropdownItem, setDropdownItem] = useState();
  function renderMenu() {
    return navbar.map((item, index) => (
      <li className={`relative`} key={index}>
        <Link href={process.env.PUBLIC_URL + item.to}>
          <span>{item.label}</span>
        </Link>
      </li>
    ));
  }
  return (
    <div className="navigator-mobile">
      <ul>{renderMenu()}</ul>
    </div>
  );
}
