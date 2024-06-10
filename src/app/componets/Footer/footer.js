"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import * as Icon from "react-feather";

import {
  FaRegEnvelope,
  FaDribbble,
  FaLinkedin,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaRegFile,
  FaBehance,
} from "react-icons/fa";
import { PiShoppingCart } from "react-icons/pi";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Footer() {
  const footerLinks = [
    {
      liClass: "",
      route: "/terms-and-conditions",
      title: "Terms and Conditions",
    },
    {
      liClass: "mt-[10px]",
      route: "/privacy-policy",
      title: "Privacy Policy",
    },
    {
      route: "/refund-policy",
      title: "Documentation",
      liClass: "mt-[10px]",
    },
  ];
  const partnerLinks = [
    {
      liClass: "",
      route: "https://calorieasy.app",
      title: "Calorieasy",
    },
    {
      liClass: "mt-[10px]",
      route: "https://getharmonize.app",
      title: "Harmonize",
    },
    {
      route: "https://ourbabyai.com",
      title: "Our Baby AI",
      liClass: "mt-[10px]",
    },
    {
      route: "https://listskit.com",
      title: "Lists Kit",
      liClass: "mt-[10px]",
    },
    {
      route: "https://kanokari.ai",
      title: "Kanokari",
      liClass: "mt-[10px]",
    },
  ];
  const footerCompany = [
    {
      liClass: "",
      route: "/page-aboutus",
      title: "About us",
    },
    {
      liClass: "mt-[10px]",
      route: "/page-services",
      title: "Services",
    },
    {
      route: "/page-team",
      title: "Team",
      liClass: "mt-[10px]",
    },
    {
      route: "/page-pricing",
      title: "Pricing",
      liClass: "mt-[10px]",
    },
    {
      route: "/portfolio-creative-four",
      title: "Project",
      liClass: "mt-[10px]",
    },
    {
      route: "/blog",
      title: "Blog",
      liClass: "mt-[10px]",
    },
    {
      route: "/auth-login",
      title: "Login",
      liClass: "mt-[10px]",
    },
  ];
  return (
    <div>
      <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
        <div className="container relative">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <div className="py-[60px] px-0">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                  <div className="lg:col-span-4 md:col-span-12">
                    <Link href="/#" className="text-[22px] focus:outline-none">
                      <Image
                        src="/images/logo-light.png"
                        width={138}
                        height={24}
                        alt=""
                      />
                    </Link>
                    <div className="w-full md:w-[80%]">
                      <p className="mt-6 text-gray-300">
                        Start working with Tailwind CSS that can provide
                        everything you need to generate awareness, drive
                        traffic, connect.
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-2 md:col-span-4 hidden">
                    <h5 className="tracking-[1px] text-gray-100 font-semibold">
                      Company
                    </h5>
                    <ul className="list-none footer-list mt-6">
                      {footerCompany.map((data, index) => (
                        <li key={index} className={data.liClass}>
                          <Link
                            href={data.route}
                            className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out flex items-center"
                          >
                            <MdKeyboardArrowRight className="text-xl me-1" />{" "}
                            {data.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-4 md:col-span-4">
                    <h5 className="tracking-[1px] text-gray-100 font-semibold">
                      Useful Links
                    </h5>
                    <ul className="list-none footer-list mt-6">
                      {footerLinks.map((data, index) => (
                        <li key={index} className={data.liClass}>
                          <Link
                            href={data.route}
                            className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out flex items-center"
                          >
                            <MdKeyboardArrowRight className="text-xl me-1" />{" "}
                            {data.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-4 md:col-span-4">
                    <h5 className="tracking-[1px] text-gray-100 font-semibold">
                      Partners
                    </h5>
                    <ul className="list-none footer-list mt-6">
                      {partnerLinks.map((data, index) => (
                        <li key={index} className={data.liClass}>
                          <Link
                            href={data.route}
                            target="_blank"
                            className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out flex items-center"
                          >
                            <MdKeyboardArrowRight className="text-xl me-1" />{" "}
                            {data.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-[30px] px-0 border-t border-slate-800">
          <div className="container relative text-center">
            <div className="items-center">
              <div className="md:text-start text-center flex gap-x-3">
                <p className="mb-0">
                  © {new Date().getFullYear()} T31 Labs | All rights reserved |
                </p>
                <p>
                  Built with
                  <i className="mdi mdi-heart text-red-600 ml-1"></i> by{" "}
                  <Link
                    href="https://github.com/T31K"
                    target="_blank"
                    className="text-reset"
                  >
                    T31K
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
