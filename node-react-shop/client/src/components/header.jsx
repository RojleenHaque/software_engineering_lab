// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import logo from "../image/logo-my-pharmacy-1609341055.png"
// import cart from "../image/4357325.png"
// import SearchBar from "./searchBar";

// const Header = () => {

//   const [menu,setMenu]=useState("home"); {/*menu(a varriable) will hold the current state.Initially home. setMenu is a function that is called to update the menu */}
//  const [visible,SetVisible]=useState(false);


//   return (
//   <header>
//     <div className="header">
// <div class="header-bar">

// <img class="logo" src={logo} alt="Online Medicine Store "/>
// <nav class="navigation_bar">
//   <div className="expand_navbar">
// <ul>
//    <li className="a" 
//      onClick={()=>{setMenu("home")}}>  
//      <NavLink to='/' >Home</NavLink>
//    </li>

//    <li className="a" 
//      onClick={()=>{setMenu("sign-up")}}>
//        <NavLink to='/sign-up' > Sign-up</NavLink> 
//     </li>   

//    <li className="a" 
//     onClick={()=>{setMenu("login")}}>
//       <NavLink to='/login' >Login</NavLink>
//     </li>

//    <li className="a" 
//     onClick={()=>{setMenu("cart")}}>
//     <img className="cart-img" src={cart}/>
//     <NavLink to='/cart'> Cart</NavLink> 
//    </li>
//  </ul>
//  </div>
// </nav> 
// <img onClick={()=>SetVisible(true)} src="/image/menu.webp" className="hidden_menu" />
 
// {/* <!-- toggle button --> */}
// {/* for whole header */}
// </div>


// {/* drop down menu for hidden */}
// <div className="hidden_m_content group-hover:block hidden absolute dropdown-menu">
//   <div className="hidden_manu_content" >
//   <NavLink className='' to='/' >Home<hr/></NavLink>
//   <NavLink to='/sign-up' > Sign-up<hr/></NavLink> 
//   <NavLink to='/login' >Login<hr/></NavLink>
//   <NavLink to='/cart'> Cart<hr/></NavLink> 
//   </div>
// </div>

// <div class="search_button">
// <h4>What are you looking for?</h4>
// <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
//           <input type="search" class="form-control" placeholder="Search..." aria-label="Search"/>
//         </form>
// </div>

// {SearchBar}

// </div>
//     </header>
//     );
// };

// export default Header;



//header
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../image/logo-my-pharmacy-1609341055.png";  // Corrected path
import cart from "../image/4357325.png";  // Corrected path
import SearchBar from "./SearchBar";
import products from "./product";

const Header = ({ setSearchResults }) => {
  const navigate = useNavigate();

  const handleSearch = (query, minPrice, maxPrice) => {
    const results = products.filter((product) => {
      const matchesQuery = product.name.toLowerCase().includes(query.toLowerCase());
      const withinPriceRange =
        (!minPrice || product.price >= minPrice) && (!maxPrice || product.price <= maxPrice);
      
      return matchesQuery && withinPriceRange;
    });
    setSearchResults(results);
    navigate("/search-results");
  };

  return (
    <header>
      <div className="header">
        <div className="header-bar">
          <img className="logo" src={logo} alt="Online Medicine Store" />
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/sign-up">Sign-up</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/cart">
                  <img className="cart-img" src={cart} alt="Cart" />
                  Cart
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <SearchBar onSearch={handleSearch} />
      </div>
    </header>
  );
};

export default Header;
