import React from 'react'
import { Link } from 'react-router-dom'
import './styles/header.css'

const Header = () => {
  return (
    <header>
        <nav className='nav_container'>
            <ul className='ul_list'>
                <li className='E-commerce'><Link to="/">e-commerce</Link></li>
                <div className='container-list'>
                <li><Link to="/login"><i className="fa-solid fa-user"></i></Link></li>
                <li><Link to="/cart"><i className="fa-solid fa-pen-to-square"></i></Link></li>
                <li><Link to="/purchases"><i className="fa-solid fa-cart-shopping"></i></Link></li>
                </div>
            </ul>
        </nav>
    </header>
  )
}

export default Header