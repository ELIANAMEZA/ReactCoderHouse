import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/cartContext'
import { ItemCount } from '../ItemCount/ItemCount'


export const ItemDetail = ({ title, description, price, imgUrl, stock, id, can}) => {

  const [option, setOption] = useState(true)
  const {AddToCart, IsInCart, cart} = useContext(CartContext)

  const Add = ()=>{
    const newItem = {title, id, cantidad , price, imgUrl, stock}
    AddToCart(newItem)
  }
  function onAdd(cantidad) {
    setOption(false)
    

  }
  
  console.log(cart)

  return (
    <div className='item-detail'>
        <div className='portada'>
          <img src={imgUrl} alt={title} />
        </div> 
        
        <div className='detail'>
            <h1>{title}</h1>
            <h3>{description}</h3>
            <h2>${price}</h2>

            { option ?
                  <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
                  : 
              IsInCart(id) ?
              <h2>Agregado al carrito</h2>
              :  
                  <Link to={`/cart`}> <button>Finalizar compra</button> </Link>

            }
            
        </div>
        
    </div>
  )
}

