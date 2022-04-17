import React, { useState } from 'react'
import './ItemCount.css'

export const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial) 
 
    const handleSubstract = () => {
        if(count > 0){
            setCount(count-1) 
        } 
    }
    const handleAdd = () => {
        if(count < stock){
            setCount(count+1) 
        } 
    }
    
    const addition = () =>{
        onAdd(count)
    }

    return (
        <div>
            <button  disabled={count===0} onClick={handleSubstract} className="button-count">
                -
            </button>
            <span><b>{count}</b></span>
            <button  disabled={count===stock} onClick={handleAdd} className="button-count">
                +
            </button><br />
            <button  disabled={count===0} onClick={addition} className="button-count">
               <b>Agregar al carrito</b> 
            </button>
        </div>
    )
    
}