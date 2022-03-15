

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { stock } from '../../ListaProductos/stock'
import { getStock } from '../../helpers/getStock'
import { ItemList } from './ItemList'
import './ItemListContainer.css'

export const ItemListContainer = () => {

    const [items, setItems] = useState([]) 
    const [loading, setLoading] = useState(false)
    const {categoryId} = useParams()
 

    useEffect(() => {
        setLoading(true) 
        getStock(stock) 
        .then((res) =>{
            categoryId? 
                setItems(res.filter( (item)=> item.category === categoryId ))
                :
                setItems(res)
        })
        .catch((err)=>console.log(err)) 
        .finally(()=>{
            setLoading(false)
        })
    }, [categoryId])

  return (
    <div className='item-list-container'>
        {
            loading? 
            <div className='cargando'>Cargando...</div>
            :
            <ItemList items={items} />
        }
    </div>
  )
}

