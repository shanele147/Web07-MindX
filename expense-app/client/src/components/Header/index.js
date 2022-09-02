import React, { useState, useEffect } from "react";
import ItemLinks from "./ItemLinks";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { useExpenseContext } from "../../contexts/ExpenseContext";
import expenseAppService from "../../services";
import InputField from "../InputField";
import "./Header.scss";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const { expenseType, transactionList } = useExpenseContext();

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <ItemLinks url="">
        <h3>Home</h3>
      </ItemLinks>
      <ItemLinks url="categories">
        <h3>Categories</h3>
      </ItemLinks>
      <ItemLinks url="transactions">
        <h3>Transactions</h3>
      </ItemLinks>
      <ItemLinks url="wallet">
        <h3>Wallet</h3>
      </ItemLinks>
      <ItemLinks url="logout">
        <h3>Logout</h3>
      </ItemLinks>
    </ul>
  );

  return (
    <Navbar
      className="mx-auto py-2 px-4 lg:px-8 lg:py-4 nav-container"
      color="indigo"
      shadow="true"
      fullWidth="true"
    >
      <div className="container mx-auto flex items-center justify-between ">
        <div className="hidden lg:block">{navList}</div>
        <div className="hidden nav-container_logo w-full md:w-1/5 lg:flex lg:justify-center">
          <h3>Balance</h3>
          <IconButton
            className="btn-add-expense"
            ripple={true}
            size="lg"
            onClick={handleOpen}
          >
            <span>+</span>
          </IconButton>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav
        open={openNav}
        className="flex items-baseline justify-between mobile-nav"
      >
        {navList}
        <div className="nav-container_logo md:w-1/5 flex-col md:flex-row flex-wrap md:justify-end">
          <h3>Balance</h3>
          <IconButton
            className="btn-add-expense"
            ripple={true}
            size="lg"
            onClick={handleOpen}
          >
            <span>+</span>
          </IconButton>
        </div>
      </MobileNav>
      <InputField open={open} handleOpen={handleOpen} />
    </Navbar>
  );
};

export default Header;
