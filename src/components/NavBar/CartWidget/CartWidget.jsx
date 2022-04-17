import React, { useContext } from 'react'
import './CartWidget.css'
import cartIcon from '../../../img/iconos/cart.png'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../context/cartContext'

export const CartWidget = () => {
    const { cart, total} = useContext(CartContext)

    return (
        <Link to='/cart'>
            {cart.length === 0?
                <img src={cartIcon} id='icono' />
            :
            <div>
                <img src={cartIcon} className='carrito' /><span className='total'> {total}</span>
                
            </div>
            }
        </Link>   
    )
}

