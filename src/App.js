import logo from "./logo.svg";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
