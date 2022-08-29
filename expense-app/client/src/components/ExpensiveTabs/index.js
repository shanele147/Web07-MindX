import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useExpenseContext } from "../../contexts/ExpenseContext";

import "./ExpensiveTabs.css";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ExpensiveTabs() {
  const { expenseType } = useExpenseContext();
  const tabsData = [
    {
      label: expenseType[0],
      content:
        "Ut irure mollit nulla eiusmod excepteur laboris elit sit anim magna tempor excepteur labore nulla.",
    },
    {
      label: expenseType[1],
      content:
        "Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.",
    },
  ];
  
  /* const data = expenseType.map((type) => {
    return ({
      labels: expenseType,
      datasets: [
        {
          label: type,
          data: [500, 120],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)"
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
          ],
          borderWidth: 1,
        },
      ],
    });
  }); */
  const data = {
    labels: expenseType,
    datasets: [
      {
        label: "Testing",
        data: [500, 120],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="w-full md:w-2/3 mx-auto tab-container">
      <div className="flex">
        {/* Loop through tab data and render button for each. */}
        {tabsData.map((tab, idx) => {
          return (
            <button
              key={idx}
              className={`w-1/2 py-2 px-4 tab-index transition duration-500 ${
                idx === activeTabIndex
                  ? "border-b-2 active-border"
                  : "border-b-2"
              }`}
              // Change the active tab on click.
              onClick={() => setActiveTabIndex(idx)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      {/* Show active tab content. */}
      {tabsData.map((tab, idx) => {
        return (
          <div
            className={`py-4 px-6 tab-content animate__animated animate__fast ${
              idx === activeTabIndex ? "animate__fadeIn" : "animate__fadeOut"
            }`}
          >
            <p>{tab.content}</p>
            <div className="w-1/2 mx-auto py-24">
        <Pie data={data} />
      </div>
          </div>
        );
      })}
      {/* <div className="w-1/2 mx-auto py-24">
        <Pie data={data} />
      </div> */}
    </div>
  );
}
