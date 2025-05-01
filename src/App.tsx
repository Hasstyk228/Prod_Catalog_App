import Home from "./components/pages/home/home";
import { Routes, Route } from 'react-router-dom';
import ShopingCart from "./components/pages/shoping_cart/shoping_cart";
import Header from "./components/elements/header/header";


function App() {
  return (
    <div className="main">
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shoping_cart" element={<ShopingCart/>} />
    </Routes>
    </div>
    
  );
}

export default App
