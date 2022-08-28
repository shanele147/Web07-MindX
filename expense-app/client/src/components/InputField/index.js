import React, { useState } from "react";
/* import { useWalletContext } from "../../contexts/WalletContext";
import { useCategoryContext } from "../../contexts/CategoryContext"; */
import {useExpenseContext} from "../../contexts/ExpenseContext";
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
    <div
      className={`flex flex-col gap-6 md:gap-8 mx-auto animate__animated`}
    >
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
            type="date"
            className="expensive-input"
            color="cyan"
            size="lg"
            variant="standard"
            onChange={handleInputChange}
          />
          <Input
            key="amount"
            label="Amount"
            type="text"
            className="expensive-input"
            color="cyan"
            size="lg"
            variant="standard"
            onChange={handleInputChange}
          />
          <Input
            key="description"
            label="Description"
            type="text"
            color="cyan"
            size="lg"
            className="expensive-input"
            variant="standard"
            onChange={handleInputChange}
          />
          <Select
            label="Category"
            className="expensive-select"
            variant="standard"
            color="cyan"
            style={{ borderBottom: "1px solid" }}
            onChange={handleSelectChange}
          >
            {categoryList}
          </Select>
          <Select
            label="Wallet"
            className="expensive-select"
            variant="standard"
            color="cyan"
            style={{ borderBottom: "1px solid" }}
            onChange={handleSelectChange}
          >
            {walletList}
          </Select>
          <Select
            label="Type"
            className="expensive-select"
            variant="standard"
            color="cyan"
            style={{ borderBottom: "1px solid" }}
            onChange={handleSelectChange}
          >
            {typeList}
          </Select>
          <Button className="mx-auto px-4 py-3 btn-submit" style={{fontSize:"0.85rem",textTransform:"capitalize"}}>
            Add new transaction
          </Button>
        </DialogBody>
      </Dialog>
    </div>
  );
};

export default InputField;
