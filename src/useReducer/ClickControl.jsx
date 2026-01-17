import { useReducer } from "react";

const initialState = {
    count: 0,
    isDisabled: false,
    showWarning: false
};

const reducer = (state, action) => {
    switch (action.type) {
        case "CLICK":
            const newCount = state.count + 1;

            return {
                count: newCount,
                isDisabled: newCount >= 5,
                showWarning: newCount > 3
            };

        case "RESET":
            return initialState;

        default:
            return state;
    }
};

const ClickControl = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <button
                onClick={() => dispatch({ type: "CLICK" })}
                disabled={state.isDisabled}
            >
                Click Me
            </button>

            <button onClick={() => dispatch({ type: "RESET" })}>
                Reset
            </button>

            <p>Clicked {state.count} times</p>

            {state.showWarning && (
                <p style={{ color: "red" }}>
                    Warning: Limit is near!
                </p>
            )}

            {state.isDisabled && (
                <p>Button disabled after 5 clicks</p>
            )}
        </div>
    );
};

export default ClickControl;
