import React from "react";
import { useExpenseContext } from "../contexts/ExpenseContext";
import TabItem from "../components/ExpenseTabs/TabItem.js";

// CUSTOM HOOK
export const useChartData = () => {
  const {
    expenseCategories,
    incomeCategories,
    expenseType,
    incomeList,
    expenseList,
    transactionList,
    expenseBasedOnCategory,
    incomeBasedOnCategory,
    onDeleteTransaction,
  } = useExpenseContext();

  // RENDER TAB CONTENT FROM ARRAYS OF EXPENSE
  const expenses =
    expenseList.length > 0 ? (
      expenseList.map((elm, idx) => (
        <TabItem
          transaction={elm}
          id={elm.id}
          onDeleteTransaction={onDeleteTransaction}
          transactionList={transactionList}
        />
      ))
    ) : (
      <h3 style={{ color: "var(--active-color)" }}>
        No transaction here. Please add some transactions to try this app
      </h3>
    );
  const incomes =
    incomeList.length > 0 ? (
      incomeList.map((elm, idx) => (
        <TabItem
          transaction={elm}
          id={elm.id}
          onDeleteTransaction={onDeleteTransaction}
          transactionList={transactionList}
        />
      ))
    ) : (
      <h3 style={{ color: "var(--active-color)" }}>
        No income record here. Please add some transactions to try this app
      </h3>
    );

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
              "rgb(46, 153, 207, 0.2)",
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
              "rgb(68, 107, 20, 0.8)",
            ],
            borderColor: [
              "rgb(46, 153, 207, 0.75)",
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
              "rgb(46, 153, 207, 0.2)",
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
              "rgb(68, 107, 20, 0.3)",
            ],
            borderColor: [
              "rgb(46, 153, 207, 0.75)",
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
              "rgb(68, 107, 20, 0.9)",
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
  const chartData = { tabsData, options };
  return chartData;
};
