
import './App.css';
import { NavBar } from './components/NavBar/NavBar.jsx';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
     <NavBar />
     <ItemListContainer saludo="esta es la página de carteras de cuero hechas a mano" />
    </div>
  );
}

export default App;
