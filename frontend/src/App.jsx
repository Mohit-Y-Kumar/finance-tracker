import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddTransaction from "./pages/AddTransaction";
import EditTransaction from "./pages/EditTransaction";
import DeleteTransaction from "./pages/DeleteTransaction";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddTransaction />} />
        <Route path="/:id/edit" element={<EditTransaction />} />
        <Route path="/:id/delete" element={<DeleteTransaction />} />
      </Routes>
    </Router>
  );
}

export default App;
