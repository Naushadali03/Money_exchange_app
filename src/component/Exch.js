import React,{useState,useEffect} from 'react'

function Exch() {
    const [rate,setRate]=useState([]);
    useEffect(()=>{
        const url=`https://open.er-api.com/v6/latest/USD`;
        fun(url);
    },[])
    async function fun(url){
        const dt = await fetch(url);
        const jdt = await dt.json();
        console.log(jdt.rates);
        setRate(jdt.rates)
    }
  return (
    <div>
       {
        rate.map((arr)=>{
            return <p key={arr}>{rate.arr}</p>
        })
       }
    </div>
  )
}

export default Exch