import "./App.css";
import Dashboard from "./Component/Dashboard";
import Transactions from "./Component/Transactions";
import TransactionLists from "./Component/TransactionLists";
import { useGlobalContext } from "./Context/GlobalContext";

function App() {
  const { state } = useGlobalContext();
  return (
    <>
      <h1>Expense Tracker</h1>
      <Dashboard income={state.income} expense={state.expense} />
      <Transactions />
      <TransactionLists />
    </>
  );
}

export default App;
