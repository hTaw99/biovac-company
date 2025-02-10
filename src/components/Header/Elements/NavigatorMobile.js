import Link from "next/link";

import { navbar } from "./Navigator";

export default function Navigator() {
  return (
    <div className="navigator-mobile">
      <ul>
        {navbar.map((item, index) => (
          <li className={`relative`} key={index}>
            <Link href={item.to}>
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
