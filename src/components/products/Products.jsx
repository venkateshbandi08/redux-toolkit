import React, { useEffect } from "react";
import "./Products.css";
import { addToCart } from "../../reduxStore/reduxSlice";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../reduxStore/reduxProducts";
const Products = () => {
  const { data: productsData, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  if (status === "pending") {
    return (
      <div
        style={{
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2> Loading... </h2>
      </div>
    );
  }
  if (status === "rejected") {
    return (
      <div
        style={{
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2> Error Occured please try again :( </h2>
      </div>
    );
  }
  return (
    <>
      <center>
        <h1> Products </h1>
      </center>
      s
      <div className="products-container">
        {productsData.map((eachItem) => (
          <div className="product-card" key={eachItem.id}>
            <img style={{ width: "10rem" }} src={eachItem.thumbnail} />
            <h3 className="brand-namee"> {eachItem.title} </h3>
            <h5> Rating : {eachItem.rating} </h5>
            <h4> Price : {eachItem.price} rs </h4>
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    thumbnail: eachItem.thumbnail,
                    title: eachItem.title,
                    rating: eachItem.rating,
                    price: eachItem.price,
                  })
                )
              }
              className="btn btn-primary"
            >
              {" "}
              Add to cart{" "}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
