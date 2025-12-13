import { useState, useEffect} from "react"

function DecreaseCountdown(){

    const[time,setTime]=useState(10);

    useEffect(()=>{
        const interval=setInterval(()=>{
            setTime(prev=>prev-1)
        },2000);

        return()=>{
            clearInterval(interval);
        }
    },[]);

    return(
    <div>
        <h3>Auto-Decreasing Countdown</h3>
        <h3>{time}</h3>
    </div>
    )
}

export default DecreaseCountdown