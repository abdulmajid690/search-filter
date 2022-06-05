import React, { useState, useEffect } from "react";
import Products from "./Container/Products";

//  Data
import Data from "./data/data.json";

const App = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    setProducts(Data);
  }, []);

  return (
    <>{products ? <Products data={products} /> : <h1>No Record Found</h1>}</>
  );
};

export default App;
