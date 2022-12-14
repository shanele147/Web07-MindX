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
  const [wallets, setWallets] = useState(["Bank", "Cash"]);
  const [categories, setCategory] = useState([
    "Beverage",
    "Food",
    "Shopping",
    "Pet",
    "Phone",
    "Household",
  ]);
  const [expenseType, setExpenseType] = useState(["Income", "Expense"]);
  const [transactionList, setTransactionList] = useState([]);

  const onAddNewTransaction = (newTransaction) => {
    console.log(newTransaction);
    /* let newList = [];
    newList.push(newTransaction); */
    // transactionList.push(newTransaction);
    setTransactionList([...transactionList, newTransaction]);
  };

  return (
    <Browser>
      <ExpenseContext.Provider
        value={{ wallets, categories, expenseType, onAddNewTransaction }}
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
