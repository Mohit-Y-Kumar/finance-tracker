import { Link } from "react-router-dom";

const TransactionList = ({ transactions }) => {
  return (
    <div className="mt-4">
      <table className="table-auto w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t._id} className="text-center border">
              <td>{t.title}</td>
              <td className={t.amount > 0 ? "text-green-600" : "text-red-600"}>
                {t.amount}
              </td>
              <td>{new Date(t.date).toLocaleDateString()}</td>
              <td>{t.category}</td>
              <td>
                <Link to={`/${t._id}/edit`} className="text-blue-500 mr-2">Edit</Link>
                <Link to={`/${t._id}/delete`} className="text-red-500">Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
