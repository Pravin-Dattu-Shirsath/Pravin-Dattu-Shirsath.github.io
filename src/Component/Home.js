import React, { useState } from 'react'
import './Style/Home.css';
import {Link} from "react-router-dom";
function Home() {
  const [display,setdisplay]=useState("none")
  function menubtn(){
    display==="none"? setdisplay("block"):setdisplay("none")
  }
  return (
    <div className='Home'>
    
      <div className='jumbo'>
      {/* menu */}
      <div onClick={menubtn} className='Menuitem '>
      <header>---Menu---</header>
      <div style={{display:display}}>
      <ul>
      <h4>* Thali</h4>
        <li>Paneer Dish  <span>110</span></li>
        <li>Daal <span>80</span></li>
        <li>Curd <span>60</span></li>
        <li>Sweet(gulab jamun) <span>30</span></li>
        <li>Chapati <span>10</span></li>
      </ul>
      </div>
      
      </div>
      {/* order */}
      <div className='Orderhome'>
        <h1>Order Now <span>
        <Link to="/cartlist"> <i class="fa fa-shopping-cart"></i></Link>
       </span>
        </h1> 
       <img src="https://image.shutterstock.com/image-photo/complete-indian-veg-dish-thali-600w-1519708313.jpg" alt="" />
       
      </div>

      </div>
    </div>
  )
}

export default Home