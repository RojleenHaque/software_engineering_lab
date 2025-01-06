// AdminDashboard.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboardData = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      try {
        // Fetch orders and products data for admin
        const ordersResponse = await axios.get("http://localhost:4000/api/adminRoute/orders", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setOrders(ordersResponse.data);

        const productsResponse = await axios.get("http://localhost:4000/api/adminRoute/products", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProducts(productsResponse.data);
      } catch (error) {
        console.error(error);
        setError("Failed to load data.");
      }
    };

    fetchDashboardData();
  }, [navigate]);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <h2>Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>User</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.user.name}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Products</h2>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Discount Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.discount_price}</td>
              <td>
                <button onClick={() => console.log(`Update product with ID: ${product._id}`)}>
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
