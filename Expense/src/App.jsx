import { useState, useEffect } from "react";
import "./App.css";
import Dashboard from "./Component/Dashboard";
import Transactions from "./Component/Transactions";
import TransactionLists from "./Component/TransactionLists";

function App() {
  const [txns, setTxns] = useState([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  useEffect(() => {
    const storedTxns = JSON.parse(localStorage.getItem("txns"));
    if (storedTxns) {
      setTxns(storedTxns);
    }
  }, []);
  useEffect(() => {
    console.log("Txns updated:", txns);
    let income = 0,
      expense = 0;
    txns.forEach((txn) => {
      if (txn.type === "income") {
        income += Number(txn.amount);
      } else {
        expense += Number(txn.amount);
      }
    });
    setIncome(income);
    setExpense(expense);
    localStorage.setItem("txns", JSON.stringify(txns));
  }, [txns]);

  return (
    <>
      <h1>Expense Tracker</h1>
      <Dashboard income={income} expense={expense} />
      <Transactions setTxns={setTxns} />
      <TransactionLists txns={txns} />
    </>
  );
}

export default App;
