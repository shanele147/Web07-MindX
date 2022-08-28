import React, { createContext, useContext } from "react";

export const CategoryContext = createContext();

// Custom hooks
export const useCategoryContext = () => {
  const categoryCtx = useContext(CategoryContext);
  return categoryCtx;
};
