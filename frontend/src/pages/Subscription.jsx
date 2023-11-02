import React, { useState } from "react";
import { Link } from "react-router-dom";
const Subscription = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="relative font-inter antialiased">
      <main className="relative min-h-screen flex flex-col justify-center bg-gradient-to-br from-amber-300 via-amber-200 to-amber-100 overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24 bg-gradient-to-br from-amber-300 via-amber-200 to-amber-100 ">
          <h1 className="text-5xl  font-bold font-sans text-black text-center mb-6">
            Subscription Plans
          </h1>

          {/* Pricing toggle */}
          <div className="flex justify-center max-w-[14rem] m-auto mb-8 lg:mb-16">
            <div className="relative flex w-full p-1 bg-white dark:bg-[#FFC629] rounded-full">
              <span
                className="absolute inset-0 m-1 pointer-events-none"
                aria-hidden="true"
              >
                <span
                  className={`absolute inset-0 w-1/2 bg-[#000000] rounded-full shadow-sm shadow-indigo-950/10 transform transition-transform duration-150 ease-in-out ${
                    isAnnual ? "translate-x-0" : "translate-x-full"
                  }`}
                ></span>
              </span>
              <button
                className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${
                  isAnnual ? "text-white" : "text-slate dark:text-slate"
                }`}
                onClick={() => setIsAnnual(true)}
                aria-pressed={isAnnual}
              >
                Yearly{" "}
                <span
                  className={
                    isAnnual ? "text-indigo-200" : "text-slate dark:text-slate"
                  }
                ></span>
              </button>
              <button
                className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${
                  isAnnual ? "text-slate dark:text-slate" : "text-white"
                }`}
                onClick={() => setIsAnnual(false)}
                aria-pressed={!isAnnual}
              >
                Monthly
              </button>
            </div>
          </div>
          <div className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none">
            {/* Pricing tab 1 */}
            <div className="h-full">
              <div className="relative flex flex-col h-full p-6 rounded-2xl bg-white dark:bg-[#000000] border-2 border-slate-200 dark:border-slate-900 shadow shadow-slate-950/5 transition transform hover:scale-105  hover:border-yellow-500">
                <div className="mb-5">
                  <div className="text-slate-900 dark:text-[#FFC629] font-semibold mb-1">
                    Basic
                  </div>
                  <div className="inline-flex items-baseline mb-2">
                    <span className="text-slate-900 dark:text-[#ffffff] font-bold text-3xl">
                      Rs.
                    </span>
                    <span className="text-slate-900 dark:text-[#ffffff] font-bold text-4xl">
                      {isAnnual ? "29" : "35"}
                    </span>
                    <span className="text-[#FFC629] font-medium">/mo</span>
                  </div>
                  <div className="text-sm text-[#FFC629] mb-5">
                    Perfect for occasional riders.
                  </div>
                  <a
                    className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-[#f7a8a8] px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover-bg-indigo-600 focus-visible-outline-none focus-visible-ring focus-visible-ring-indigo-300 dark-focus-visible-ring-slate-600 transition-colors-duration-150"
                    href="#0"
                  >
                    Purchase Plan
                  </a>
                </div>
                <div className="text-slate-900 dark:text-[#FFC629] font-medium mb-3">
                  Includes:
                </div>
                <ul className="text-slate-600 dark:text-[#FFC629] text-sm space-y-3 grow">
                  <li className="flex items-center">
                    <svg
                      className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Unlimited placeholder texts</span>
                  </li>
                  {/* Add more list items here */}
                </ul>
              </div>
            </div>
            {/* Pricing tab 2 */}
            <div className="dark h-full">
              <div className="relative flex flex-col h-full p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-900 shadow shadow-slate-950/5 transition transform hover:scale-105  hover:border-yellow-500">
                <div className="absolute top-0 right-0 mr-6 -mt-4">
                  <div className="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-emerald-500 text-white rounded-full shadow-sm shadow-slate-950/5">
                    Most Popular
                  </div>
                </div>
                <div className="mb-5">
                  <div className="text-slate-900 dark:text-[#FFC629] font-semibold mb-1">
                    Premium
                  </div>
                  <div className="inline-flex items-baseline mb-2">
                    <span className="text-slate-900 dark:text-[#ffffff] font-bold text-3xl">
                      Rs.
                    </span>
                    <span className="text-slate-900 dark:text-[#ffffff] font-bold text-4xl">
                      {isAnnual ? "49" : "55"}
                    </span>
                    <span className="text-[#FFC629] font-medium">/mo</span>
                  </div>
                  <div className="text-sm text-[#FFC629] mb-5">
                    For frequent riders and extra benefits.
                  </div>
                  <a
                    className="w-full inline-flex justify-center whitespace-nowrap font-sans  rounded-lg bg-[#f7a8a8] px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover-bg-indigo-600 focus-visible-outline-none focus-visible-ring focus-visible-ring-indigo-300 dark-focus-visible-ring-slate-600 transition-colors-duration-150"
                    href="#0"
                  >
                    Purchase Plan
                  </a>
                </div>
                <div className="text-slate-900 dark:text-[#FFC629] font-medium mb-3">
                  Includes:
                </div>
                <ul className="text-slate-600 dark:text-[#FFC629] text-sm space-y-3 grow">
                  <li className="flex items-center">
                    <svg
                      className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Unlimited placeholder texts</span>
                  </li>
                  {/* Add more list items for Tab 2 here */}
                </ul>
              </div>
            </div>

            {/* Pricing tab 3 */}
            <div className="h-full">
              <div className="relative flex flex-col h-full p-6 rounded-2xl bg-white dark:bg-[#000000] border border-slate-200 dark:border-slate-900 shadow shadow-slate-950/5 transition transform hover:scale-105 hover:border-yellow-500">
                <div className="mb-5">
                  <div className="text-slate-900 dark:text-[#FFC629] font-semibold mb-1">
                    Business
                  </div>
                  <div className="inline-flex items-baseline mb-2">
                    <span className="text-slate-900 dark:text-slate-200 font-bold text-3xl">
                      Rs.
                    </span>
                    <span className="text-slate-900 dark:text-slate-200 font-bold text-4xl">
                      {isAnnual ? "79" : "85"}
                    </span>
                    <span className="text-[#FFC629] font-medium">/mo</span>
                  </div>
                  <div className="text-sm text-[#FFC629] mb-5">
                    Best for corporate users and priority booking.
                  </div>
                  <a
                    className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-[#f7a8a8] px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover-bg-indigo-600 focus-visible-outline-none focus-visible-ring focus-visible-ring-indigo-300 dark-focus-visible-ring-slate-600 transition-colors-duration-150"
                    href="#0"
                  >
                    Purchase Plan
                  </a>
                </div>
                <div className="text-slate-900 dark:text-[#FFC629] font-medium mb-3">
                  Includes:
                </div>
                <ul className="text-slate-600 dark:text-[#FFC629] text-sm space-y-3 grow">
                  <li className="flex items-center">
                    <svg
                      className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Unlimited placeholder texts</span>
                  </li>
                  {/* Add more list items for Tab 3 here */}
                </ul>
              </div>
            </div>
            <div className="flex justify-center "></div>
            <div className="flex justify-center ">
            <Link to = "/Rent">
              <button className="bg-[#000000] px-5 py-3 rounded-full text-sm font-medium text-[#FFC629] shadow-sm shadow-indigo-950/10 hover-bg-indigo-600 focus-visible-outline-none focus-visible-ring focus-visible-ring-indigo-300 dark-focus-visible-ring-slate-600 transition-colors-duration-150 transition transform hover:scale-105 ">
                Skip for Now
              </button>
            </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Subscription;
