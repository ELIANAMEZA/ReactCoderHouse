import React from "react";
import fb from '../../img/iconos/fb.png';
import './Footer.css'
import { Link } from 'react-router-dom'


const Footer = () => {
    return(
        <><div className="footer">
            <h4>Seguinos en las redes</h4>
        </div>
        <div>
            <img src={fb} alt="" className="fb"/><a href="https://m.facebook.com/Ilay-Bags-107273540616827/"></a>
        </div></>

    )
}

export { Footer}