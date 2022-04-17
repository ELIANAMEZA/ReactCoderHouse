import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/cartContext'
import { ItemCount } from '../ItemCount/ItemCount'
import './ItemDetailContainer.css'


export const ItemDetail = ({title, id, description, price, imgUrl, stock}) => {

  const [count, setCount] = useState(null)
  const {AddToCart, cart} = useContext(CartContext)
  const onAdd = cant =>{
    console.log(cant)
    setCount(cant)
    AddToCart({ title, id, price, imgUrl, stock, cantidad: cant})
    console.log(cart)
  }
   
  return (
    <div className='item-detail'>
        <div className='portada'>
          <img src={imgUrl} alt={title} />
        </div>         
        <div className='detail'>
            <h1>{title}</h1>
            <h3>{description}</h3>
            <h2>${price}</h2>

            { count ?
                  <Link to={`/cart`}> <button id='button-detail'><b>Ir al carrito</b> </button> </Link>
                  : 
              <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
            }   
        </div>
        
    </div>
  )          

}

