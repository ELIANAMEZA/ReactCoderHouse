import React, { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import { CartItem } from './CartItem';

export const Cart = () => {
  const {cart, vaciarCarrito} = useContext(CartContext)

  return(
    <div>
      {
        cart.map( (item)=> <CartItem {...item} key={item.id}/> )
      }
     <button onClick={vaciarCarrito}>Vaciar Carrito</button>

    </div>

  )

}
