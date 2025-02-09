import React from 'react'
import {
     Routes,
     Route
   } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home  from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import  Payment  from './components/Payment/Payment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe} from '@stripe/stripe-js';
import Orders from './components/Orders/Orders';


const promise=loadStripe("pk_test_51PkS6MI4Xj2IZ3ExYj6e86JBzZe38sJExobpL9Yobe7zWN1GTqRCEqLvFtDRKEYTsqCqYAhxjJtTKevUQM0Xh58R00HjoyzskZ")
const Main = () => {

  return (
    <>

    <div> 
      <Routes>
        <Route path='/' element={<Navbar/>}></Route>
        <Route path='/checkout' element={<Navbar/>}></Route>
        <Route path='/payment' element={<Navbar/>}/>
      </Routes>
    </div>
    <div>
           <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/checkout' element={<Checkout/>} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/payment' element={<Elements stripe={promise}>
              <Payment/>
            </Elements>} />
            <Route path='/orders' element={<Orders/>}></Route>
            
           </Routes> 
          
    </div>
    </>
  )
}

export default Main