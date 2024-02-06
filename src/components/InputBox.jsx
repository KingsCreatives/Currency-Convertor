import React from 'react'


function InputBox(
       {
        amount,
        selectedCurrency = "usd",
        onAmountChange,
        currencyOption = [],
        onCurrencyChange, 
        className = ""
       }
) {
  return (
    <div className={`${className} flex border border-gray-400  rounded-md`}>
            <div className='w-1/3 px-2 py-1 '>
                <input type="number"
                 className='outline-none
                 px-2 py-1  bg-gray-700'
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
                
            </div>

            <div className='w-2/3 bg-gray-700'>
                <select
                 className='w-full outline-none cursor-pointer px-2 py-1 bg-transparent'
                 value={selectedCurrency}
                 onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                   {
                    currencyOption.map((currency) => (
                        <option 
                        className="bg-gray-800 text-white"
                        value= {currency} 
                        key={currency}>{currency}
                        
                        </option>
                    ))
                   }
                </select>
            </div>
       </div>
  )
}

export default InputBox