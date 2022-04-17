import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from './ItemDetail'
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

