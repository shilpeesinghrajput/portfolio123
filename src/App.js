
import './index.css'
import Home from './routes/Home';
import Product from './routes/Product';
import Contact from './routes/Contact';
import About from './routes/About';
import Tictac from './routes/Tictac';
import {Route,Routes} from 'react-router-dom'

function App() {
  return (
    <>
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path ="/product" element={<Product/>}/>
      <Route path ="/about" element={<About/>}/>
      <Route path ="/contact" element={<Contact/>}/>
      <Route path ="/tictac" element={<Tictac/>}/>
      
    </Routes>
    </>
  );
}

export default App;
