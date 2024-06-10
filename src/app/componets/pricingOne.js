"use client";
import React from "react";
import Link from "next/link";
import { BsCheckCircle } from "react-icons/bs";
import { RiMastercardLine } from "react-icons/ri";

export default function PricingOne() {
  return (
    <div className="container relative md:mt-24 mt-16">
      <h2 className="text-4xl text-center font-semibold mb-8">Pricing </h2>
      <div className="flex justify-center items-center gap-x-4">
        <div className="group rounded-2xl border-2 border-gray-100 w-1/3 relative  rounded-md bg-white dark:bg-slate-900">
          <div className="p-6 py-8">
            <h6 className="font-bold uppercase mb-5 text-emerald-600">
              Starter
            </h6>

            <div className="flex mb-5">
              <span className="text-xl font-semibold">$</span>
              <span className="price text-4xl font-semibold mb-0">39</span>
              <span className="text-xl font-semibold self-end mb-1">/mo</span>
            </div>

            <ul className="list-none text-slate-400">
              <li className="mb-1 flex items-center">
                <BsCheckCircle className="text-emerald-600 text-base me-2" />
                Full Access
              </li>
              <li className="mb-1 !mx-0 flex items-center">
                <BsCheckCircle className="text-emerald-600 text-base me-2" />
                Source Files
              </li>
              <li className="mb-1 !mx-0 flex items-center">
                <BsCheckCircle className="text-emerald-600 text-base me-2" />
                Free Appointments
              </li>
              <li className="mb-1 !mx-0 flex items-center">
                <BsCheckCircle className="text-emerald-600 text-base me-2" />
                Enhanced Security
              </li>
            </ul>
            <Link
              href="#"
              className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md mt-5"
            >
              Get Gitscreen
            </Link>
          </div>
        </div>

        <div className="group rounded-2xl border-2 border-emerald-600 w-1/3 relative  rounded-md bg-white dark:bg-slate-800">
          <div className="p-6 py-8 md:ps-10">
            <h6 className="font-bold uppercase mb-5 text-emerald-600">
              Professional
            </h6>

            <div className="flex mb-5">
              <span className="text-xl font-semibold">$</span>
              <span className="price text-4xl font-semibold mb-0">59</span>
              <span className="text-xl font-semibold self-end mb-1">/mo</span>
            </div>

            <ul className="list-none text-slate-400">
              <li className="mb-1 !mx-0 flex items-center">
                <BsCheckCircle className="text-emerald-600 text-base me-2" />
                Full Access
              </li>
              <li className="mb-1 !mx-0 flex items-center">
                <BsCheckCircle className="text-emerald-600 text-base me-2" />
                Source Files
              </li>
              <li className="mb-1 !mx-0 flex items-center">
                <BsCheckCircle className="text-emerald-600 text-base me-2" />
                Free Appointments
              </li>
              <li className="mb-1 !mx-0 flex items-center">
                <BsCheckCircle className="text-emerald-600 text-base me-2" />
                Enhanced Security
              </li>
            </ul>
            <Link
              href="#"
              className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md mt-5"
            >
              Get Gitscreen
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
