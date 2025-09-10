import { DeleteIcon, EditIcon } from "lucide-react";
import { Link } from "react-router-dom";

const TransactionList = ({ transactions }) => {
  return (
    <div className="mt-6 overflow-x-auto">
      {/* Desktop Table */}
      <table className="hidden md:table table-auto w-full border rounded-lg shadow-sm overflow-hidden">
        <thead>
          <tr className="bg-gray-100 text-gray-700 text-sm">
            <th className="px-4 py-3 text-left">Title</th>
            <th className="px-4 py-3 text-left">Amount</th>
            <th className="px-4 py-3 text-left">Date</th>
            <th className="px-4 py-3 text-left">Category</th>
            <th className="px-4 py-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {transactions.map((t) => (
            <tr key={t._id} className="hover:bg-gray-50 text-sm">
              <td className="px-4 py-3 font-medium">{t.title}</td>
              <td
                className={`px-4 py-3 font-semibold ${
                  t.amount > 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {t.amount}
              </td>
              <td className="px-4 py-3">{new Date(t.date).toLocaleDateString()}</td>
              <td className="px-4 py-3">{t.category}</td>
              <td className="px-4 py-3 flex justify-center gap-3">
                <Link
                  to={`/${t._id}/edit`}
                  className="p-2 rounded-md bg-blue-100 text-blue-600 hover:bg-blue-200"
                >
                  <EditIcon className="w-4 h-4" />
                </Link>
                <Link
                  to={`/${t._id}/delete`}
                  className="p-2 rounded-md bg-red-100 text-red-600 hover:bg-red-200"
                >
                  <DeleteIcon className="w-4 h-4" />
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
            className="p-4 border rounded-lg shadow-sm bg-white flex flex-col gap-2"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-gray-800">{t.title}</h3>
              <span
                className={`text-sm font-bold ${
                  t.amount > 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {t.amount}
              </span>
            </div>
            <p className="text-gray-600 text-sm">
              {new Date(t.date).toLocaleDateString()}
            </p>
            <p className="text-gray-500 text-xs">Category: {t.category}</p>
            <div className="flex gap-3 mt-2">
              <Link
                to={`/${t._id}/edit`}
                className="flex items-center gap-1 text-blue-600 bg-blue-100 px-3 py-1 rounded-md text-sm hover:bg-blue-200"
              >
                <EditIcon className="w-4 h-4" /> Edit
              </Link>
              <Link
                to={`/${t._id}/delete`}
                className="flex items-center gap-1 text-red-600 bg-red-100 px-3 py-1 rounded-md text-sm hover:bg-red-200"
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
