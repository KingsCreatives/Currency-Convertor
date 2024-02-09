import { useState } from 'react'
import './App.css'
import useCurrencyInfo  from '../src/hooks/useCurrencyInfo';


function App() {
  const [amount , setAmount] = useState(0)
  const [from , setFrom] = useState("ghs")
  const [to, setTo] = useState("usd")
  const [conversionResult, setConversionResult] = useState(0)

  const currencyData = useCurrencyInfo(from)
  const currencyOptions = Object.keys(currencyData)

  const currencyConversion = setConversionResult(amount * currencyOptions[to])

  const swap = () => {
    setFrom(setTo)
    setTo(setFrom)
    setConversionResult(amount)
    setAmount(conversionResult)
  }



  return (
    <div
    className='flex justify-center items-center mx-auto my-11 py-4  bg-gray-700 text-gray-500'
    >
       
    </div>
  )
}

export default App
