import React, {useState} from "react";
import ItemLinks from "./ItemLinks";
import { IconButton } from "@material-tailwind/react";
import InputField from "../InputField";
import "./Header.scss";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <>
    <div className="w-full mx-auto nav-container px-8 py-8 items-center fixed">
      <div className="flex flex-row flex-wrap items-center">
        {/* Nav */}
        <nav className="w-full sm:4/5 md:w-4/5">
          <ul className="nav-container_list flex flex-row flex-wrap">
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
        </nav>
        <div className="nav-container_logo w-full md:w-1/5 flex flex-wrap">
          <h3 style={{ color: "#00bcd4" }}>Balance</h3>         
          <IconButton
          className="btn-add-expensive"
          ripple={true}
          size="lg"
          onClick={handleOpen}
        >
          <span>+</span>
        </IconButton> 
        </div>
        
      </div>      
      <InputField open={open} handleOpen={handleOpen} />
    </div>   
    </>    
  );
};

export default Header;
