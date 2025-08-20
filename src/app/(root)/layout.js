import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReduxProvider from "../components/ReduxProvider";

const layout = ({ children }) => {
  return (
    <div>
      <ReduxProvider>
        <Navbar />
        {children}
        <Footer />
      </ReduxProvider>
    </div>
  );
};

export default layout;
