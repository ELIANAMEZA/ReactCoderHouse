import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/cartContext'
import { ItemCount } from '../ItemCount/ItemCount'


export const ItemDetail = ({title, id, description, price, imgUrl, stock}) => {

  // const [option, setOption] = useState(true)
  // const Add = (cantidad)=>{
  //   const newItem = {title, id, cantidad , price, imgUrl, stock}
  //   AddToCart(newItem)
  // }
  // function onAdd(cantidad) {
  //   setOption(false)
    
  // }
  
  const [count, setCount] = useState(null)
  const {AddToCart, cart} = useContext(CartContext)
  const onAdd = cant =>{
    console.log(cant)
    setCount(cant)
    AddToCart({ title, id, price, imgUrl, stock, cantidad: cant})
    
  }
  
  console.log(cart)

  // return (
  //   <div className='item-detail'>
  //       <div className='portada'>
  //         <img src={imgUrl} alt={title} />
  //       </div> 
        
  //       <div className='detail'>
  //           <h1>{title}</h1>
  //           <h3>{description}</h3>
  //           <h2>${price}</h2>

  //           { option ?
  //                 <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
  //                 : 
  //             IsInCart(id) ?
  //             <h2>Agregado al carrito</h2>
  //             :  
  //                 <Link to={`/cart`}> <button>Ir al carrito</button> </Link>

  //           }
            
  //       </div>
        
  //   </div>
  // )
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
                  <Link to={`/cart`}> <button>Ir al carrito</button> </Link>
                  : 
              <ItemCount stock={stock} initial={1} onAdd={onAdd}/>

            }

            
            
        </div>
        
    </div>
  )          

}

