import { Routes, Route } from "react-router-dom";
import "./App.css";
import Todo from "./Page/Todo";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Todo />} />
    </Routes>
  );
}

export default App;
