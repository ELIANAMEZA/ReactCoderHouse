import React from 'react';
import './NavBar.css'
import { CartWidget } from './CartWidget/CartWidget';
import logo from '../../img/iconos/logo.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
     return(
         <div id='NavBar'>
             <Link to={`/`} id='marca'>
                <img className='logo' src= {logo} />
             </Link>
            <div id='nav'>
                <ul>
                    <li><Link to={`/`} className='link'>Nosotros</Link></li>
                    <li className='link'>
                        <Link to={`/`} className='productos'>Productos</Link>
                        <ul className='lista-productos'>
                            <Link to={`/category/Helena`} className='sub-menu'><li>Helena</li></Link>
                            <Link to={`/category/Atenea`} className='sub-menu'><li>Atenea</li></Link>
                            <Link to={`/category/Petra`} className='sub-menu'><li>Petra</li></Link>
                        </ul>
                    </li>
                    <li><Link to={`/`} className='link'>Promociones</Link></li>
                    <li><Link to={`/`} className='link'>Contacto</Link></li>
                </ul>
            </div>

             <CartWidget />
         </div>
            
     )
}

export { NavBar }