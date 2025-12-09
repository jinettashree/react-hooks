import { useState } from "react";
import {Button} from "react-bootstrap";

function toggleParagraph(){
    const[show, setShow]=useState(false);

    const toggle=()=>{
        setShow(!show)
    }
return(
<>
    <Button
    onClick={toggle}>
    {show ? "Hide Pragraph" : "Show Paragraph"}
    </Button>

    {show &&(
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ex accusantium amet ad iste deserunt id cumque consectetur, voluptate doloremque molestias aperiam quibusdam atque consequuntur exercitationem fugit cupiditate ratione? Illum?
    </p>
    )}
</>
)
}

export default toggleParagraph