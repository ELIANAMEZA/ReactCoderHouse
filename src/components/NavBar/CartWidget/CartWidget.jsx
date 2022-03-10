import React from 'react'
import './CartWidget.css'
import cartIcon from '../../../img/iconos/cart.png'

export const CartWidget = () => {
    return (
        <div id='cart'>
            <div id='icono'>
                <img src={cartIcon} />
            </div>
        </div>
    )
}
