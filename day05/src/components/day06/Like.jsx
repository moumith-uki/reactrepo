import { useState } from "react";
import img from '/home/uki-dsa-08/Desktop/React/day05/src/components/day06/heart-svgrepo-com.svg'
export default function Like(){
    let clicked = 150;
    let [count,setCount]=useState(clicked);


    let handleClick=()=>{
        console.log(count)
        setCount(count+50)
    }
    let handleClick2=()=>{
        console.log(count)
        setCount(count-50)
    }
    return(
        <>
        <button onClick={handleClick}>Like</button>
        <button onClick={handleClick2}>Dislike</button>
        <img src={img} style={{height:`${count}px` ,width:`${count}px`,position:'fixed'}}/>
        
        </>
    )
}