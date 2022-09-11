import React, { useState } from "react";
import InputField from "../../components/InputField";
import ExpenseTabs from "../../components/ExpenseTabs";
import { Button, IconButton } from "@material-tailwind/react";
/* style */
import "../HomePage/HomePage.scss";

const HomePage = (props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = (value) => setOpen(value);

  // handle expense tabs open state
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabIndex = (id) => {
    setActiveTabIndex(id);
  }
  const onHandleUpdateTab = value => setActiveTabIndex(value)
  return (
    <>
      <div className="container mx-auto page-container py-8 px-4 md:py-20 md:px-8">
        <ExpenseTabs activeTabIndex={activeTabIndex} handleTabIndex={handleTabIndex} />
      </div>
      <InputField open={open} handleOpen={handleOpen} onHandleUpdateTab={onHandleUpdateTab} />
    </>
  );
};

export default HomePage;
