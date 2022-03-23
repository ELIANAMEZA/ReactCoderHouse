import React from 'react'
import './CartWidget.css'
import cartIcon from '../../../img/iconos/cart.png'
import { Link } from 'react-router-dom'

export const CartWidget = () => {
    return (
        <div id='cart'>
            <Link to={'/cart'} id='icono'>
                <img src={cartIcon} id='carrito' />
            </Link>
        </div>
    )
}
