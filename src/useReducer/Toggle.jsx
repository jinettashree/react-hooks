import { useReducer } from "react";

const initialState = {isOn: false};

const reducer = (state, action) => {
    switch(action.type) {
        case "TOGGLE":
            return{isOn: !state.isOn};
        default:
            return state;
    }
}

const Toggle = () =>{

    const[state, dispatch] = useReducer(reducer, initialState)

    return(
        <>
        <h2> Light is {state.isOn ? "On" : "Off"}</h2>
        <button onClick={() => dispatch({type: "TOGGLE"})}>
            Toggle
        </button>
        </>
    )

}

export default Toggle