import { createContext, useContext, useReducer } from "react";

const GlobalContext = createContext();

const initialState = {
  txns: [],
  income: 0,
  expense: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TRANSACTION":
      const newTxns = [...state.txns, action.payload];
      const income = newTxns
        .filter((txn) => txn.type === "income")
        .reduce((acc, txn) => acc + Number(txn.amount), 0);
      const expense = newTxns
        .filter((txn) => txn.type === "expense")
        .reduce((acc, txn) => acc + Number(txn.amount), 0);
      return { ...state, txns: newTxns, income, expense };

    case "DELETE_TRANSACTION":
      const filteredTxns = state.txns.filter(
        (txn, index) => index !== action.payload
      );
      const updatedIncome = filteredTxns
        .filter((txn) => txn.type === "income")
        .reduce((acc, txn) => acc + Number(txn.amount), 0);
      const updatedExpense = filteredTxns
        .filter((txn) => txn.type === "expense")
        .reduce((acc, txn) => acc + Number(txn.amount), 0);
      return {
        ...state,
        txns: filteredTxns,
        income: updatedIncome,
        expense: updatedExpense,
      };
    default:
      return state;
  }
}

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
