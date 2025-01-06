import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Use for redirection

const Dashboard = () => {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboardData = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        navigate('/login'); // Redirect to login if no token
        return;
      }

      try {
        // Fetch user profile to check if admin
        const userResponse = await axios.get('http://localhost:4000/api/users/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!userResponse.data.isAdmin) {
          setError('Unauthorized access. Admins only.');
          localStorage.removeItem('token'); // Clear token
          navigate('/login'); // Redirect non-admins to login
          return;
        }

        // Fetch Orders and Products for Admin
        const ordersResponse = await axios.get('http://localhost:4000/api/adminRoute/orders', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setOrders(ordersResponse.data);

        const productsResponse = await axios.get('http://localhost:4000/api/adminRoute/products', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProducts(productsResponse.data);
      } catch (error) {
        console.error(error);
        setError('Failed to load data.');
      }
    };

    fetchDashboardData();
  }, [navigate]);

  const handleUpdateProduct = async (id) => {
    // Placeholder for product update logic
    console.log(`Update product with ID: ${id}`);
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}

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
          {orders.map(order => (
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
          {products.map(product => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.discount_price}</td>
              <td>
                <button onClick={() => handleUpdateProduct(product._id)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
