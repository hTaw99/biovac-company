import { Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/styles.scss";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title:
    "Biovac - The best partner for your business in Africa and Middle East",
  description:
    "Biovac Egypt, established in 2007, is a leading player in the Egyptian pharmaceutical and vaccine sectors, specializing in importing WHO-prequalified vaccines and strategic pharmaceuticals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={plusJakarta.className}>
        {children}
        <div id="nav-full" />
        <div id="nav-sidebar" />
        <div id="overlay" />
        <div id="modal" />
      </body>
    </html>
  );
}
