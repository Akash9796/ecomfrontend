import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Component/Header/Header";
import "./App.css";
import Login from "./Component/Header/Login/Login";
function App() {
  return (
    <Router>
      <div >
        <Header />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/account" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
