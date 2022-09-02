import React, { useState, useEffect } from "react";
import { useExpenseContext } from "../../contexts/ExpenseContext";
import {
  Input,
  Select,
  Option,
  Button,
  Dialog,
  DialogBody,
} from "@material-tailwind/react";
import "../InputField/InputField.css";
import "animate.css";

const InputField = (props) => {
  const { open, handleOpen } = props;
  const {
    wallets,
    expenseCategories,
    incomeCategories,
    expenseType,
    onAddNewTransaction,
  } = useExpenseContext();
  const [category, setCategory] = useState("");
  const [wallet, setWallet] = useState("");
  const [type, setType] = useState("");

  const [transaction, setTransaction] = useState({
    date: "",
    amount: "",
    category: "",
    description: "",
    type: "",
    wallet: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // console.log({ name, value });
    setTransaction({ ...transaction, [name]: value });
  };

  const handleCategoryChange = (value) => {
    // setCategory(value);
    transaction.category = value;
    setCategory(value);
    setTransaction(transaction);
  };
  const handleWalletChange = (value) => {
    // setWallet(value);
    transaction.wallet = value;
    setWallet(value);
    setTransaction(transaction);
  };
  const handleTypeChange = (value) => {
    // setType(value);
    transaction.type = value;
    setType(value);
    setTransaction(transaction);
  };

  const categoryList =
    type === "Income"
      ? incomeCategories.map((elm, idx) => {
          return (
            <Option value={elm} key={idx}>
              {elm}
            </Option>
          );
        })
      : expenseCategories.map((elm, idx) => {
          return (
            <Option value={elm} key={idx}>
              {elm}
            </Option>
          );
        });

  const resetForm = () => {
    setCategory("");
    setWallet("");
    setType("");
    setTransaction({
      date: "",
      amount: "",
      type: "",
      category: "",
      wallet: "",
      description: "",
    });
  };

  const onHandleAdd = () => {
    // console.log(transaction);
    onAddNewTransaction(transaction);
    resetForm();
  };

  const walletList = wallets.map((elm, idx) => {
    return (
      <Option value={elm} key={idx}>
        {elm}
      </Option>
    );
  });

  const typeList = expenseType.map((elm, idx) => {
    return (
      <Option value={elm} key={idx}>
        {elm}
      </Option>
    );
  });

  return (
    <div className={`flex flex-col gap-6 md:gap-8 mx-auto animate__animated`}>
      <Dialog
        className="tw-dialog"
        size="lg"
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        style={{ backgroundColor: "transparent" }}
      >
        <DialogBody
          className={`input-container flex flex-col gap-6 md:gap-8 mx-auto animate__animated py-4 md:py-12`}
        >
          <Input
            key="date"
            label="Date"
            name="date"
            type="date"
            className="expense-input"
            color="deep-purple"
            size="lg"
            variant="standard"
            value={transaction.date}
            onChange={handleInputChange}
          />
          <Input
            key="amount"
            label="Amount"
            name="amount"
            type="text"
            className="expense-input"
            color="deep-purple"
            size="lg"
            variant="standard"
            value={transaction.amount}
            onChange={handleInputChange}
          />
          {(isNaN(transaction.amount) === true ||
            Number(transaction.amount) < 0) && (
            <div style={{ color: "#bd2560", fontSize: "0.95rem" }}>
              Entered value is invalid. Please input the number.
            </div>
          )}
          <Input
            key="description"
            label="Description"
            name="description"
            type="text"
            color="deep-purple"
            size="lg"
            className="expense-input"
            variant="standard"
            value={transaction.description}
            onChange={handleInputChange}
          />
          <Select
            label="Type"
            className="expense-select"
            variant="standard"
            color="deep-purple"
            value={type}
            style={{ borderBottom: "1px solid" }}
            onChange={handleTypeChange}
          >
            {typeList}
          </Select>
          <Select
            label="Category"
            className="expense-select"
            variant="standard"
            color="deep-purple"
            value={category}
            style={{ borderBottom: "1px solid" }}
            onChange={handleCategoryChange}
          >
            {categoryList}
          </Select>
          <Select
            label="Wallet"
            class="expense-select"
            variant="standard"
            color="deep-purple"
            value={wallet}
            style={{ borderBottom: "1px solid" }}
            onChange={handleWalletChange}
          >
            {walletList}
          </Select>

          <Button
            className="mx-auto px-4 py-3 btn-submit"
            style={{ fontSize: "0.85rem", textTransform: "capitalize" }}
            onClick={() => onHandleAdd()}
          >
            Add new transaction
          </Button>
        </DialogBody>
      </Dialog>
    </div>
  );
};

export default InputField;
