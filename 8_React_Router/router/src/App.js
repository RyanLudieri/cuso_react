import './App.css';

// 1 - config react router
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// pages
import Home from './pages/Home';
import About from './pages/About';

//components
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
       {/*2 - links com react router*/}
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
