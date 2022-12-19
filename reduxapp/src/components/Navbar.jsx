import React from 'react'
import { useSelector } from 'react-redux'  //subscribe
import { Link } from 'react-router-dom'

const Navbar = () => {

  const items = useSelector((state) => state.cart)
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>

      <span className='logo'>Redux Store</span>
      <br />
      <Link className='navLink' to="/">Home</Link>
      <Link className='navLink' to="/cart">Cart</Link>
      <br />
      <span className='cartCount'>Cart total: { items.length}</span>

    </div>
  )
}

export default Navbar