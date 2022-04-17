import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext([])

export const CartProvider = ({children})=>{
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(null)

    const IsInCart = (id) => {
        return cart.some ( (product) =>product.id === id)
    }

    const AddToCart = (product) => {
       
        if (IsInCart(product.id)) {
            let itemIndex = cart.findIndex(prod => prod.id === product.id)
            cart[itemIndex].cantidad += product.cantidad
        }
        else {
            setCart( [...cart, product]) 
        }
        totalAmount()       
    }
    
    const removeItem = (id) => {
        setCart(cart.filter(product => product.id !== id));
    }

    const emptyCart = () => {
        setCart([])
    }

    const totalBuy = () => {
        let totalBuy = 0;
        cart.forEach(product => totalBuy += product.price * product.cantidad)
        return totalBuy
    }

    const totalAmount = () => {
        let totalAmount = 0;
        cart.forEach(product => totalAmount += product.cantidad)
        setTotal(totalAmount) 

    }
    useEffect(()=>{
        totalAmount()
    }, [cart])
    

    return (
        <CartContext.Provider value={{
           cart,
           total,
           AddToCart,
           emptyCart,
           IsInCart,
           removeItem,
           totalBuy,
           totalAmount           
        }}>
            {children}
        </CartContext.Provider>
    )
}


    