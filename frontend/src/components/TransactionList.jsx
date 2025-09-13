import { DeleteIcon, EditIcon } from "lucide-react";
import { Link } from "react-router-dom";

const TransactionList = ({ transactions,  onDelete }) => {
 
  
  
  return (
    <div className="mt-1 overflow-x-auto relative z-10">
      {/* Desktop Table */}
      <table className="hidden md:table table-auto w-full rounded-xl shadow-lg overflow-hidden">
        <thead>
          <tr className="bg-indigo-200 text-gray-700 text-sm">
            <th className="px-4 py-3 text-left font-extrabold text-gray-900">Title</th>
            <th className="px-4 py-3 text-left font-extrabold text-gray-900">Amount</th>
            <th className="px-4 py-3 text-left font-extrabold text-gray-900">Date</th>
            <th className="px-4 py-3 text-left font-extrabold text-gray-900">Category</th>
            <th className="px-4 py-3 text-center font-extrabold text-gray-900">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y bg-white">
          {transactions.map((t) => (
            <tr key={t._id} className="hover:bg-indigo-50 transition-colors text-sm">
              <td className="px-4 py-3  font-bold">{t.title}</td>
              <td
                className={`px-4 py-3 font-medium ${
                  t.amount > 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                ₹{t.amount}
              </td>
              <td className="px-4 py-3 font-bold">
                {new Date(t.date).toLocaleDateString()}
              </td>
              <td className="px-4 py-3 font-bold">{t.category}</td>
              <td className="px-4 py-3 flex justify-center gap-3">
                <Link
                  to={`/${t._id}/edit`}
                  className="p-2 rounded-full flex bg-blue-100 text-blue-900 hover:bg-blue-200 shadow-md transition transform hover:scale-110"
                >
                  <EditIcon className="w-4 h-4" />Edit
                </Link>
                <Link
                to={`/${t._id}/delete`}
                className="flex items-center gap-1 text-red-600 bg-red-100 px-3 py-1 rounded-full text-sm hover:bg-red-200 shadow-md transition transform hover:scale-105"
              >
                <DeleteIcon className="w-4 h-4" /> Delete
              </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile Cards */}
      <div className="grid gap-4 md:hidden">
        {transactions.map((t) => (
          <div
            key={t._id}
            className="p-4 rounded-xl shadow-lg bg-white flex flex-col gap-2 hover:shadow-2xl transition transform hover:scale-105"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-gray-800">{t.title}</h3>
              <span
                className={`text-sm font-bold ${
                  t.amount > 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                ₹ {t.amount}
              </span>
            </div>
            <p className="text-gray-600 text-sm">
              {new Date(t.date).toLocaleDateString()}
            </p>
            <span className="self-start px-2 py-1 bg-indigo-100 text-indigo-600 rounded-full text-xs font-medium">
              {t.category}
            </span>
            <div className="flex gap-3 mt-2">
              <Link
                to={`/${t._id}/edit`}
                className="flex items-center gap-1 text-blue-600 bg-blue-100 px-3 py-1 rounded-full text-sm hover:bg-blue-200 shadow-md transition transform hover:scale-105"
              >
                <EditIcon className="w-4 h-4" /> Edit
              </Link>
               <Link
                to={`/${t._id}/delete`}
                className="flex items-center gap-1 text-red-600 bg-red-100 px-3 py-1 rounded-full text-sm hover:bg-red-200 shadow-md transition transform hover:scale-105"
              >
                <DeleteIcon className="w-4 h-4" /> Delete
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionList;
