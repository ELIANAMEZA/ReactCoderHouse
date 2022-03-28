import React, { createContext, useEffect, useLayoutEffect, useState } from "react";

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
         totalCantidad()       
    }
    
    const removeItem = (id) => {
        setCart(cart.filter(product => product.id !== id));
    }

    const vaciarCarrito = () => {
        setCart([])
    }

    const totalCompra = () => {
        let totalCompra = 0;
        cart.forEach(product => totalCompra += product.price * product.cantidad)
        return totalCompra
    }

    const totalCantidad = () => {
        let totalCantidad = 0;
        cart.forEach(product => totalCantidad += product.cantidad)
        setTotal(totalCantidad) 

    }
    useEffect(()=>{
        totalCantidad()
    }, [cart])
    

    return (
        <CartContext.Provider value={{
           cart,
           total,
           AddToCart,
           vaciarCarrito,
           IsInCart,
           removeItem,
           totalCompra,
           totalCantidad
        }}>
            {children}
        </CartContext.Provider>
    )
}


    