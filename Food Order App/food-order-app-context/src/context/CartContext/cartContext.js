import { createContext, useContext } from "react";

// create context for application
export const CartContext = createContext();

// Building Custom Hooks - because we will use this structure for many components in app
export const useCartContext = () => {
    const cartCtx = useContext(CartContext);

    return cartCtx;
};