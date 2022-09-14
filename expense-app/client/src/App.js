import "./App.css";
import "./styles/main.scss";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";
import { ExpenseContext } from "./contexts/ExpenseContext";

// COMPONENTS
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header";

function App() {
  const data = [
    {
      id: 1,
      date: "2022-08-01",
      amount: "1000",
      category: "Bonus",
      description: "July overtime working",
      type: "Income",
      wallet: "Bank",
    },
    {
      id: 2,
      date: "2022-08-13",
      amount: "400",
      category: "Food",
      description: "Dinner with friends",
      type: "Expense",
      wallet: "Bank",
    },
    {
      id: 3,
      date: "2022-08-02",
      amount: "150",
      category: "Shopping",
      description: "Weekend super market",
      type: "Expense",
      wallet: "Bank",
    },
    {
      id: 4,
      date: "2022-08-18",
      amount: "50",
      category: "Food",
      description: "Hangout weekend",
      type: "Expense",
      wallet: "Bank",
    },
  ];
  const [balance, setBalance] = useState(0);
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
    "Investment",
  ]);
  const [expenseType, setExpenseType] = useState(["Income", "Expense"]);
  const [transactionList, setTransactionList] = useState(data);
  const incomeList = transactionList.filter((elm) => elm.type === "Income");
  const expenseList = transactionList.filter((elm) => elm.type === "Expense");

  const getCategoryTotalAmount = (category, list) => {
    return list
      .filter((elm) => elm.category === category)
      .reduce((total, elm) => total + Number(elm.amount), 0);
  };

  const expenseBasedOnCategory = expenseCategories.map((cat) =>
    getCategoryTotalAmount(cat, expenseList)
  );

  const incomeBasedOnCategory = incomeCategories.map((cat) =>
    getCategoryTotalAmount(cat, incomeList)
  );

  let expenseTotalAmount = expenseBasedOnCategory.reduce(
    (total, elm) => total + Number(elm),
    0
  );
  let incomeTotalAmount = incomeBasedOnCategory.reduce(
    (total, elm) => total + Number(elm),
    0
  );
  console.log({ incomeList, expenseList });
  // handle expense tabs open state
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const handleTabIndex = (id) => {
    setActiveTabIndex(id);
  };

  // adding new transaction
  const onAddNewTransaction = (newTransaction) => {
    setTransactionList([...transactionList, newTransaction]);
  };

  const onDeleteTransaction = (idx) => {
    const filteredTransaction = transactionList.filter(
      (transaction) => transaction.id !== idx
    );
    setTransactionList(filteredTransaction);
  };

  useEffect(() => {
    setBalance(incomeTotalAmount - expenseTotalAmount);
  }, [transactionList]);

  return (
    <Browser>
      <ExpenseContext.Provider
        value={{
          balance,
          wallets,
          expenseCategories,
          incomeCategories,
          expenseType,
          transactionList,
          incomeList,
          expenseList,
          expenseBasedOnCategory,
          incomeBasedOnCategory,
          onAddNewTransaction,
          onDeleteTransaction,
          activeTabIndex,
          handleTabIndex,
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
