import { createContext, useReducer } from "react";
import Cookies from "js-cookie";

export const Store = createContext();
const initialState = {
  logged_in: Cookies.get("logged_in") === "true",
};

function reducer(state, action) {
  switch (action.type) {
    case "LOG_IN":
      return { ...state, logged_in: true };
    case "LOG_OUT":
      return { ...state, logged_in: false };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
