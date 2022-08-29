<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { useExpenseContext } from "../../contexts/ExpenseContext";
=======
import React, { useState } from "react";
/* import { useWalletContext } from "../../contexts/WalletContext";
import { useCategoryContext } from "../../contexts/CategoryContext"; */
import {useExpenseContext} from "../../contexts/ExpenseContext";
>>>>>>> origin/expense-app
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
<<<<<<< HEAD
  const { wallets, categories, expenseType, onAddNewTransaction } =
    useExpenseContext();
  const [category, setCategory] = useState("");
  const [wallet, setWallet] = useState("");
  const [type, setType] = useState("");

  const [transaction, setTransaction] = useState({
    date: "",
    amount: "",
    description: "",
    category: "",
    wallet: "",
    type: "",
  });

  const handleInputChange = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    console.log({ name, value });
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
=======
  const {expenseType} = useExpenseContext();
  const {wallets, categories} = useExpenseContext();
  // const { wallets } = useWalletContext();
  // console.log(wallets);
  // const { categories } = useCategoryContext();
  // /console.log(categories);

  const handleInputChange = (e) => {
    console.log(e.target.value);
  };

  const handleSelectChange = (value) => {
    console.log(value);
>>>>>>> origin/expense-app
  };

  const categoryList = categories.map((elm, idx) => {
    return (
      <Option value={elm} key={idx}>
        {elm}
      </Option>
    );
  });

<<<<<<< HEAD
  const resetForm = () => {
    setCategory("");
    setWallet("");
    setType("");
    setTransaction({
      date: "",
      amount: "",
      description: "",
      category: "",
      wallet: "",
      type: "",
    });
  };

  const onHandleAdd = () => {
    // console.log(transaction);
    onAddNewTransaction(transaction);
    resetForm();
  };

=======
>>>>>>> origin/expense-app
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
<<<<<<< HEAD
    <div className={`flex flex-col gap-6 md:gap-8 mx-auto animate__animated`}>
=======
    <div
      className={`flex flex-col gap-6 md:gap-8 mx-auto animate__animated`}
    >
>>>>>>> origin/expense-app
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
<<<<<<< HEAD
            name="date"
            type="date"
            className="expense-input"
            color="deep-purple"
            size="lg"
            variant="standard"
            value={transaction.date}
=======
            type="date"
            className="expensive-input"
            color="cyan"
            size="lg"
            variant="standard"
>>>>>>> origin/expense-app
            onChange={handleInputChange}
          />
          <Input
            key="amount"
            label="Amount"
<<<<<<< HEAD
            name="amount"
            type="text"
            className="expense-input"
            color="deep-purple"
            size="lg"
            variant="standard"
            value={transaction.amount}
=======
            type="text"
            className="expensive-input"
            color="cyan"
            size="lg"
            variant="standard"
>>>>>>> origin/expense-app
            onChange={handleInputChange}
          />
          <Input
            key="description"
            label="Description"
<<<<<<< HEAD
            name="description"
            type="text"
            color="deep-purple"
            size="lg"
            className="expense-input"
            variant="standard"
            value={transaction.description}
=======
            type="text"
            color="cyan"
            size="lg"
            className="expensive-input"
            variant="standard"
>>>>>>> origin/expense-app
            onChange={handleInputChange}
          />
          <Select
            label="Category"
<<<<<<< HEAD
            className="expense-select"
            variant="standard"
            color="deep-purple"
            // value={transaction.category}
            value={category}
            style={{ borderBottom: "1px solid" }}
            onChange={handleCategoryChange}
=======
            className="expensive-select"
            variant="standard"
            color="cyan"
            style={{ borderBottom: "1px solid" }}
            onChange={handleSelectChange}
>>>>>>> origin/expense-app
          >
            {categoryList}
          </Select>
          <Select
            label="Wallet"
<<<<<<< HEAD
            class="expense-select"
            variant="standard"
            color="deep-purple"
            value={wallet}
            style={{ borderBottom: "1px solid" }}
            onChange={handleWalletChange}
=======
            className="expensive-select"
            variant="standard"
            color="cyan"
            style={{ borderBottom: "1px solid" }}
            onChange={handleSelectChange}
>>>>>>> origin/expense-app
          >
            {walletList}
          </Select>
          <Select
            label="Type"
<<<<<<< HEAD
            className="expense-select"
            variant="standard"
            color="deep-purple"
            value={type}
            style={{ borderBottom: "1px solid" }}
            onChange={handleTypeChange}
          >
            {typeList}
          </Select>
          <Button
            className="mx-auto px-4 py-3 btn-submit"
            style={{ fontSize: "0.85rem", textTransform: "capitalize" }}
            onClick={() => onHandleAdd()}
          >
=======
            className="expensive-select"
            variant="standard"
            color="cyan"
            style={{ borderBottom: "1px solid" }}
            onChange={handleSelectChange}
          >
            {typeList}
          </Select>
          <Button className="mx-auto px-4 py-3 btn-submit" style={{fontSize:"0.85rem",textTransform:"capitalize"}}>
>>>>>>> origin/expense-app
            Add new transaction
          </Button>
        </DialogBody>
      </Dialog>
    </div>
  );
};

export default InputField;
