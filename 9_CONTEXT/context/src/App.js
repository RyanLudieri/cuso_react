import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//components
import NavBar from './components/NavBar';

//pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Product" element={<Product/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
