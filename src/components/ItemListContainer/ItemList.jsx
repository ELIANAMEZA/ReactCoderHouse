import React from 'react'
import { Item } from './Item'

export const ItemList = ({items}) => {

  return (
    <div className='item-list'>
        {
        items.map( (item)=> <Item {...item} key={item.id} /> )
        }
    </div>
  )
}