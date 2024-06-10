"use client";
import React, { useReducer } from "react";
import { Link as Link2 } from "react-scroll";
import { accordionData } from "../Data/dataTwo";

export default function Faq() {
  const initialState = {
    activeIndex: 0,
    activeGeneral: 0,
    activePayment: 0,
    activeSupport: 0,
  };

  const toggleAccordion = (category, index) => {
    dispatch({
      type: "SELECT_CATEGORY",
      payload: { category: category, index: index },
    });
  };

  const reducerMethod = (state, action) => {
    switch (action.payload.category) {
      case "active":
        return {
          ...state,
          activeIndex: action.payload.index,
        };
      case "general":
        return {
          ...state,
          activeGeneral: action.payload.index,
        };
      case "payments":
        return {
          ...state,
          activePayment: action.payload.index,
        };
      case "support":
        return {
          ...state,
          activeSupport: action.payload.index,
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducerMethod, initialState);
  return (
    <div className="container relative md:pb-24 pb-16" id="faq">
      <div className="flex items-center justify-center">
        <div className="w-full md:w-2/3">
          <div>
            <h2 className="text-4xl text-center font-semibold">FAQ </h2>

            <div
              id="accordion-collapseone"
              data-accordion="collapse"
              className="mt-6"
            >
              {accordionData?.map((item, index) => (
                <div
                  key={index}
                  className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4"
                >
                  <h2
                    className="text-base font-semibold"
                    id="accordion-collapse-heading-1"
                  >
                    <button
                      onClick={() => toggleAccordion("active", index)}
                      type="button"
                      className={`${
                        state.activeIndex === index
                          ? "flex justify-between items-center p-5 w-full font-medium text-start bg-gray-50 dark:bg-slate-800 text-emerald-600"
                          : "flex justify-between items-center p-5 w-full font-medium text-start text-dark dark:text-white"
                      }`}
                    >
                      <span>{item.title}</span>
                      <svg
                        data-accordion-icon
                        className={`${
                          state.activeIndex === index
                            ? "rotate-180"
                            : "rotate-270"
                        } size-4 shrink-01`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </h2>
                  {state.activeIndex === index && (
                    <div
                      id="accordion-collapse-body-1"
                      aria-labelledby="accordion-collapse-heading-1"
                    >
                      <div className="p-5">
                        <p className="text-slate-400 dark:text-gray-400">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
