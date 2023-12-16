import "./App.css";
import HeaderFooter from "./Components/HeaderFooter";
import AllProducts from "./Components/AllProducts";
import logo from "./assets/icon.png";
import NewLogin from "./Components/NewLogin";
import SingleProduct from "./Components/SingleProduct";
import AboutUs from "./Components/AboutUs";
import NotFound from "./Components/NotFound";
import LandingPage from "./Components/LandingPage";
import Register from "./Components/Register";
const token = localStorage.getItem("token");
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
function App() {
  // useEffect(()=>{
    // if(localStorage.getItem('cart') === null){
    //   const cart=JSON.stringify({});
    //   localStorage.setItem('cart',cart);
  //   if (token === true) {
  //  token    
  //   }
  //     }
  // )
  return (
    <>
      <Routes>
        <Route
          path="/signup"
          element={token ? <Navigate to="/" /> : <Register />}
        />
        <Route
          path="/"
          element={token ? <HeaderFooter Logo={logo} /> : <Navigate to="/login" />}
        >
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/signup" element={<Register />} />
        </Route>
        <Route path="/login" element={<NewLogin />} />
      </Routes>
    </>
  );
}

export default App;
