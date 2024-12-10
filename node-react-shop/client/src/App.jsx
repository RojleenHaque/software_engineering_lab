import { useState } from 'react'
import React from 'react';
//import reactLogo from './assets/react.svg'
//import { Link } from 'react-router-dom';
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Routes,Route} from 'react-router-dom';
//import Dashboard from './components/Dashboard';

import Header from './components/header';
import Footer from './components/footer';
import Sidebar from './components/sidebar';
import Med1 from './components/med1';
import OTC_medicine from './components/med2';
import Vitamins from './components/vitamin';
import PersonalCare from './components/personalCare';
import SignUp from './components/Sign-up';
import LoginForm from './components/LogInForm';
import Cart from './components/Cart';




function App() {
  return (
    <>
    <div>

    <div className='main-app'> 
    <Header/>
      <Routes>
         {/* <Route path='/' element={<Home/>} /> */}
         <Route path='/sign-up' element={<SignUp/>} />
         <Route path='/login' element={<LoginForm/>} />
         <Route path='/cart' element={<Cart/>} />
         {/* <Route path='/dashboard' element={<Dashboard />} /> */}
     </Routes>  
    
        <div className='total-body-section'>
          <div className='body-side-bar'>
          <Sidebar></Sidebar>
           </div>
          <div class="side">
                 
                {/* <!--for 1st image about pharmacy--> */}
                {/* hero content */}
                <div class="img_and_content">
                  <div className='content'><br/>
                <h1 class="">Skip the line<br/> get your meds online</h1>
                   <h6 className=''>Trusted medication, right at your doorstep.Fast, reliable, and hassle-free medicine delivery,just a click away.</h6>
                   </div>
               <img class="image" src="./image/discussing-difficult-disease-treatment-app1.png" alt=""/>
               </div> 

               <h1 className='catagory'>Product catagories</h1>
            

                <Med1></Med1>
                <OTC_medicine></OTC_medicine>
                <Vitamins></Vitamins>
                <PersonalCare></PersonalCare>


                







            </div>  {/*for side*/}


        </div> {/* for body */}

    {/* </div>  for total body */}
    <Footer></Footer>
    </div> 
    
  
    </div>

    </>
  );
}

export default App;
