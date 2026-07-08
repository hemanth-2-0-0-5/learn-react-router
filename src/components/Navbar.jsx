import React from 'react';
import logo from '../assets/logo.jpg';
//Linking another way
import { Link } from 'react-router-dom';
//down navlink track the path by showing class="active" so active class have extra properties
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className='navbar'>
        <img src={logo} alt="logo" />
        <ul>
            <NavLink to='/'><li>Home</li></NavLink>
            <NavLink to='/about'><li>About</li></NavLink>
            <NavLink to='/products'><li>Products</li></NavLink>
            <NavLink to='/contact'><li>Contact</li></NavLink>
            <NavLink to='/jobs'><li>Jobs</li></NavLink>
        </ul>
        <button onClick={()=>{navigate('/about')}}>Get Started</button>
    </div>
  )
}

export default Navbar