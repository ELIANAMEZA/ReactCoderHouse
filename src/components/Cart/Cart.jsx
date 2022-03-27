import React, { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom'
import './Cart.css'


export const Cart = () => {
  const {cart, vaciarCarrito, removeItem, totalCompra} = useContext(CartContext)

  return(
   
    <div className='div-return'> 
      {cart.length === 0 ? 
            <>
                <h2>Tu carrito está vacío</h2>
                <Link to='/' className="">
                    <button className="">Comenzá a comprar</button>
                </Link>
            </>
            :
            <>{
                cart.map(product => 
                <div key={product.id} className='div-cart'>
                    <div className='portada-cart'>
                      <img src={product.imgUrl} alt={product.title} className='img-cart'/>
                    </div>
                    <div className='portada-detail'>
                      <h4>{product.title}</h4>
                      <h4>precio: {product.price}</h4>
                      <h4>cantidad:{product.cantidad}</h4>
                      <button onClick={() => removeItem(product.id)}> X </button>
                    </div>
                  
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
            </>  
        }
      
    </div>


  )

}
