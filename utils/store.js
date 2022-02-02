import { createContext, useReducer } from "react";
import Cookies from "js-cookie";

export const Store = createContext();
const initialState = {
  logged_in: Cookies.get("logged_in") === "true",
  checkout: {
    checkoutItems: Cookies.get("checkoutItems")
      ? JSON.parse(Cookies.get("checkoutItems"))
      : [],
  },
};

function reducer(app_state, action) {
  switch (action.type) {
    case "LOG_IN":
      return { ...app_state, logged_in: true };
    case "LOG_OUT":
      return { ...app_state, logged_in: false };
    case "ADD_TO_CHECKOUT_NORMAL": {
      const newItem = action.payload;
      //check if item already exist in checkout
      const existItem = app_state.checkout.checkoutItems.find(
        (item) =>
          item.name === newItem.name &&
          item.edition === newItem.edition &&
          item.license === newItem.license
      );
      const checkoutItems = existItem
        ? app_state.checkout.checkoutItems.map((item) =>
            item.name === existItem.name
              ? { ...newItem, quantity: item.quantity + 1 }
              : item
          )
        : [...app_state.checkout.checkoutItems, newItem];
      Cookies.set("checkoutItems", JSON.stringify(checkoutItems));
      return {
        ...app_state,
        checkout: { ...app_state.checkout, checkoutItems },
      };
    }
    default:
      return app_state;
  }
}

export function StoreProvider(props) {
  const [app_state, dispatch] = useReducer(reducer, initialState);
  const value = { app_state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
