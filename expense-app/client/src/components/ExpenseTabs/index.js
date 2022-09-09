import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie, Doughnut } from "react-chartjs-2";
import { useExpenseContext } from "../../contexts/ExpenseContext";
import expenseAppService from "../../services";

import "./ExpenseTabs.css";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ExpenseTabs() {
  const getTotal = (category, list) => {
    return list
      .filter((elm) => elm.category === category)
      .reduce((total, elm) => total + Number(elm.amount), 0);
  };

  const { expenseCategories, incomeCategories, expenseType, transactionList } =
    useExpenseContext();
  const incomeList = transactionList.filter((elm) => elm.type === "Income");
  const expenseList = transactionList.filter((elm) => elm.type === "Expense");
  let expenseBasedOnCategory = [],
    incomeBasedOnCategory = [];
  for (let category of expenseCategories) {
    expenseBasedOnCategory.push(getTotal(category, expenseList));
  }

  for (let category of incomeCategories) {
    incomeBasedOnCategory.push(getTotal(category, incomeList));
  }

  // console.log({ expenseBasedOnCategory, incomeBasedOnCategory });

  const renderDataList = (arr) => {
    let htmlList = arr.map((elm, idx) => {
      const { amount, category, description } = elm;
      return (
        <>
          <ul
            key={idx}
            className="w-full justify-between px-2 py-2 flex flex-wrap transition-row "
          >
            <li>
              <p
                className={`category ${category
                  .toLowerCase()
                  .replace(/ /g, "_")} text-sm md:text-lg`}
              >
                {category}
              </p>
              <p className="description text-xs md:text-sm">{description}</p>
            </li>
            <li className="w-fit md:w-1/5">
              <p className="amount text-base md:text-lg">
                {expenseAppService.convertCurrency(amount, "USD")}
              </p>
            </li>
          </ul>
        </>
      );
    });
    return htmlList;
  };
  let expenses = renderDataList(expenseList);
  let incomes = renderDataList(incomeList);

  console.log({ expenseList, incomeList });
  const tabsData = [
    {
      label: expenseType[0],
      content: incomes,
      chartData: {
        labels: incomeCategories,
        datasets: [
          {
            label: `% of ${expenseType[0]}`,
            data: incomeBasedOnCategory,
            backgroundColor: [
              "rgb(245, 190, 87, 0.2)",
              "rgb(244, 123, 124,0.2)",
              "rgba(245, 165, 0, 0.3)",
              "rgba(75, 192, 200, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(165, 49, 9, 0.2)",
              "rgb(243, 178, 125, 0.2)",
              "rgb(140, 222, 246, 0.2)",
              "rgb(72, 72, 222, 0.2)",
              "rgb(130, 206, 106, 0.2)",
              "rgb(227, 46, 177, 0.2)",
              "rgb(216, 213, 93, 0.2)",
              "rgb(68, 107, 20, 0.2)",
            ],
            borderColor: [
              "rgb(245, 190, 87, 0.75)",
              "rgb(244, 123, 124, 0.75)",
              "rgba(245, 165, 0, 0.75)",
              "rgba(75, 192, 200, 0.75)",
              "rgba(153, 102, 255, 0.75)",
              "rgba(165, 49, 9, 0.75)",
              "rgb(243, 178, 125, 0.75)",
              "rgb(140, 222, 246, 0.75)",
              "rgb(72, 72, 222, 0.75)",
              "rgb(130, 206, 106, 0.75)",
              "rgb(227, 46, 177, 0.75)",
              "rgb(216, 213, 93, 0.75)",
              "rgb(68, 107, 20, 0.75)",
            ],

            borderWidth: 1,
          },
        ],
      },
    },
    {
      label: expenseType[1],
      content: expenses,
      chartData: {
        labels: expenseCategories,
        datasets: [
          {
            label: `% of ${expenseType[1]}`,
            data: expenseBasedOnCategory,
            backgroundColor: [
              "rgb(245, 190, 87, 0.2)",
              "rgb(244, 123, 124,0.2)",
              "rgba(245, 165, 0, 0.3)",
              "rgba(75, 192, 200, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(165, 49, 9, 0.2)",
              "rgb(243, 178, 125, 0.2)",
              "rgb(140, 222, 246, 0.2)",
              "rgb(72, 72, 222, 0.2)",
              "rgb(130, 206, 106, 0.2)",
              "rgb(227, 46, 177, 0.2)",
              "rgb(216, 213, 93, 0.2)",
              "rgb(68, 107, 20, 0.2)",
            ],
            borderColor: [
              "rgb(245, 190, 87, 0.75)",
              "rgb(244, 123, 124, 0.75)",
              "rgba(245, 165, 0, 0.75)",
              "rgba(75, 192, 200, 0.75)",
              "rgba(153, 102, 255, 0.75)",
              "rgba(165, 49, 9, 0.75)",
              "rgb(243, 178, 125, 0.75)",
              "rgb(140, 222, 246, 0.75)",
              "rgb(72, 72, 222, 0.75)",
              "rgb(130, 206, 106, 0.75)",
              "rgb(227, 46, 177, 0.75)",
              "rgb(216, 213, 93, 0.75)",
              "rgb(68, 107, 20, 0.75)",
            ],

            hoverOffset: 0,
          },
        ],
      },
    },
  ];

  const options = {
    cutout: "60%",
    aspectRatio: 3 / 4,
    responsive: true,
    spacing: 2,
    layout: {
      autoPadding: true,
      padding: "10",
    },
    plugins: {
      legend: {
        display: true,
        fullSize: true,
        position: "bottom",
        labels: {
          color: "#ffffff",
          align: "start",
          padding: 12,
          boxWidth: 24,
          boxHeight: 12,
          /* Adjust data label font size according to chart size */
          font: function (context) {
            var width = context.chart.width;
            // console.log(width);
            var size =
              width < 667 && width < 1227
                ? Math.round(width / 36)
                : width >= 1227
                ? Math.round(width / 48)
                : Math.round(width / 34);
            // console.log(size);
            return {
              weight: "400",
              size: size,
            };
          },
        },
      },
      tooltips: {
        enabled: true,
      },
    },
  };

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="w-full md:w-3/4 ld:w-2/3 mx-auto tab-container">
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
              key={idx}
              className={`w-full md:w-2/3 lg:w-1/2 py-4 px-4 md:px-6 mx-auto tab-content animate__animated animate__slow ${
                idx === activeTabIndex ? "animate__fadeIn" : "animate__fadeOut"
              }`}
            >
              {tab.content}
              <Doughnut data={tab.chartData} options={options} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
