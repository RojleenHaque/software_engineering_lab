import React from "react";
import products from "../Data/products";

const Dashboard = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Product Dashboard</h1>
      <div className="row">
        {products.map((product, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
                style={{ height: "200px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text text-muted">
                  <s>${product.price}</s>{" "}
                  <strong>${product.discount_price}</strong>
                </p>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary btn-block">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
