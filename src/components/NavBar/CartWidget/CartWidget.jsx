import React, { useContext } from 'react'
import './CartWidget.css'
import cartIcon from '../../../img/iconos/cart.png'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../context/cartContext'

export const CartWidget = () => {
    const {cart, totalCantidad} = useContext(CartContext)

    return (
        <div id='cart'>
            <Link to={'/cart'} id='icono'>
                
                <img src={cartIcon} id='carrito' />
                <div className='total'>{totalCantidad ()}</div>
                
            </Link>
        </div>
    )
}

// function CartWidget () {
//     const { cart, totalCantidad} = useContext()
//     return(
//         <div id='cart'>
//             <Link to={'/cart'} id='icono'>
//                 {cart.length === 0}
//                  <img src={cartIcon} id='carrito' />
//                  :
//                  <>
//                     <img src={cartIcon} id='carrito' />
//                     <div>{totalCantidad}</div>
                    
//                  </>
//              </Link>
//          </div>
//     )
// }

// export default CartWidget