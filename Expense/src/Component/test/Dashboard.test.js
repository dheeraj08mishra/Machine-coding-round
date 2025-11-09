import Dashboard from "../Dashboard";
import { render, screen } from "@testing-library/react";

test("Dashboard displays correct income and expense", () => {
  const income = 5000;
  const expense = 2000;
  render(<Dashboard income={income} expense={expense} />);

  const balanceElement = screen.getByText(/Total Balance: ₹3000/i);
  const incomeElement = screen.getByText(/Income: ₹5000/i);
  const expenseElement = screen.getByText(/Expense: ₹2000/i);

  expect(balanceElement).toBeInTheDocument();
  expect(incomeElement).toBeInTheDocument();
  expect(expenseElement).toBeInTheDocument();
});
