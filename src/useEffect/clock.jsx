import { useState, useEffect } from "react";

function Clock(){
    const[time, setTime]=useState(new Date().toLocaleTimeString("en-GB"));

    useEffect(()=>{
        const interval=setInterval(()=>{
            setTime(new Date().toLocaleTimeString("en-GB"));
        },1000);

        return()=>(clearInterval(interval));
    },[])

return(
<div>
    <h3>Current Time:</h3>
    <h3>{time}</h3>
</div>
)
}

export default Clock;