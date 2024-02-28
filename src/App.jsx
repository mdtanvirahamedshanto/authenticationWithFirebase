import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/page/Home";
import Login from "./components/page/Login";
import Register from "./components/page/Register";
import Reset from "./components/page/Reset";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset" element={<Reset />} />
        </Routes>
      </div>
    </Router>
  );
}
