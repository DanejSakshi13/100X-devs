import { useEffect, useState } from "react";

/*

USE STATE EXAMPLE

export default function Example(){
    const [count,setCount]  = useState(0);
    return (
        <div>
            <button onClick={function(){
                setCount(count+1)
            }}>count is {count}</button>
        </div>
    )
}
 */





/* 

USE EFFECT EXAMPLE

export default function Example(){
  const [exchangeData, setExchangeData] = useState({});
  const [bankData, setBankData] = useState({});
console.log("this is re-render")

 
//   setTimeout(()=>{
//     setBankData({income : 100});
//   },3000);

//   setTimeout(() => {
//     setExchangeData({
//       returns: 100
//     });
//   }, 1000);




    useEffect(function(){
        setTimeout(()=>{
            setBankData({income : 100});
          },3000);
    },[])


    useEffect(()=>{
        setTimeout(()=>{
            setExchangeData({returns : 100});
          },3000);
    },[])

  const incomeTax = (bankData.income + exchangeData.returns) * 0.3;

  return (
    <div>
        hi there, your income tax returns are {incomeTax}
    </div>
  )
}

*/








export default function Example(){
    const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    // Some operation to get the data
    setExchange1Data({
      returns: 100
    });
  }, [])

  useEffect(() => {
    // Some operation to get the data
    setExchange2Data({
      returns: 100
    });
  }, [])

  useEffect(() => {
    // Some operation to get the data
    setTimeout(() => {
      setBankData({
        income: 100
      });
    })
  }, [])

  const cryptoReturns = exchange1Data.returns + exchange2Data.returns;
  
  const incomeTax = (cryptoReturns + bankData.income) * 0.3

  return (
    <div>
        hi there, your income tax returns are {incomeTax}
    </div>
  )
}
