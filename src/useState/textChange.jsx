import { useState } from "react";
import { Button } from "react-bootstrap";

function textChange(){

    const[modify,setModify]=useState("Like");
return(
<>
    <Button
    className="mb-3"
    onClick={()=>setModify("Liked")}>
        Click
    </Button>

    <h3>{modify}</h3>
</>
)
}

export default textChange;