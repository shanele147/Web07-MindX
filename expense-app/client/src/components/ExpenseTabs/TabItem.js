import React from "react";
import expenseAppService from "../../services";
import { MdDeleteForever } from "react-icons/md";

const TabItem = (props) => {
  const { transaction, id } = props;
  const { amount, category, description, type } = transaction;
  return (
    <ul
      key={id}
      className="w-full justify-between px-2 py-2 flex flex-wrap transition-row "
    >
      <li key={`list-item${id}`}>
        <p
          className={`category ${expenseAppService.textToLowerCase(
            type
          )}-${expenseAppService.textToLowerCase(category)} text-sm md:text-lg`}
        >
          {category}
        </p>
        <p className="description text-xs md:text-sm">{description}</p>
      </li>
      <li className="max-w-full md:w-1/5 flex flex-wrap justify-between">
        <p className="amount text-base md:text-lg">
          {expenseAppService.convertCurrency(amount, "USD")}
        </p>
        <MdDeleteForever className="text-xl md:text-2xl" />
      </li>
    </ul>
  );
};
export default TabItem;