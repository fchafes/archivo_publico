"use client";

import { useState } from "react";
import localFont from "next/font/local";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import { usePathname } from "next/navigation";

const ABCDiatypeMono = localFont({
  src: "./fonts/ABCDiatypeMonoVariable.ttf",
  variable: "--abc-diatype-mono",
});

// export const metadata = {
//   title: "Archivo Público",
//   description: "Generated by create next app",
// };

// AL SACAR MENU DE LAYOUT, DESCOMENTAR LA METADATA Y SACAR `USE CLIENT`

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={`${ABCDiatypeMono.variable}`}>
        <div className="container">
          <header>
            <div className="header-wrap">
              <nav className={`${isMenuOpen ? "open" : ""}`}>
                <ul>
                  <li>
                    <Link
                      href="https://17aeea-5f.myshopify.com/"
                      className={pathname === "/shop" ? "active" : ""}
                    >
                      SHOP
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className={pathname === "/about" ? "active" : ""}
                    >
                      ABOUT
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className={pathname === "/terms" ? "active" : ""}
                    >
                      WEBSITE-TERMS
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:archivo-publico@gmail.com">E-MAIL</Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.instagram.com/archivo__publico/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      INSTAGRAM
                    </Link>
                  </li>
                  <li>
                    <Link href="#">CART (0)</Link>
                  </li>
                </ul>
              </nav>
              <div className="logo">
                <Link href="/">
                  <Image
                    src="/images/logotipo_ap.png"
                    alt="Logotipo de Archivo Público"
                    layout="responsive"
                    width={400}
                    height={56}
                    priority
                  />
                </Link>
              </div>
              <div className="iso-full">
                <Image
                  src="/images/iso_full_ap.png"
                  alt="Isotipo de Archivo Público"
                  layout="responsive"
                  width={173}
                  height={600}
                  priority
                />
              </div>
              <div className="iso-simple" onClick={handleMenu}>
                <Image
                  src={
                    isMenuOpen
                      ? "/images/iso_mobile_open.png"
                      : "/images/iso_mobile_close.png"
                  }
                  alt="Isotipo de Archivo Público"
                  layout="responsive"
                  width={50}
                  height={50}
                  priority
                />
              </div>
            </div>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
