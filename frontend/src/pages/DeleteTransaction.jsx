import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const DeleteTransaction = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/api/transactions/${id}`, {
      method: "DELETE",
    }).then(() => navigate("/"));
  }, [id, navigate]);

  return <p className="p-6">Deleting transaction...</p>;
};

export default DeleteTransaction;
