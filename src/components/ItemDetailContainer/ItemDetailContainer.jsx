import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { stock } from '../../ListaProductos/stock'
import { ItemDetail } from './ItemDetail'
import { getStock } from '../../helpers/getStock'
import './ItemDetailContainer.css'
import { doc, getDoc, getFirestore } from "firebase/firestore";

export const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(false)
    const {itemId} = useParams()

    useEffect(()=>{
        setLoading(true)
        const db = getFirestore();
        const queryDb = doc(db, 'items', itemId);
        getDoc(queryDb)
            .then(resp=> setItem({id: resp.id, ...resp.data()}))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
    }, [itemId])

  
    
  return (
    <div className='item-detail-container'>
        {
            loading? 
            <div className='cargando'>Cargando...</div>
            :
            <ItemDetail {...item}/>
        }
    </div>
  )
}

/* useEffect(() => {
    setLoading(true)
    getStock(stock) 
        .then((res) =>{
            setItem(res.find( (item)=> item.id === parseInt(itemId))) 
        })
        .catch((err)=>console.log(err)) 
        .finally(()=>{
            setLoading(false)
        })
}, [itemId]) */