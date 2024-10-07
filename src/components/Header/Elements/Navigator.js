import Link from "next/link";
import { usePathname } from "next/navigation";

export const navbar = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/page/products" },
  { label: "About us", to: "/page/about-us" },
  { label: "Contact us", to: "/page/contact-us" },
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
          <Link href={process.env.PUBLIC_URL + item.to}>
            <span>{item.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
