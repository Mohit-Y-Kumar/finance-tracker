import TransactionForm from "../components/TransactionForm";
import { PlusCircle } from "lucide-react";

const AddTransaction = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6 relative overflow-hidden flex flex-col items-center justify-start">
      {/* Floating abstract shapes */}
      <div className="absolute top-[-80px] left-[-60px] w-72 h-72 bg-purple-200 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-[-100px] right-[-50px] w-96 h-96 bg-pink-200 rounded-full opacity-20 animate-pulse"></div>

      {/* Header */}
      <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 flex items-center gap-2 text-gray-600 relative z-10">
        <PlusCircle className="w-6 h-6 text-green-500" />
        Add New Transaction
      </h2>

      {/* Form */}
      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-6 sm:p-10 relative z-10">
        <TransactionForm />
      </div>
    </div>
  );
};

export default AddTransaction;
