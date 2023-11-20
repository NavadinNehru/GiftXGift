import React,{useState} from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import {Link} from 'react-router-dom'


const Navbar = () => {
  const [menu,setMenu] = useState("home");
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt=""/>
        <p>GIFTxGIFT</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration:'none'}} to='/'>Home</Link>{menu==='home'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/shop'>Shop</Link>{menu==='shop'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("category")}}><Link style={{textDecoration:'none'}} to='/category'>Category</Link>{menu==='category'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("trending")}}><Link style={{textDecoration:'none'}} to='/trending'>Trending</Link>{menu==='trending'?<hr/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/signup'><button>Sign Up</button></Link>
        <Link tp='/cart'><img src={cart_icon} alt="" /></Link>
        <div className='nav-cart-count'>0</div>
      </div>
    </div>
  )
}

export default Navbar