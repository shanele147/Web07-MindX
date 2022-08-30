import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useExpenseContext } from "../../contexts/ExpenseContext";

import "./ExpenseTabs.css";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ExpenseTabs() {
  const { expenseType, transactionList } = useExpenseContext();
  const expenseList = transactionList.filter((elm) => elm.type === "Expense");
  let expenseData = expenseList.map((expense) => {
    console.log(expense);
    const { amount, category, description } = expense;
    return expense;
    /* return (
      <>
        <li>amount</li>
        <li>category</li>
        <li>description</li>
      </>
    ); */
  });
  const incomeList = transactionList.filter((elm) => elm.type === "Income");
  console.log({ expenseList, incomeList });
  const tabsData = [
    {
      label: expenseType[0],
      content: "incomeList",
    },
    {
      label: expenseType[1],
      content: expenseData,
    },
  ];
  console.log(tabsData[1].content);

  const data = {
    labels: expenseType,
    datasets: [
      {
        label: "Testing",
        data: [500, 120],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
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
      <div className="flex flex-wrap justify-center">
        {/* Show active tab content. */}
        {tabsData.map((tab, idx) => {
          return (
            <div
              className={`py-4 px-6 mx-auto tab-content animate__animated animate__fast ${
                idx === activeTabIndex ? "animate__fadeIn" : "animate__fadeOut"
              }`}
            >
              <ul>
                {tabsData[1].content.map((elm) => {
                  return <li>{elm.amount}</li>;
                })}
              </ul>
              <Pie data={data} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
