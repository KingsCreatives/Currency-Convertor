import { useState} from 'react'
import './App.css'
import InputBox from './components/InputBox'
import useCurrencyData from './hooks/useCurrencyData'



function App(){

  const [from, setFrom] = useState("ghs")
  const [to, setTo] = useState("usd")
  const [amount, setAmount] = useState()
   const [convertedAmount, setConvertedAmount] = useState()

  const currencyData = useCurrencyData(from)

  const currencyOptions = Object.keys(currencyData)

  const convert = () => {
    setConvertedAmount(amount * currencyData[to])
  }
  
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(0)
    setAmount(0)
  }
  
  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-gray-950'
    >
      <h1 className='text-white text-2xl -mb-12 pb-10'>Currency Convertor</h1>
       <div className='w-full -mt-12 pb-40'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}>
            <div className='w-full mb-1'>
              <InputBox
              label="from"
              amount={amount}
              onCurrencyChange={(currency) => setFrom(currency)}
              onAmountChange={(amount) => setAmount(amount)}
              selectedCurrency= {from}
              currencyOptions={currencyOptions}
              />
            </div>
            <div className='relative w-full h-0.5'>
              <button
              className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
              onClick={swap}
              >Swap</button>
            </div>
            <div className='w-full mb-1'>
              <InputBox
              label="to"
              amount={convertedAmount}
              currencyOptions={currencyOptions}
              amountDisabled
              selectedCurrency={to}
              onCurrencyChange={(currency) => setTo(currency)}
              />
            </div>
            <button
            type='submit'
            className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
            >Convert</button>
          </form>
        </div>
      </div>

      </div>
  )
}

export default App