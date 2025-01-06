import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      axios
        .get("http://localhost:4000/api/users/profile", {
          headers: { Authorization: `Bearer ${token}` },  // Send token here
        })
        .then((response) => {
          setUserData(response.data);  // Store profile data
        })
        .catch((error) => {
          setError(error.response ? error.response.data : "An error occurred.");
        });
    } else {
      setError("No token found.");
    }
  }, []);  // Empty dependency array to run once when the component mounts

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Profile</h2>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
      <p><strong>Account Created:</strong> {new Date(userData.createdAt).toLocaleDateString()}</p>
      {/* Add more user profile details here */}
    </div>
  );
};

export default Profile;
