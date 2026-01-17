import { useReducer } from "react";

const initialState = {
    value: "",
    isSubmitted: false,
    error: ""
};

const reducer = (state, action) => {
    switch (action.type) {
        case "CHANGE":
            return {
                ...state,
                value: action.payload,
                error: ""
            };

        case "SUBMIT":
            if (state.value.trim() === "") {
                return {
                    ...state,
                    error: "Input cannot be empty",
                    isSubmitted: false
                };
            }

            return {
                ...state,
                isSubmitted: true,
                error: ""
            };

        case "RESET":
            return initialState;

        default:
            return state;
    }
};

const UserForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h2>Simple Form</h2>

            <input
                type="text"
                value={state.value}
                onChange={(e) =>
                    dispatch({
                        type: "CHANGE",
                        payload: e.target.value
                    })
                }
            />

            <button onClick={() => dispatch({ type: "SUBMIT" })}>
                Submit
            </button>

            <button onClick={() => dispatch({ type: "RESET" })}>
                Reset
            </button>

            {state.error && <p style={{ color: "red" }}>{state.error}</p>}

            {state.isSubmitted && (
                <p style={{ color: "green" }}>
                    Form submitted successfully!
                </p>
            )}
        </div>
    );
};

export default UserForm;
