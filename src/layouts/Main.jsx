import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footers/Footer";
import NavBar from "../components/Navbar/NavBar";

const Main = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
