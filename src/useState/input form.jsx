import { useState } from 'react';
import {Form, Button} from 'react-bootstrap';

function inputPage(){

    const[name, setName]=useState("");
    const[submit, setSubmit]=useState("");

return(
<>
    <Form.Group className="text-start">
        <Form.Label>Name</Form.Label> <br/>
            <Form.Control
            value={name}
            onChange={(e)=>setName(e.target.value)}
            type="Text" 
            placeholder="Enter your Name" />
    </Form.Group>

    <Button
    className="mt-3"
    onClick={()=>setSubmit(name)}>
        Submit
    </Button>
    {submit && <h1>Hello {submit}!</h1>}
</>
);
}

export default inputPage;