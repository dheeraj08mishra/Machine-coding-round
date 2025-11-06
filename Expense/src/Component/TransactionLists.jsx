import { useGlobalContext } from "../Context/GlobalContext";
const TransactionLists = () => {
  const { state, dispatch } = useGlobalContext();
  const { txns } = state;

  const deleteTxn = (index) => {
    console.log("Delete functionality to be implemented");
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: index,
    });
  };

  return (
    <div>
      <h2>Transaction List</h2>
      {txns.length === 0 ? (
        <p>No transactions available. Please add some transactions.</p>
      ) : (
        <ul>
          {txns.map((transaction, index) => (
            <li
              key={index}
              style={{ color: transaction.type === "income" ? "green" : "red" }}
            >
              {transaction.date} - {transaction.type} - ₹{transaction.amount}
              <button
                onClick={() => deleteTxn(index)}
                style={{ marginLeft: "10px" }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransactionLists;
