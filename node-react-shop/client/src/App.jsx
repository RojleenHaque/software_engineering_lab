import { useState } from 'react'
import React from 'react';
//import reactLogo from './assets/react.svg'
//import { Link } from 'react-router-dom';
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
//import {Routes,Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Header from "./components/header";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import Med1 from "./components/med1";
import OTC_medicine from "./components/med2";
import Vitamins from "./components/vitamin";
import PersonalCare from "./components/personalCare";
import SignUp from "./components/Sign-up";
import LoginForm from "./components/LogInForm";
import Profile from './components/profile';
import Cart from "./components/Cart";
import SearchResults from "./components/searchResult";
import products from './components/product';
//import productDetail from './components/productDetail';
import ProductDetail from './components/productDetail';
import frontImage from "./image/discussing-difficult-disease-treatment-app1.png";
import Payment from './components/payment';
import AdminDashboard from './components/AdminDashboard';
//import { store } from './Redux/store';


// function App() {
//   const [searchResults, setSearchResults] = useState(products);
//   const location = useLocation();

//   // Define routes where the Header should be hidden
//   const hideHeaderRoutes = ["/sign-up", "/login", "/cart"];
//   //const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);
//   const shouldHideHeader = hideHeaderRoutes.some((route) =>
//     location.pathname.startsWith(route)
//   );

  
function App() {
  const [searchResults, setSearchResults] = useState(products);
  const [isAdmin, setIsAdmin] = useState(false);  // Track if the user is an admin
  const [isUser, setIsUser] = useState(false);    // Track if the user is a regular user
  const location = useLocation();

  // Define routes where the Header should be hidden
  const hideHeaderRoutes = ["/sign-up", "/login", "/cart"];
  const shouldHideHeader = hideHeaderRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  // Admin login handler
  const handleAdminLogin = () => {
    setIsAdmin(true);  // Set isAdmin to true when admin logs in
    setIsUser(false);  // Ensure isUser is false for admin login
  };

  // User login handler
  const handleUserLogin = () => {
    setIsUser(true);   // Set isUser to true when regular user logs in
    setIsAdmin(false); // Ensure isAdmin is false for regular user login
  };


  return (
    <>
      <div className="main-app">
        {/* Pass the setSearchResults function to Header */}
        {/* <Header setSearchResults={setSearchResults} /> */}

        {!shouldHideHeader && <Header setSearchResults={setSearchResults} />}

        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          {/* <Route path='/' element={<Home/>}></Route> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route exact path="/detail/:id" element={<ProductDetail />} />
          {/* Pass searchResults to the SearchResults page */}
          <Route
            path="/search-results"
            element={<SearchResults searchResults={searchResults} />}
          />
        </Routes>
        {/* <Router>
          <Routes>
            <Route exact path="/detail/:id" element={<productDetail/>}></Route>
          </Routes>
        </Router> */}

        <div className="total-body-section">
          <div className="body-side-bar">
            <Sidebar />
          </div>
          <div className="side">
            {/* Hero Section */}
            <div className="img_and_content">
              <div className="content">
                <h1>Skip the line, get your meds online</h1>
                <h6>
                  Trusted medication, right at your doorstep. Fast, reliable,
                  and hassle-free medicine delivery, just a click away.
                </h6>
              </div>
              <img className="image" src={frontImage} alt="" />
            </div>

            <h1 className="catagory">Product categories</h1>

            {/* Product Categories */}
            <Med1 />
            <OTC_medicine />
            <Vitamins />
            <PersonalCare />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;