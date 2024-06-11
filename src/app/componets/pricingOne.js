"use client";
import React from "react";
import Link from "next/link";
import { BsCheckCircle, BsXLg } from "react-icons/bs";

export default function PricingOne() {
  return (
    <div className="container relative md:mt-24 mt-16">
      <h2 className="text-4xl text-center font-semibold mb-8">Pricing </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-x-4 gap-y-3">
        <div className="w-full flex justify-end">
          <div className="group w-full md:w-3/5 rounded-xl border-2 border-gray-200 w-1/3 relative bg-gray-50 dark:bg-slate-900">
            <div className="p-6 py-8">
              <div className="flex mb-5">
                <span className="text-xl font-semibold">$</span>
                <span className="price text-4xl font-semibold mb-0">0</span>
              </div>

              <ul className="list-none text-slate-400">
                <li className="mb-1 !mx-0 flex items-center">
                  <BsCheckCircle className="text-amber-300 text-base me-2" />
                  <p className="text-slate-500">Limited color schemes</p>
                </li>
                <li className="mb-1 !mx-0 flex items-center">
                  <BsXLg className="text-red-500 text-base me-2" />
                  <p className="text-slate-500">Use light/dark mode</p>
                </li>
                <li className="mb-1 !mx-0 flex items-center">
                  <BsXLg className="text-red-500 text-base me-2" />
                  <p className="text-slate-500">Add day labels</p>
                </li>
                <li className="mb-1 !mx-0 flex items-center">
                  <BsXLg className="text-red-500 text-base me-2" />
                  <p className="text-slate-500">Add current week pointer</p>
                </li>
                <li className="mb-1 !mx-0 flex items-center">
                  <BsXLg className="text-red-500 text-base me-2" />
                  <p className="text-slate-500">Auto fetch commits</p>
                </li>
                <li className="mb-1 !mx-0 flex items-center">
                  <BsCheckCircle className="text-amber-300 text-base me-2" />
                  <p className="text-slate-500">Manually set wallpaper</p>
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
        <div className="w-full flex justify-start">
          <div className="group w-full md:w-3/5 rounded-xl border-2 border-emerald-600 w-1/3 relative bg-emerald-100 dark:bg-slate-900">
            <div className="p-6 py-8 md:ps-10">
              <div className="flex mb-5">
                <span className="text-xl font-semibold">$</span>
                <span className="price text-4xl font-semibold mb-0">15</span>
              </div>

              <ul className="list-none text-slate-400">
                <li className="mb-1 !mx-0 flex items-center">
                  <BsCheckCircle className="text-emerald-600 text-base me-2" />
                  <p className="text-slate-600">Unlock all color schemes</p>
                </li>
                <li className="mb-1 !mx-0 flex items-center">
                  <BsCheckCircle className="text-emerald-600 text-base me-2" />
                  <p className="text-slate-600">Use light/dark mode</p>
                </li>
                <li className="mb-1 !mx-0 flex items-center">
                  <BsCheckCircle className="text-emerald-600 text-base me-2" />
                  <p className="text-slate-600">Add day labels</p>
                </li>
                <li className="mb-1 !mx-0 flex items-center">
                  <BsCheckCircle className="text-emerald-600 text-base me-2" />
                  <p className="text-slate-600">Add current week pointer</p>
                </li>
                <li className="mb-1 !mx-0 flex items-center">
                  <BsCheckCircle className="text-emerald-600 text-base me-2" />
                  <p className="text-slate-600">Auto fetch commits</p>
                </li>
                <li className="mb-1 !mx-0 flex items-center">
                  <BsCheckCircle className="text-emerald-600 text-base me-2" />
                  <p className="text-slate-600">Auto set wallpaper</p>
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
    </div>
  );
}
