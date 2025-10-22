import { useState } from "react";
export default function Maths(){
    let num1 = 10
    let num2 = 5
    let [sum,setSum]=useState(0)
    let handleClick=()=>{
        setSum (num1+num2)
        console.log(sum)
    }
    let [divide,setDivide]=useState(0)
    let handleClick2=()=>{
        setDivide(num1/num2)
        console.log(divide)
    }
    let [substraction,setSubstraction]=useState(0)
    let handleClick3=()=>{
        setSubstraction(num1-num2)
        console.log(substraction)
    }
    let [multiply,setMultiply]=useState(0)
    let handleClick4=()=>{
       setMultiply(num1*num2)
        console.log(multiply)
    }
    return(
        <>
        <button onClick={handleClick}>Add</button>
        <button onClick={handleClick2}>divide</button>
       <button onClick={handleClick3}>substraction</button>
        <button onClick={handleClick4}>multiply</button>
        <h1>the answer for divide {divide}</h1>
        <h1>the answer for add {sum}</h1>
        <h1>the answer for substraction {substraction}</h1>
        <h1>the answer for multiply {multiply}</h1>

        </>

    )
}