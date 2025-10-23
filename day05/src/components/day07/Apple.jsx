import { useEffect, useState } from "react";
export default function State(){
let clicked = 0
let [count,setCount]=useState(clicked)

let handleClick=()=>{
    setCount(count+1)
}

let fun1=()=>{
    if(count>=5){
        alert ('You clicked this more than five times')
    }
}
useEffect(fun1,[count])
// useEffect(()=>{
//     console.log ('UKI');
// },[])
return(
<>
<button onClick={handleClick}>clicked</button>
<h1>You clicked this {count} times</h1>
</>
)

}