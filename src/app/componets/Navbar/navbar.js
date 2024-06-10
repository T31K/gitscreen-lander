"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { LuSettings, BsCart3 } from "../../assets/icons/icons";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar(props) {
  let { navClass, navJustify } = props;
  let [isMenu, setisMenu] = useState(false);

  let [manu, setManu] = useState("");
  let pathname = usePathname();

  useEffect(() => {
    setManu(pathname);

    function windowScroll() {
      const navbar = document.getElementById("topnav");
      if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
      ) {
        if (navbar !== null) {
          navbar?.classList.add("nav-sticky");
        }
      } else {
        if (navbar !== null) {
          navbar?.classList.remove("nav-sticky");
        }
      }
    }
    window.addEventListener("scroll", windowScroll);
    window.scrollTo(0, 0);
    return () => {
      window.removeEventListener("scroll", windowScroll);
    };
  }, [setManu]);

  const toggleMenu = () => {
    setisMenu(!isMenu);
    if (document.getElementById("navigation")) {
      const anchorArray = Array.from(
        document.getElementById("navigation").getElementsByTagName("a")
      );
      anchorArray.forEach((element) => {
        element.addEventListener("click", (elem) => {
          const target = elem.target.getAttribute("href");
          if (target !== "") {
            if (elem.target.nextElementSibling) {
              var submenu = elem.target.nextElementSibling.nextElementSibling;
              submenu.classList.toggle("open");
            }
          }
        });
      });
    }
  };

  return (
    <nav
      id="topnav"
      className={`defaultscroll ${
        navClass === "nav-light"
          ? ""
          : navClass === "nav-sticky"
          ? "bg-white dark:bg-slate-900"
          : ""
      }`}
    >
      <div className="container relative flex justify-between items-center">
        {navClass === "nav-light" ? (
          <Link className="logo" href="/index">
            <span className="inline-block dark:hidden">
              <Image
                src="/images/gs_logo.webp"
                className="l-dark"
                width={48}
                height={48}
                alt=""
              />
              <Image
                src="/images/gs_logo.webp"
                className="l-light"
                width={48}
                height={48}
                alt=""
              />
            </span>
            <Image
              src="/images/gs_logo.webp"
              width={48}
              height={48}
              className="hidden dark:inline-block"
              alt=""
            />
          </Link>
        ) : (
          <Link className="logo flex items-center gap-x-1" href="/index">
            <Image
              src="/images/gs_logo.webp"
              width={48}
              height={48}
              className="inline-block dark:hidden"
              alt=""
            />
            <p>Gitscreen</p>
            <Image
              src="/images/gs_logo.webp"
              width={48}
              height={48}
              className="hidden dark:inline-block"
              alt=""
            />
          </Link>
        )}

        <div className="menu-extras hidden">
          <div className="menu-item">
            <Link
              href="#"
              className={`navbar-toggle ${isMenu ? "open" : ""}`}
              id="isToggle"
              onClick={() => toggleMenu()}
            >
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </Link>
          </div>
        </div>

        {navClass !== "nav-light" ? (
          <ul className={`buy-button list-none space-x-1 mb-0`}>
            <li className="inline mb-0">
              <Link
                href="#"
                className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md"
              >
                Download Now
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="buy-button list-none space-x-1 mb-0">
            <li className="inline mb-0">
              <Link
                href="#"
                className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md"
              >
                Download Now
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
