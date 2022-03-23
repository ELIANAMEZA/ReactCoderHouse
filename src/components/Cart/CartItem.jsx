import React from "react";

export const CartItem = ({title, id, cantidad , price, imgUrl, stock}) =>{
    return(
        <div>
            <h5>Producto:{title}</h5>
            <h5>{imgUrl}</h5>
            <h5>Precio:${price}</h5>
            <h5>Cantidad:{cantidad}</h5>
            

        </div>
    )
}