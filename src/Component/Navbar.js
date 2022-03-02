import React from 'react'
import {Link} from "react-router-dom";
import './Style/Navbar.css'
  
const Navbar = () => {
  return (
  

  <div class=" NAVBAR container-fluid navbar-dark bg-dark position-relative">
    <Link  to="/"><img className='logo' src="https://banner2.cleanpng.com/20180330/qjq/kisspng-steadfast-it-5-star-customer-service-home-care-ser-5-stars-5abe5cfecc63b2.1375198815224250868372.jpg"  alt="logo" /></Link>
          <Link  to="/">Home</Link>
          <Link  className="position-absolute top-0 end-0 cart"   to="/summary"><i class="fa fa-shopping-cart"> </i></Link>
          <Link  to="/cartlist">Cart </Link>
          <Link  to="/thanks">thanks</Link>
        
 
  </div>

  )
}

export default Navbar