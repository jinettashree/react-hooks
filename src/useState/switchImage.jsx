import { useState } from "react";
import { Button } from "react-bootstrap";

function switchImage(){
    const [image, setImage]=useState("https://picsum.photos/seed/picsum/200/300");

    const changeImage=()=>{
    setImage(
        image === "https://picsum.photos/seed/picsum/200/300"
        ? "https://picsum.photos/id/237/200/300"
        : "https://picsum.photos/seed/picsum/200/300"
    );
    };
return(
<>
<div>
    <img src={image}/>
    <Button
    onClick={changeImage}>
        Switch Image
    </Button>
</div>
</>
)
}

export default switchImage