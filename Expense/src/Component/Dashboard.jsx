import React from "react";

const Dashboard = ({ income, expense }) => {
  console.log("Dashboard Rendered");
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Total Balance: ₹{income - expense}</h2>
      <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
        <h3> Income: ₹{income}</h3>
        <h3> Expense: ₹{expense}</h3>
      </div>
    </div>
  );
};

export default Dashboard;
