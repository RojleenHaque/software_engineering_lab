import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = ({ query = "", minPrice = 0, maxPrice = Infinity }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://your-api-endpoint/products");
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching products");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on query and price range
  const filteredProducts = products.filter((product) => {
    const matchesQuery = product.name.toLowerCase().includes(query.toLowerCase());
    const withinPriceRange =
      (!minPrice || product.price >= minPrice) && (!maxPrice || product.price <= maxPrice);
    return matchesQuery && withinPriceRange;
  });

  return (
    <div>
      <h3>Products</h3>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : filteredProducts.length ? (
        <ul>
          {filteredProducts.map((product, index) => (
            <li key={index}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};

export default ProductList;
