import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Navbar from "./pages/shared/Navbar/Navbar";
import Footer from "./pages/shared/Footer/Footer";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import RequireAuth from "./pages/Login/RequireAuth/RequireAuth";
import Blog from "./pages/Blog/Blog";
import ResetPassword from "./pages/Login/ResetPassword/ResetPassword";
import AddReview from "./pages/AddReview/AddReview";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import MyProfile from "./pages/Dashboard/MyProfile/MyProfile";
import Purchase from "./pages/Purchase/Purchase";
import MyOrders from "./pages/Dashboard/MyOrders/MyOrders";
import AllOrders from "./pages/Dashboard/AllOrders/AllOrders";
import AddProduct from "./pages/Dashboard/AddProduct/AddProduct";
import ManageProducts from "./pages/Dashboard/ManageProducts/ManageProducts";
import RequireAdmin from "./pages/Login/RequireAuth/RequireAdmin";
import Users from "./pages/Dashboard/Users/Users";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="App container">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="blog" element={<Blog></Blog>}></Route>
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="addReview" element={<AddReview></AddReview>}></Route>
          <Route path="myOrders" element={<MyOrders></MyOrders>}></Route>
          <Route
            path="orders"
            element={
              <RequireAdmin>
                <AllOrders></AllOrders>
              </RequireAdmin>
            }
          ></Route>
          <Route path="addProduct" element={<AddProduct></AddProduct>}></Route>
          <Route
            path="manageProducts"
            element={<ManageProducts></ManageProducts>}
          ></Route>
          <Route
            path="users"
            element={
              <RequireAdmin>
                <Users></Users>
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route
          path="purchase/:id"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="register" element={<Register></Register>}></Route>
        <Route
          path="/resetPassword"
          element={<ResetPassword></ResetPassword>}
        ></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
