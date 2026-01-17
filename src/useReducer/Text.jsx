import { useReducer } from "react"

const initialState = {
    isVisible: false,
    count : 0,
    textColor: "red",
};

const reducer = (state, action) =>{
    switch(action.type){
        case "TOGGLE_TEXT":
            return{
                ...state,
                isVisible: !state.isVisible
            };

        case "INCREMENT":
            return{
                ...state,
                count: state.count + 1
            };

        case "TEXT_COLOR":
            return{
                ...state,
                textColor: state.textColor === "red" ? "yellow" : "red"
            }

        case "RESET":
            return initialState;
        default:
            return state;
    }

}

const Text = () =>{

    const[state, dispatch] = useReducer(reducer, initialState);
return(
    <div>
        <button onClick={() => {
            dispatch({type:"TOGGLE_TEXT"});
            dispatch({type: "INCREMENT"});
            dispatch({type: "TEXT_COLOR"});
        }}>
            Toggle 
        </button>

        <button onClick={() => {
            dispatch({type: "RESET"});
        }}>
            Resest
        </button>

        <p> Clicked {state.count} times</p>

        {state.isVisible && <h3 style={{color: state.textColor}}> Hello User!!! </h3>}
    </div>
)
}

export default Text