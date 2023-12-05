import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.js/HomePage";
import AddTodo from "./pages/AddTodo.js/AddTodo";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="todo" element={<AddTodo />} />
      </Route>
    </Routes>
  );
};

export default App;
