import Home from "./components/pages/home/home";
import { Routes, Route } from 'react-router-dom';
import { useState } from "react";
import Header from "./components/elements/header/header";


function App() {
  
    const [shopCart,setShopCart] = useState<boolean>(true)

  return (
    <div className="main">
    <Header shopCart={shopCart} setShopCart={setShopCart}/>
    <Routes>
        <Route path="/" element={<Home shopCart={shopCart} setShopCart={setShopCart} />}/>
    </Routes>
    </div>
    
  );
}

export default App
