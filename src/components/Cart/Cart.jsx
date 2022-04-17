import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom'
import './Cart.css'
import {addDoc,collection,getFirestore,} from "firebase/firestore";


export const Cart = () => {
  const [id, setId] = useState("")
  const [dataForm, setDataForm] = useState({
    email: "",name: "",phone: "",
  })
  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    })
  }

  const {cart, emptyCart, removeItem, totalBuy} = useContext(CartContext)

  const generateOrder = async (e) => {
    e.preventDefault();
    const date = ()=>{
      let fecha = new Date();
      return fecha.getDate() + "/" + (fecha.getMonth() +1) + "/" + fecha.getFullYear();
  }

    let order = {}
    order.date= date()
    order.buyer = dataForm
    order.total = totalBuy()
    order.items = cart.map((cartItem) => {
      const id = cartItem.id
      const nombre = cartItem.title
      const precio = cartItem.price * cartItem.cantidad
     
      return { id, nombre, precio}
    })

   console.log(order)

    const db = getFirestore()
    const queryColection = collection(db, 'orders')
    addDoc(queryColection, order).then((resp) => setId(resp.id))
      .catch((err) => console.error(err))
      .finally(() =>emptyCart())
      
   console.log(dataForm)

  }

  return(
   
    <div className='div-return'> 
      {id.length > 0 && `El id de la compra es: ${id}`}
      {cart.length === 0 ? 
            <>
            <div className="cart-vacio">
                <h2>Tu carrito está vacío</h2>
                <Link to='/' >
                    <button className="button-comprar"><b>Comenzá a comprar</b> </button>
                </Link>
            </div>
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
                      <button id='remove' onClick={() => removeItem(product.id)}> X </button>
                    </div>                 
                </div>)
              }
              <div>
                <div id='total-cart'>
                  <Link to={'/'} >
                  <button className='button-cart'><b>Seguir comprando</b> </button>
                </Link>
                <button className='button-cart' onClick={emptyCart}><b> VaciarCarrito</b></button>
                <h2>Total: ${totalBuy()}</h2>
                
                </div>
                
                <h3>Completá el formulario para finalizar la compra</h3>
                <form onSubmit={generateOrder}>
                  <input 
                      type='text' 
                      name='name' 
                      placeholder='Nombre y Apellido' 
                      value={dataForm.name}
                      onChange={handleChange}
                      required
                  /><br />
                  <input 
                      type='number' 
                      name='phone'
                      placeholder='Celular' 
                      value={dataForm.phone}
                      onChange={handleChange}
                      required
                  /><br/>
                  <input 
                      type='email' 
                      name='email'
                      placeholder='email' 
                      value={dataForm.email}
                      onChange={handleChange}
                      required
                  /><br/>
                  <br />
                  <button id='button-form'><b> Enviar</b></button>  
                  </form>
 
              </div>
            </>  
        }
      
    </div>


  )

}



