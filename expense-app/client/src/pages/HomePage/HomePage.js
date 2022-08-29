import React, { useState } from "react";
import InputField from "../../components/InputField";
<<<<<<< HEAD
import ExpenseTabs from "../../components/ExpenseTabs";
=======
import ExpensiveTabs from "../../components/ExpensiveTabs";
>>>>>>> origin/expense-app
import { Button, IconButton } from "@material-tailwind/react";
/* style */
import "../HomePage/HomePage.scss";

const HomePage = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <>
<<<<<<< HEAD
      <div className="container mx-auto page-container py-20 px-4 md:py-40 md:px-8">
        <ExpenseTabs />
=======
      <div className="container mx-auto page-container py-20 px-4 md:py-40 md:px-8">       
        <ExpensiveTabs />
>>>>>>> origin/expense-app
      </div>
      <InputField open={open} handleOpen={handleOpen} />
    </>
  );
};

export default HomePage;
