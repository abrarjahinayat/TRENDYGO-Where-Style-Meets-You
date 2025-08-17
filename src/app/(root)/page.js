import React from "react";
import Banner from "../components/Banner";
import ProductList from "../components/ProductList";

const Homepage = ({ searchParams }) => {
  const category = searchParams.category;
  return (
    <div>
      <Banner />
      <ProductList category={category} params="homepage" />
    </div>
  );
};

export default Homepage;
