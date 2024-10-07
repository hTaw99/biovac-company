import { Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/styles.scss";
import biovacOgImage from "@/assets/biovac-og.png";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("http://www.biovacegypt.com"),
  title:
    "Biovac - The best partner for your business in Africa and Middle East",
  description:
    "Biovac Egypt, established in 2007, is a leading player in the Egyptian pharmaceutical and vaccine sectors, specializing in importing WHO-prequalified vaccines and strategic pharmaceuticals",
  keywords: "Biovac, biovac, biovac egypt, vaccines, pharmaceuticals",
  openGraph: {
    title:
      "Biovac - The best partner for your business in Africa and Middle East",
    description:
      "Biovac Egypt, established in 2007, is a leading player in the Egyptian pharmaceutical and vaccine sectors, specializing in importing WHO-prequalified vaccines and strategic pharmaceuticals",
    url: "www.biovacegypt.com",
    type: "website",
    siteName: "Biovac",
    countryName: "Egypt",
    images: [{ url: "/src/assets/biovac-og.png", width: 800, height: 600 }],
  },
  twitter: {
    title:
      "Biovac - The best partner for your business in Africa and Middle East",
    description:
      "Biovac Egypt, established in 2007, is a leading player in the Egyptian pharmaceutical and vaccine sectors, specializing in importing WHO-prequalified vaccines and strategic pharmaceuticals",
    images: [{ url: "/src/assets/biovac-og.png", width: 800, height: 600 }],
  },
  alternates: {
    canonical: "https://www.biovacegypt.com",
  },
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
