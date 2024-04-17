import { useCallback, useEffect, useMemo, useState, memo , useRef} from "react";

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





/*

USE MEMO EXAMPLE 

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
console.log("hi here before")
  const cryptoReturns = useMemo(()=>{
    return exchange1Data.returns + exchange2Data.returns;
  },[exchange1Data, exchange2Data])

  console.log("hi here after")

  const incomeTax = (cryptoReturns + bankData.income) * 0.3

  return (
    <div>
        hi there, your income tax returns are {incomeTax}
    </div>
  )
}

*/

/*

USE CALL BACK EXAMPLE 



export default function Example() {
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    // Some operation to get the data
    setExchange1Data({
      returns: 100
    });
  }, []);

  useEffect(() => {
    // Some operation to get the data
    setExchange2Data({
      returns: 100
    });
  }, []);

  useEffect(() => {
    // Some operation to get the data
    setTimeout(() => {
      setBankData({
        income: 100
      });
    }, 1000); // Added timeout duration
  }, []); // Added empty dependency array

  const calculateCryptoReturns = useCallback(() => {
    return exchange1Data.returns + exchange2Data.returns;
  }, [exchange1Data, exchange2Data]);

  const cryptoReturns = calculateCryptoReturns(); // Added definition of cryptoReturns

  const incomeTax = (cryptoReturns + bankData.income) * 0.3;

  return (
    <div>
      <CryptoGainsCalculator calculateCryptoReturns={calculateCryptoReturns} />
    </div>
  );
}

const CryptoGainsCalculator = memo(function ({ calculateCryptoReturns }) {
  console.log("crypto child re-render");
  return (
    <div>
      Your crypto returns are {calculateCryptoReturns()}
    </div>
  );
});

CryptoGainsCalculator.displayName = 'CryptoGainsCalculator';

*/


/*

USE REF EXAMPLE
useRef hook is used here to maintain state (clickCount) across renders without causing re-renders 
when its value changes.


export default function Example(){
  const clickCount = useRef(0);       //reference holds a mutable value, initialized to 0.

  const handleClick = () => {           //executed when the button is clicked
    clickCount.current += 1;               // increment the current value by 1
    console.log("Button clicked", clickCount.current, "times");
  };

  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}


*/