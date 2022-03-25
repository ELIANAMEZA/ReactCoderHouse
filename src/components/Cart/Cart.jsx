import React, { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom'


export const Cart = () => {
  const {cart, vaciarCarrito, removeItem, totalCompra} = useContext(CartContext)

  return(
   
    <div>    
      {
        cart.map(product => 
        <div key={product.id}>
          <h4>{product.title}</h4>
          <h5>
            <img src={product.imgUrl} alt={product.title} />
          </h5>
          <h4>precio: {product.price}</h4>
          <h4>cantidad:{product.cantidad}</h4>
          <button onClick={() => removeItem(product.id)}> X </button>
        </div>)
      }

        <div>
          <button>Total: ${totalCompra()} </button>
          <div>
            <Link to={'/'} >
                 <button>Seguir comprando</button>
            </Link>
            
          </div>
          
         
          <button onClick={vaciarCarrito}>VaciarCarrito</button> <button>Finalizar compra</button>
        </div>
    </div>


  )

}
