import React from 'react'

export const Item = ({title, description, price, imgUrl, stock}) => {
  return (
    <div className='item'>
        <div className='title'>{title}</div>
        <img className='img' src={imgUrl} alt={title} />
        <div className='description'>{description}</div>
        {/* <button>Ver detalles del producto</button> */}
        <div className='stock'>stock disponible: {stock}</div>
        <div className='precio'>precio: ${price} </div>
    </div>
  )
}