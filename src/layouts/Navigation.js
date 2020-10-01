import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css'

const list = [
    { name: "start", path: "/", exact: true },
    { name: "produkty", path: "/products" },
    { name: "kontakt", path: "/contact" },
    { name: "panel admina", path: "/admin" },
]

const Navigation = () => {
    const menu = list.map(element => (
        <li key={element.name}><NavLink to={element.path} exact={element.exact ? element.exact : false}>{element.name}</NavLink></li>))
    return (
        <nav className='main'>
            <ul>
                {menu}
            </ul>
        </nav>
    )
}

export default Navigation; 