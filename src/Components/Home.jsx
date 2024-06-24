import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Home(props) {
  // add to cart list functionality
  const handleAddToCart = () => {
    const items = { price: 300, name: "i phone 11" };
    props.addToCartHandler(items);
  };

  // remove the cart list functionality
  const handleRemoveToCart = () => {
    const items = { price: 300, name: "i phone 11" };
    props.removeToCartHandler(items);
  };

  return (
    <div>
      <div className="float-end me-4">
        <span
          style={{
            position: "absolute",
            right: "60px",
            Zindex: "1",
            top: "20px",
            backgroundColor: "red",
            padding: "10px",
            borderRadius: "50%",
            width: "40px",
            display: "inline-block",
            color: "white",
            textAlign: "center",
          }}
        >
          {props.data.length}
        </span>
        <img src="/image/add-to-cart(2).png" alt="iPhone" width="100px" />
      </div>
      <h1 className="center">Home Component</h1>
      <div className="container">
        <div className="row border">
          <div className="col-2 ms-5">
            <img src="/image/I-phone.png" alt="iPhone" width="100px" />
          </div>
          <div className="col-2 mt-4 ">
            <span className="fs-4">I-PhonePrice:</span>
            <span className="fs-4"> 1000$</span>
          </div>

          <div className="col-2 mt-4">
            <button className="btn btn-success" onClick={handleAddToCart}>
              Add To Cart
            </button>

            <button
              className="btn btn-danger mt-3"
              onClick={handleRemoveToCart}
            >
              Remove To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
