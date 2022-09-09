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
import CustomSelect from "../CustomSelect/index.js";
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
  const [isDateValid, setDateValidity] = useState(true);
  const [isAmountValid, setAmountValidity] = useState(true);

  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [wallet, setWallet] = useState("");
  const [categories, setCategories] = useState([]);
  const [transaction, setTransaction] = useState({
    date: "",
    amount: "",
    description: "",
    type,
    category,
    wallet,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTransaction({ ...transaction, [name]: value });
  };

  const handleWalletChange = (value) => {
    transaction.wallet = value;
    setTransaction({ ...transaction, ["wallet"]: value });
  };

  const handleCategoryChange = (value) => {
    transaction.category = value;
    setTransaction({ ...transaction, ["category"]: value });
  };

  const handleTypeChange = (value) => {
    transaction.type = value;
    setTransaction({ ...transaction, ["type"]: value });
    transaction.type === "Income"
      ? setCategories(incomeCategories)
      : setCategories(expenseCategories);

    if (categories.indexOf(category) === -1) {
      setCategory(categories[0]);
    }
  };

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

  console.log(transaction.amount ? transaction.amount : null);
  const formValidate = () => {
    if (transaction.date && transaction.amount) {
      setDateValidity(true);
      setAmountValidity(true);
      return true;
    }
    setDateValidity(false);
    setAmountValidity(false);
    return false;
  };

  const onHandleAdd = (e) => {
    e.preventDefault();
    onAddNewTransaction(transaction);
    resetForm();
  };

  const categoryList = categories.map((elm, idx) => {
    return (
      <Option value={elm} key={idx}>
        {elm}
      </Option>
    );
  });

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
        className="tw-dialog overflow-visible"
        size="lg"
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        style={{ backgroundColor: "transparent" }}
      >
        <DialogBody>
          <form
            onSubmit={onHandleAdd}
            className={`form-container w-full flex flex-col gap-6 md:gap-8 mx-auto animate__animated py-4 md:py-12 px-6`}
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
              required="true"
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
              required="true"
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
              required="true"
              value={transaction.description}
              onChange={handleInputChange}
            />
            <Select
              label="Type"
              className="expense-select"
              variant="standard"
              color="deep-purple"
              value={transaction.type}
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
              style={{ borderBottom: "1px solid" }}
              value={category}
              onChange={handleCategoryChange}
            >
              {categoryList}
            </Select>
            <Select
              label="Wallet"
              className="expense-select"
              variant="standard"
              color="deep-purple"
              style={{ borderBottom: "1px solid" }}
              value={transaction.wallet}
              onChange={handleWalletChange}
            >
              {walletList}
            </Select>

            <Button
              className="mx-auto px-4 py-3 btn-submit"
              type="submit"
              disabled={isDateValid && isAmountValid ? false : true}
              style={{ fontSize: "0.85rem", textTransform: "capitalize" }}
            >
              Add new transaction
            </Button>
          </form>
        </DialogBody>
      </Dialog>
    </div>
  );
};

export default InputField;
