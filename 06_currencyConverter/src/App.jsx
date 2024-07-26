import React from 'react'
import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import InputBox from './componenetsFile/ConvertBox'

function App() {
  const [amount, setAmount] = useState(null)
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

 const convert = () => {
  setConvertedAmount(amount * currencyInfo[to])

 }

  return (
    <div
    className="w-full justify-center h-screen flex-row flex-wrap gap-7 bg-cover bg-no-repeat md:bg-blend-darken "
    style={{
        backgroundImage: `url('https://images.pexels.com/photos/3943720/pexels-photo-3943720.jpeg?auto=compress&cs=tinysrgb&w=600')`,
    }}

    
>

    <div className='flex-1 max-w-xl ml-8 py-28'>
        <p className='text-justify text-black/80 font-bold text-8xl '>Currency Converter.
             
        </p>
    </div>

    <div className="w-full">
        <div className="w-full max-w-md ml-auto mr-16 mt-[-180px] border rounded-lg p-5 backdrop-blur-sm bg-black/20">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    
                   convert()
                }}
            >
                <div className="w-full mb-1">
                    <InputBox
                        label="From"
                        // amount={null}
                        currencyOptions={options}
                        onAmountChange={(amount) => {
                          setAmount(amount)
                        }}
                        onCurrencyChange={(currency) => {
                          setFrom(currency)
                        }}
                        defaultCurrency={from}
                    />
                </div>
                <div className="relative w-full h-0.5">
                    <button
                        type="button"
                        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                        onClick={swap}
                    >
                        swap
                    </button>
                </div>
                <div className="w-full mt-1 mb-4">
                    <InputBox
                        label="To"
                        amount={convertedAmount}
                        currencyOptions={options}
                        onCurrencyChange={(currency) => {
                          setTo(currency)
                        }}
                        defaultCurrency={to}
                        amountDisable
                    />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                    Convert   {from.toUpperCase()} to {to.toUpperCase()}
                </button>
            </form>
        </div>
    </div>
</div>
);
}

export default App
