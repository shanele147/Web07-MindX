import "./App.css";
import "./styles/main.scss";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";
import { ExpenseContext } from "./contexts/ExpenseContext";
/* import { CategoryContext } from "./contexts/CategoryContext";
import { WalletContext } from "./contexts/WalletContext"; */

// COMPONENTS
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header";

function App() {
  const data = [
    {
      date: "2022-08-01",
      amount: "600",
      category: "Bonus",
      description: "July overtime working",
      type: "Income",
      wallet: "Bank",
    },
    {
      date: "2022-08-13",
      amount: "400",
      category: "Food",
      description: "Dinner with friends",
      type: "Expense",
      wallet: "Bank",
    },
    {
      date: "2022-08-02",
      amount: "150",
      category: "Shopping",
      description: "Weekend super market",
      type: "Expense",
      wallet: "Bank",
    },
    {
      date: "2022-08-18",
      amount: "50",
      category: "Food",
      description: "Hangout weekend",
      type: "Expense",
      wallet: "Bank",
    },
  ];
  const [wallets, setWallets] = useState(["Bank", "Cash"]);
  const [expenseCategories, setExpenseCategory] = useState([
    "Beverage",
    "Food",
    "Shopping",
    "Pet",
    "Phone",
    "Household",
    "Bills",
    "Education",
    "Entertainment",
    "Health",
    "Travel",
    "Transportation",
    "Others",
  ]);
  const [incomeCategories, setIncomeCategory] = useState([
    "Salary",
    "Awards",
    "Bonus",
    "Lottery",
    "Phone",
    "Investment",
  ]);
  const [expenseType, setExpenseType] = useState(["Income", "Expense"]);
  const [transactionList, setTransactionList] = useState(data);

  const onAddNewTransaction = (newTransaction) => {
    setTransactionList([...transactionList, newTransaction]);
  };

  return (
    <Browser>
      <ExpenseContext.Provider
        value={{
          wallets,
          expenseCategories,
          incomeCategories,
          expenseType,
          transactionList,
          onAddNewTransaction,
        }}
      >
        <Header></Header>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </ExpenseContext.Provider>
    </Browser>
  );
}

export default App;
