import { useState, useEffect } from "react";

function Counter(){

    const[count, setCount]=useState(0);

    useEffect(()=>{
        const timer=setInterval(()=>{
            setCount(prev=>prev+1)
        },1000)

        return()=>{
            clearInterval(timer)
        }
    },[]);
    return(
        <div>
            <h3>Count:</h3>
            <h3>{count}</h3>
        </div>
    )
}

export default Counter;