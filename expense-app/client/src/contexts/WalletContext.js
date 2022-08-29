import React, { createContext, useContext } from "react";

export const WalletContext = createContext();

// Custom hooks
export const useWalletContext = () => {
  const walletCtx = useContext(WalletContext);
  return walletCtx;
};
