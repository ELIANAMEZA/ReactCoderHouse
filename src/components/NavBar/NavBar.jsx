import React from 'react';
import './NavBar.css'
import { CartWidget } from '../CartWidget/CartWidget';
import logo from '../../img/iconos/logo.png'

const NavBar = () => {
     return(
         <div id='NavBar'>
             <div id='marca'>
                <img className='logo' src= { logo } alt="" />
             </div>
             <div id= 'nav'>
                <ul>
                    <li>Nosotros</li>
                    <li>Productos</li>
                    <li>Pormociones</li>
                    <li>Contacto</li>
                </ul>
             </div>
             <CartWidget />
         </div>
            
     )
}

export { NavBar }