import { useEffect, useState } from "react";
import axios from "axios";

function useCurrencyInfo(currency){
    const [data, setData] = useState({})

    useEffect(() => {

        const fetchData = async () => {
            try{
                const response = await axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
                const data = response.data[currency]

                setData(data)
            }catch(err){
                console.log(err)
            }
        }

        fetchData()        
    }, [currency])
    return data
}

export default useCurrencyInfo;