import Home from "./components/pages/home/home";
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App
