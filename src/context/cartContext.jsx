import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext([])

export const CartProvider = ({children})=>{
    const [cart, setCart] = useState([])

    const AddToCart = (product) => {
        setCart( [...cart, product])
    }

    const IsInCart = (id) => {
        return cart.some ( (prod) =>prod.id === id)

    }
    const vaciarCarrito = () => {
        setCart([])
    }

    useEffect(() => {
        console.log(cart);
    }, [cart] )

    return (
        <CartContext.Provider value={{
           cart,
           AddToCart,
           IsInCart,
           vaciarCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}
