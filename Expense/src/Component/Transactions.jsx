import React, { useState } from "react";
import { useGlobalContext } from "../Context/GlobalContext";

const Transactions = () => {
  const [date, setDate] = useState("");
  const [type, setType] = useState("income");
  const [amount, setAmount] = useState(0);
  const { dispatch } = useGlobalContext();

  const addTransaction = () => {
    if (!date || !type || !amount) {
      alert("Please fill all the fields");
      return;
    }
    dispatch({
      type: "ADD_TRANSACTION",
      payload: { date, type, amount: Number(amount) },
    });
    setDate("");
    setType("income");
    setAmount(0);
  };

  return (
    <div>
      <h1>Transactions</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <input
          type="date"
          value={date}
          required
          onChange={(e) => setDate(e.target.value)}
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          min={0}
          onChange={(e) => setAmount(e.target.value)}
          max={1000000}
          required
        />
      </div>
      <br />
      <button disabled={!date || !type || !amount} onClick={addTransaction}>
        Add Transaction
      </button>
    </div>
  );
};

export default Transactions;
