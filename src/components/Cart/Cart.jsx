import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom'
import './Cart.css'
import {
  addDoc, 
  collection, 
  // doc, 
  // documentId, 
  // getDocs, 
  getFirestore, 
  // query, 
  // updateDoc, 
  // where, 
  // writeBatch 
} from "firebase/firestore";


export const Cart = () => {
  const [id, setId] = useState("")
  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    })
  }

  const [dataForm, setDataForm] = useState({
    email: "",
    name: "",
    phone: "",
  })

  const {cart, vaciarCarrito, removeItem, totalCompra} = useContext(CartContext)
  console.log(cart)

  const generarOrden = async (e) => {
    e.preventDefault();
    const date = ()=>{
      let fecha = new Date();
      return fecha.getDate() + "/" + (fecha.getMonth() +1) + "/" + fecha.getFullYear();
  }

    let orden = {}
    orden.date= date()
    orden.buyer = dataForm
    orden.total = totalCompra()
    orden.items = cart.map((cartItem) => {
      const id = cartItem.id
      const nombre = cartItem.title
      const precio = cartItem.price * cartItem.cantidad
     
      return { id, nombre, precio}
    })

    console.log(orden)

    const db = getFirestore()
    const queryColection = collection(db, 'orders')
    addDoc(queryColection, orden).then((resp) => setId(resp.id))
      .catch((err) => console.error(err))
      .finally(() => console.log("terminado"))
    
    
    
  }

console.log(dataForm)

  return(
   
    <div className='div-return'> 
  
      {cart.length === 0 ? 
            <>
                <h2>Tu carrito está vacío</h2>
                <Link to='/' className="">
                    <button className="">Comenzá a comprar</button>
                </Link>
            </>
            :
            <>
            {cart.map(product => 
                <div key={product.id} className='div-cart'>
                    <div className='portada-cart'>
                      <img src={product.imgUrl} alt={product.title} className='img-cart'/>
                    </div>
                    <div className='portada-detail'>
                      <h4>{product.title}</h4>
                      <h4>precio:$ {product.price}</h4>
                      <h4>cantidad:{product.cantidad}</h4>
                      <button onClick={() => removeItem(product.id)}> X </button>
                    </div>
                  
                </div>)
              }

              <div>
                <button>Total: ${totalCompra()} </button>
                <form onSubmit={generarOrden}>
                  <input 
                      type='text' 
                      name='name' 
                      placeholder='name' 
                      value={dataForm.name}
                      onChange={handleChange}
                  /><br />
                  <input 
                      type='text' 
                      name='phone'
                      placeholder='tel' 
                      value={dataForm.phone}
                      onChange={handleChange}
                  /><br/>
                  <input 
                      type='email' 
                      name='email'
                      placeholder='email' 
                      value={dataForm.email}
                      onChange={handleChange}
                  /><br/>
                  <button>Enviar</button>
                  </form>
                  <div>
                    <p>{id.length > 0 && `el id de la compra es: ${id}`}</p>
                    
                  </div> 
                
                <div>
                  <Link to={'/'} >
                      <button>Seguir comprando</button>
                  </Link>
                  <button onClick={vaciarCarrito}>VaciarCarrito</button>
        
                </div>  
              </div>
            </>  
        }
      
    </div>


  )

}



