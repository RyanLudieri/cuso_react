import {useContext} from 'react'
import { CounterContext } from '../context/CounterContext'

const Product = () => {
  
  const {counter} = useContext(CounterContext);

  return (
    <div>
      <h1>Product</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  )
}

export default Product