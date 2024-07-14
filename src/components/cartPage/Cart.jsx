import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import { removeFromCart } from "../../reduxStore/reduxSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  // console.log(cartItems);
  const dispatch = useDispatch();
  return (
    <>
      {cartItems.length === 0 ? (
        <div
          style={{
            height: "80vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2> No Items Added </h2>
        </div>
      ) : (
        <div className="products-container">
          {cartItems.map((eachItem) => (
            <div className="product-card" key={eachItem.id}>
              <img style={{ width: "10rem" }} src={eachItem.thumbnail} />
              <h3 className="brand-namee"> {eachItem.title} </h3>
              <h5> Rating : {eachItem.rating} </h5>
              <h4> Price : {eachItem.price} rs </h4>
              <button
                onClick={() => dispatch(removeFromCart(eachItem.id))}
                className="btn btn-danger"
              >
                {" "}
                Remove From Cart{" "}
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Cart;
