import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loader from "./components/Loader";
//import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Order from "./components/Order";
import Restaurant from "./components/Restaurant";
import Dishes from "./components/Dishes";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          {/* <Route path="/login" component={Login} /> */}
          <Route path="/order" element={<Order />} />
          <Route exact path="/restaurant" component={Restaurant} />
          <Route exact path="/dishes" component={Dishes} />
        </Routes>
        <Restaurant />
        <Order />
        <Dishes />
        <About />
        <Footer />
        <Loader />
      </div>
    </>
  );
}

export default App;
