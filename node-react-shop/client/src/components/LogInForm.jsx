import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Use for redirection

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate(); // Navigation hook for redirecting after login

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    // Validation
    if (!email || !password) {
      setError("Both email and password are required.");
      return;
    }

    setError("");

    // Call API to log in the user
    try {
      const response = await axios.post("http://localhost:4000/api/adminRoute/login", {
        email,
        password,
      });

      if (response.status === 200) {
        setSuccess("Login successful!");
        localStorage.setItem("token", response.data.token);

        // Check the role from the response and redirect accordingly
        const userRole = response.data.role;

        if (userRole === "admin") {
          navigate("/admin-dashboard"); // Admin dashboard route
        } else {
          setError("Unauthorized role.");
        }
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "500px" }}>
        <h2 className="text-center mb-4">Login</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="adjust_button">
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </div>
        </form>
        <p className="text-center mt-3">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;



// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import axios from "axios";
// import { useNavigate } from "react-router-dom"; // Use for redirection

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const navigate = useNavigate(); // Navigation hook for redirecting after login

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { email, password } = formData;

//     // Validation
//     if (!email || !password) {
//       setError("Both email and password are required.");
//       return;
//     }

//     setError("");

//     // Check if username and password are "admin" and "123456"
//     if (email === "admin@node.com" && password === "123456") {
//       // Redirect directly to the admin dashboard if credentials match
//       navigate("/dashboard");
//       return;
//     }

//     // Call API to log in the user for non-admin credentials
//     try {
//       const response = await axios.post("http://localhost:4000/api/users/login", {
//         email,
//         password,
//       });

//       if (response.status === 200) {
//         setSuccess("Login successful!");
//         localStorage.setItem("token", response.data.token);

//         // Check the role from the response and redirect accordingly
//         const userRole = response.data.role;

//         if (userRole === "admin") {
//           navigate("/admin-dashboard"); // Admin dashboard route
//         } else if (userRole === "user") {
//           navigate("/user-dashboard"); // User dashboard route
//         } else {
//           setError("Unauthorized role.");
//         }
//       }
//     } catch (error) {
//       console.error("Error during login:", error);
//       setError("Invalid email or password. Please try again.");
//     }
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100">
//       <div className="card p-4 shadow" style={{ width: "500px" }}>
//         <h2 className="text-center mb-4">Login</h2>
//         {error && <div className="alert alert-danger">{error}</div>}
//         {success && <div className="alert alert-success">{success}</div>}
//         <form onSubmit={handleSubmit}>
//           <div className="form-group mb-3">
//             <label htmlFor="email">Email Address</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               className="form-control"
//               placeholder="Enter your email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group mb-3">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               className="form-control"
//               placeholder="Enter your password"
//               value={formData.password}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="adjust_button">
//             <button type="submit" className="btn btn-primary w-100">
//               Login
//             </button>
//           </div>
//         </form>
//         <p className="text-center mt-3">
//           Don't have an account? <a href="/signup">Sign Up</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
