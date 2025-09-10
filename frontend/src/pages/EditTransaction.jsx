import { useParams } from "react-router-dom";
import TransactionForm from "../components/TransactionForm";
import { Pencil } from "lucide-react";


const EditTransaction = () => {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-800 mb-6 flex items-center justify-center gap-2">
  <Pencil className="w-6 h-6 text-blue-500" />
  Edit Transaction
</h2>

      <TransactionForm transactionId={id} />
    </div>
  );
};

export default EditTransaction;
