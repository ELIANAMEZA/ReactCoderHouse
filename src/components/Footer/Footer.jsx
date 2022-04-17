import React from "react";
import fb from '../../img/iconos/fb.png';
import './Footer.css'
import ig from '../../img/iconos/ig.png'


const Footer = () => {
    return(
        <div className="footer">
        
            <h4>Seguinos en las redes</h4>
        
        <div>
            <a href="https://m.facebook.com/Ilay-Bags-107273540616827/" target='_blank'><img src={fb} alt="facebook" className="fb"/></a>
            <a href="https://www.instagram.com/ilaybags/" target='_blank'><img src={ig} alt="instagram" className="ig"/></a>
        </div>
        </div>
    )
}

export { Footer}