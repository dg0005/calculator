import { Route, Routes } from "react-router-dom";
import "./App.css";
import History from "./Pages/History";
import Home from "./Pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
};

export default App;
