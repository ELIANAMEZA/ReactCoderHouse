
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import './App.css';
import { NavBar } from './components/NavBar/NavBar.jsx';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart/Cart';
import { CartContext } from './context/cartContext';
import { CartProvider } from './context/cartContext'


function App() {
  return (
    <CartContext.Provider>

        <><BrowserRouter>
          <div className="App">
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:categoryId' element={<ItemListContainer />} />
              <Route path='/item/:itemId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/*' element={<Navigate to='/' replace />} />
            </Routes>
          </div>
        </BrowserRouter></>
    </CartContext.Provider>
      
  );
}

export default App;
