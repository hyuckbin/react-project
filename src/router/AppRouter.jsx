import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NewProduct from "../pages/NewProduct";
import ProductList from "../pages/ProductList";
import About from "../pages/About";
import UpdateProduct from "../pages/UpdateProduct";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newproduct" element={<NewProduct />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/about" element={<About />} />
        <Route path="/updateproduct" element={<UpdateProduct />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
