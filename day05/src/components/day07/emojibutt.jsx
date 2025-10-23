import { useEffect, useState } from "react"; 
import img1 from '/home/uki-dsa-08/Desktop/React/day05/src/components/day07/fire-svgrepo-com.svg'
import img2 from '/home/uki-dsa-08/Desktop/React/day05/src/components/day07/flower-105-svgrepo-com.svg'
import img3 from '/home/uki-dsa-08/Desktop/React/day05/src/components/day07/tree-svgrepo-com.svg'
import img4 from '/home/uki-dsa-08/Desktop/React/day05/src/components/day07/weather-drop-rain-svgrepo-com.svg'
export default function StateX(){
    let [count,setCount]=useState(0)
    let handleClick=()=>{
        setCount(count+1)
    }
    let [count2,setCount2]=useState(0)

    let handleClick2=()=>{
        setCount2(count2+1)
    }
    let [count3,setCount3]=useState(0)

    let handleClick3=()=>{
        setCount3(count3+1)
    }
    let [count4,setCount4]=useState(0)

    let handleClick4=()=>{
        setCount4(count4+1)
    }


    let fun1=()=>{
        if(count>=4){
            alert ('you clicked the fire four times')
        }
    }
      
    let fun2=()=>{
        if(count2>=3){
            alert ('you clicked the flower three times')
        }
     }
    let fun3=()=>{
        if(count3>=2){
            alert ('you clicked the tree two times')
        }
    }

    let fun4=()=>{
        if(count4>=6){
            alert ('you clicked the rain drop six times')
        }

    }
    useEffect(fun1,[count])
     useEffect(fun2,[count2])
     useEffect(fun3,[count3])
     useEffect(fun4,[count4])

    return(
        <>
        <button onClick={handleClick}><img src={img1} /></button>
        <button onClick={handleClick2}><img src={img2} /></button>
        <button onClick={handleClick3}><img src={img3} /></button>
        <button onClick={handleClick4}><img src={img4} /></button>



        </>
    )
    
    

    
    
     
    }