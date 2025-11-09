import { useGlobalContext } from "../Context/GlobalContext";
import useForm from "../Hooks/useForm";

const Transactions = () => {
  const { dispatch } = useGlobalContext();
  const { formData, handleChange, resetForm } = useForm({
    date: "",
    type: "income",
    amount: 0,
  });

  const addTransaction = () => {
    if (!formData.date || !formData.type || !formData.amount) {
      alert("Please fill all the fields");
      return;
    }
    dispatch({
      type: "ADD_TRANSACTION",
      payload: {
        date: formData.date,
        type: formData.type,
        amount: Number(formData.amount),
      },
    });

    resetForm();
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
          value={formData.date}
          required
          name="date"
          onChange={(e) => handleChange(e)}
        />
        <select
          value={formData.type}
          onChange={(e) => handleChange(e)}
          name="type"
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <input
          type="number"
          placeholder="Amount"
          value={formData.amount}
          min={0}
          name="amount"
          onChange={(e) => handleChange(e)}
          max={1000000}
          required
        />
      </div>
      <br />
      <button
        disabled={!formData.date || !formData.type || !formData.amount}
        onClick={addTransaction}
      >
        Add Transaction
      </button>
    </div>
  );
};

export default Transactions;
