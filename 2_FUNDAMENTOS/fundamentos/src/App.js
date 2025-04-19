//styles / CSS
import './App.css';

// components
import FirstComponent from './components/FirstComponent'
import MyComponent from './components/MyComponent';
import TemplateExpressions from './components/TemplateExxpressions';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent/>
      <TemplateExpressions/>
      <MyComponent/>
    </div>
  );
}

export default App;
