import React, { useState } from "react";
import Search from "../component/Search";
import SingleProduct from "../component/Single-Product";

const Products = ({ data }) => {
  const [query, setQuery] = useState("");
  return (
    <>
      <Search query={query} setQuery={setQuery} />
      <article className="products-container">
        {data
          .filter((item) => item.title.toLowerCase().includes(query))
          .map((item, index) => {
            return <SingleProduct key={index} item={item} />;
          })}
      </article>
    </>
  );
};

export default Products;
