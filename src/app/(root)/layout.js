import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReduxProvider from "../components/ReduxProvider";
import { ToastContainer } from "react-toastify";


const layout = ({ children }) => {
  return (
    <div>
      <ReduxProvider>
        <Navbar />
        {children}
        <Footer />
      </ReduxProvider>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default layout;
