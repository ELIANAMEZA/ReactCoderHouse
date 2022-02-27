import React from 'react'
import { ItemCount } from '../ItemCount/ItemCount'

export const ItemListContainer = ({saludo}) => {

  const onAdd = (cantidad) =>{
    console.log(`Se agrego al carrito ${cantidad} productos`)
  }

  return (
    <div>
        {saludo}
        <ItemCount stock={10} initial={0} onAdd={onAdd} />
    </div>
  )
}