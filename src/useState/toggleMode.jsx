import { useState } from "react";
import { Button } from "react-bootstrap"

function toggleDarkWhiteMode(){

    const[mode, setMode]=useState(true);

    const toggle=()=>{
        setMode(!mode)
    }
return(
<div style={{
    backgroundColor:mode ? "black" : "white",
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}}>
    <Button onClick={toggle}>
        {mode ? "Light" : "Dark"}
    </Button>
</div>
)
}

export default toggleDarkWhiteMode