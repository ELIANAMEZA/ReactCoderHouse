

import React, { useEffect, useState } from 'react'
import { stock } from '../../ListaProductos/stock'
import { listarArray } from '../../helpers/ListarArray'
import { ItemList } from './ItemList'
import './ItemListContainer.css'

export const ItemListContainer = () => {

    const [items, setItems] = useState([]) 
    const [loading, setLoading] = useState(false) 

    useEffect(() => {
        setLoading(true) 
        listarArray(stock) 
        .then((res) =>{
            setItems(res)
        })
        .catch((err)=>console.log(err)) 
        .finally(()=>{
            setLoading(false)
        })
    }, [])

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

