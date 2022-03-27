import React, { createContext, useState } from "react";

export const CartContext = createContext([])

export const CartProvider = ({children})=>{
    const [cart, setCart] = useState([])

    const AddToCart = (product) => {
        if (IsInCart(product.id)) {
            let itemIndex = cart.findIndex(prod => prod.id === product.id)
            cart[itemIndex].cantidad += product.cantidad
        }
        else {
            setCart( [...cart, product]) 
        }
               
    }
    
    const IsInCart = (id) => {
        return cart.some ( (product) =>product.id === id)
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
        return totalCantidad

    }

    

    return (
        <CartContext.Provider value={{
           cart,
           AddToCart,
           vaciarCarrito,
           removeItem,
           totalCompra,
           totalCantidad
        }}>
            {children}
        </CartContext.Provider>
    )
}
