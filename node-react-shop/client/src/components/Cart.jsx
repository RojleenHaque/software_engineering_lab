


import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";  // Import useNavigate from react-router-dom

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();  // Initialize useNavigate hook

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const handleQuantityChange = (id, delta) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage
  };

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleCheckout = async () => {
    const orderData = cartItems.map(item => ({
      productId: item.id,
      quantity: item.quantity,
    }));

    try {
      const response = await axios.post("http://localhost:4000/orders", {
        items: orderData,
      });

      if (response.status === 200) {
        alert("Order successfully placed!");
        setCartItems([]);
        localStorage.removeItem("cart"); // Clear cart after order
        // Navigate to the payment page after placing the order
        navigate("/payment");
      }
    } catch (error) {
      console.error("Error during checkout:", error);
      alert("An error occurred while processing your order.");
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-center">
          <h3>Your cart is empty</h3>
          <a href="/dashboard" className="btn btn-primary mt-3">
            Shop Now
          </a>
        </div>
      ) : (
        <div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>Tk{item.price.toFixed(2)}</td>
                  <td>
                    <div className="d-flex justify-content-center">
                      <button
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => handleQuantityChange(item.id, -1)}
                      >
                        -
                      </button>
                      <input
                        type="text"
                        className="form-control mx-2 text-center"
                        style={{ width: "60px" }}
                        value={item.quantity}
                        readOnly
                      />
                      <button
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => handleQuantityChange(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>Tk{(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-end">
            <h4>
              Total: <span>Tk{calculateTotal().toFixed(2)}</span>
            </h4>
            <button
              className="btn btn-success mt-3"
              onClick={handleCheckout}
            >
              Proceed to Pay
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
