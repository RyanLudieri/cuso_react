import './App.css';
import Cars from './components/Cars';

function App() {

  const cars = [
    {id: 1, color: "black", brand: "Ferrari", km: 15000},
    {id: 2, color: "white", brand: "Honda Civic", km: 50000},
    {id: 3, color: "green", brand: "VW", km: 5000},
  ]

  return (
    <div className="App">
      <h1 className="main-title">Cars</h1>
      <div className="car-card">
        {
          cars.map((car) => {
            return(
              <Cars
                key={car.id}
                color={car.color}
                brand={car.brand}
                km={car.km}
              />
            )})
        }
      </div>
    </div>
  );
}

export default App;
