import { useParams, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AlertTriangle, XCircle, Trash2, Loader2 } from "lucide-react";
import { AuthContext } from "../context/AuthContext"; 
const DeleteTransaction = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isDeleting, setIsDeleting] = useState(false);
  const { token } = useContext(AuthContext); 
  const handleDelete = () => {
    if (!token) {
      alert("You are not authorized. Please log in first.");
      return;
    }

    setIsDeleting(true);
    fetch(`http://localhost:5000/api/transactions/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, 
      },
    }).then((res) => {
      if (!res.ok) throw new Error("Failed to delete transaction");
      return res.json();
    })
      .then(() => navigate("/"))
      .catch((err) => {
        console.error(err);
        alert("Error deleting transaction");
        setIsDeleting(false); 
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-red-100 to-pink-50 p-6 relative overflow-hidden flex justify-center items-center">
      {/* Floating abstract shapes */}
      <div className="absolute top-[-80px] left-[-60px] w-72 h-72 bg-pink-200 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-[-100px] right-[-50px] w-96 h-96 bg-red-200 rounded-full opacity-20 animate-pulse"></div>

      {/* Delete Confirmation Card */}
      <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-6 sm:p-10 text-center relative z-10">
        {!isDeleting ? (
          <>
            <div className="flex justify-center mb-4">
              <AlertTriangle className="w-12 h-12 text-red-500" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-4 flex justify-center items-center gap-2">
              Confirm Delete
            </h2>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Are you sure you want to delete this transaction? <br />
              This action{" "}
              <span className="font-semibold text-red-500">cannot be undone</span>.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <button
                onClick={() => navigate("/")}
                 disabled={isDeleting}
                className="flex items-center gap-2 px-6 py-2 rounded-lg bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 transition"
              >
                <XCircle className="w-5 h-5" />
                Cancel
              </button>
              <button
                onClick={handleDelete}
                disabled={isDeleting}
                className="flex items-center gap-2 px-6 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition"
              >
                <Trash2 className="w-5 h-5" />
                Delete
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center">
            <Loader2 className="w-10 h-10 text-red-500 animate-spin mb-4" />
            <p className="text-red-600 font-semibold">Deleting transaction...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeleteTransaction;
