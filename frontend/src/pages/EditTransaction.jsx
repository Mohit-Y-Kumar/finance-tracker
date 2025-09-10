import { useParams } from "react-router-dom";
import TransactionForm from "../components/TransactionForm";

const EditTransaction = () => {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">✏️ Edit Transaction</h2>
      <TransactionForm transactionId={id} />
    </div>
  );
};

export default EditTransaction;
