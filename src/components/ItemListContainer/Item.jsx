import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({id,title, price, imgUrl, stock}) => {
  return (
    <div className='item'>
        <div className='title'>{title}</div>
        <img className='img' src={imgUrl} alt={title} />
        
        <Link to={`/item/${id}`} className='link'><button id='button-item'><b>Ver detalles</b></button></Link>
        <div className='stock'>stock disponible: {stock}</div>
        <div className='precio'>precio: ${price} </div>
    </div>
  )
}