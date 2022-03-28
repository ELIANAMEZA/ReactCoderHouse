import React, { useContext } from 'react'
import './CartWidget.css'
import cartIcon from '../../../img/iconos/cart.png'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../context/cartContext'

export const CartWidget = () => {
    const {totalCantidad} = useContext(CartContext)

    return (
        <div id='cart'>
            <Link to={'/cart'} id='icono'>
                
                <img src={cartIcon} id='carrito' />
                {totalCantidad() > 0 ? <div className='total'>{totalCantidad ()}</div> : <></> }
                
            </Link>
        </div>
    )
}
