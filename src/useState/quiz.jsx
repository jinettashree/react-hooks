import { useState } from "react";
import { Button, FormCheck } from "react-bootstrap"

function quiz(){
    const[answer, setAnswer]=useState("");
    const[submit, setSubmit]=useState("");

    const handleSubmit=()=>{
        if(answer==="Chennai"){
            setSubmit("Correct Answer!");
        }else{
            setSubmit("Wrong Answer!");
        }
    };

return(
<>
    <h3>What is the Capital city of Tamilnadu?</h3>
    <FormCheck
    type="checkbox"
    label="Tanjavur"
    value="Tanjavur"
    onChange={(e)=>setAnswer(e.target.value)}
    />

    <FormCheck
    type="checkbox"
    label="Chennai"
    value="Chennai"
    onChange={(e)=>setAnswer(e.target.value)}
    />

    <FormCheck
    type="checkbox"
    label="Madurai"
    value="Madurai"
    onChange={(e)=>setAnswer(e.target.value)}
    />

    <FormCheck
    type="checkbox"
    label="Coimbatore"
    value="Coimbatore"
    onChange={(e)=>setAnswer(e.target.value)}
    />

    <Button
    onClick={handleSubmit}>
        Submit
    </Button>

    {submit && <h2>{submit}</h2>}

</>
)
}

export default quiz