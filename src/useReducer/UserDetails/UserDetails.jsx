import './UserDetails.css';
import { useReducer } from "react";

const initialState = {
  name: "",
  email: "",
  isChecked: false,
  showTerms: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ENTER_NAME":
      return {
        ...state,
        name: action.payload,
      };
    case "ENTER_EMAIL":
      return {
        ...state,
        email: action.payload,
      };
    case "TOGGLE_CHECKBOX":
      return {
        ...state,
        isChecked: true,
      };
    case "TERMS_AND_CONDITIONS":
      return {
        ...state,
        showTerms: true,
      };
    default:
      return state;
  }
};

const UserDetails = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = () => {
    alert(
      `Submitted Successfully! \nName: ${state.name} \nEmail: ${state.email}`,
    );
  };
  return (
    <div className="container">
      <label>Name:</label>
      <input
        placeholder="Enter your name"
        value={state.name}
        onChange={(e) => {
          dispatch({
            type: "ENTER_NAME",
            payload: e.target.value,
          });
        }}
      />

      <label>Email: </label>
      <input
        type="email"
        placeholder="Enter your email"
        value={state.email}
        onChange={(e) => {
          dispatch({
            type: "ENTER_EMAIL",
            payload: e.target.value,
          });
        }}
      />

      <label>
        <input
          type="checkbox"
          checked={state.isChecked}
          onChange={(e) => {
            dispatch({
              type: "TOGGLE_CHECKBOX",
              payload: e.target.checked,
            });
          }}
        />

        <span
          className="terms-link"
          onClick={() => dispatch({ type: "TERMS_AND_CONDITIONS" })}
        >
          I agree to the Terms and Conditions
        </span>
      </label>

      <button disabled={!state.isChecked} onClick={handleSubmit}>
        {" "}
        Submit{" "}
      </button>

      {state.showTerms && (
        <div className="terms terms-box">
          <ul>
            <li>No fake information</li>
            <li>Submission cannot be undone</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
