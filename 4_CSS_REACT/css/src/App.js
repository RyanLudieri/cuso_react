import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
      {/*Css global */}
      <h1>React com CSS</h1>
      {/*Css componente*/}
      <MyComponent/>
      <p>Este parágrafo é do App.js</p>
    </div>
  );
}

export default App;
