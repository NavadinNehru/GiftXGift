import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Trending from './Pages/Trending';
import Shop from './Pages/Shop'
import Category from './Pages/Category';
// import Product from './Pages/Product';
import Signup from './Pages/Signup';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import Login from './Pages/Login';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/trending' element={<Trending/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;