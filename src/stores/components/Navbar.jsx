import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
  <>
  <div className="navsection">
    <div className="title">
       <h2>Flipcart</h2> 
    </div>
    <div className="serach">
        <input type="text" placeholder='serch...'/>
    </div>
    <div className="user">
        <h3>signin/sinup</h3>
    </div>
    <Link to='/cart'><div className="cart">
        cart
    </div></Link>
    

 
    
  </div>
  <div className="subMenu">
    <ul>
        <Link to='/mobiles'><li>Mobiles</li></Link>
        
        <Link to='/ac'><li>Acs</li></Link>
        
        <Link to ='/furniture'><li>Furniture</li></Link>
        
        <Link to ='/fridge'> <li>Fridges</li></Link>
       

        
        <Link to='/men'><li>men shopping</li></Link>
        
        <Link to='/women'><li>women shopping</li></Link>
        <Link to='/computer'><li>computers</li></Link>
        
        
    </ul>
  </div>
  </>
  )
}


export default Navbar
