import {useState} from 'react'
import {Form, InputGroup, Button} from 'react-bootstrap'

const Password = () =>{

    const[password, setPassword]=useState("");
    const[showPassword, setShowPassword]=useState(false);
return(
    <>
    <h2> Show/Hide Password </h2>

    <Form>
        <InputGroup>
            <Form.Control
            type={showPassword ? 'text' : 'password'}
            value={password}
            placeholder='Enter your password'
            onChange={e => setPassword(e.target.value)}
            />

            <Button
                onClick={e => setShowPassword(!showPassword)}
                >
                {showPassword ? 'Hide' : 'Show'}
            </Button>
        </InputGroup>
    </Form>

    </>
)
}

export default Password