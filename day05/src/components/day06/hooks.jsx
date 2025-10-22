import { useState } from "react";
export default function State(){
    let clicked = 0;
    let [count,setCount]=useState(clicked);


    let handleClick=()=>{
        console.log(count)
        setCount(count+1)
    }
    return(
        <>
        <button onClick={handleClick}>Click</button>
        <h1>button was clicked {count} times</h1>
        <h1 style={{fontSize:`${count}px`,textAlign:'ce'
        }}>New React</h1>
        </>
    )
}