import Link from "next/link";
import { usePathname } from "next/navigation";

export const navbar = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "About us", to: "/about-us" },
  // { label: "Contact us", to: "/contact-us" },
];

export default function Navigator({ forHomePage }) {
  const pathname = usePathname();
  const color = forHomePage ? "text-white" : "";

  return (
    <ul className="hidden gap-6 lg:flex">
      {navbar.map((item, index) => (
        <li
          className={`relative ${color} ${
            pathname === item.to ? "active" : ""
          }`}
          key={index}
        >
          <Link href={item.to}>
            <span>{item.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
