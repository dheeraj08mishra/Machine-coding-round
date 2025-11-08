import React from "react";

import Dashboard from "../Component/Dashboard";
import Transactions from "../Component/Transactions";
import TransactionLists from "../Component/TransactionLists";
import { useGlobalContext } from "../Context/GlobalContext";

const Home = () => {
  const { state } = useGlobalContext();
  return (
    <div>
      <h1>Expense Tracker</h1>
      <Dashboard income={state.income} expense={state.expense} />
      <Transactions />
      <TransactionLists />
    </div>
  );
};

export default Home;
