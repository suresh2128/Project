//import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './frontend/home';
import Shop from './frontend/shop';
import Formzz from './frontend/vara';
import Cart from './frontend/cart';
import Formzzfemale from './frontend/female';
import About from './frontend/contact';
import Auth from './frontend/login';

function App() {
  // // useEffect(()=>{
  // //   if(!localStorage.getItem('username')){
  // //     alert("please login your account")
  // //     window.location.href='/'
  // //   }
  // },[])

  return (
    <div className="App-container">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Auth/>}></Route>  
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/vara' element={<Formzz/>}></Route>
        <Route path='/female' element={<Formzzfemale/>}></Route>
        <Route path='/contact' element={<About/>}></Route>
     
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;
