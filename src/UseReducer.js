import { useReducer } from "react";
const reducerFunction = (state, action) => {
  switch (action.type) {
    case "input_modified":
      return { input: action.event.target.value };
    case "submit":
      action.event.preventDefault();
      return { finalInput: state.input };
    case "reset":
      action.event.preventDefault();
      return { input: "", finalInput: "" };
    default:
      throw new Error();
  }
};
const UseReducer = () => {
  const [state, dispatch] = useReducer(reducerFunction, {
    input: "",
    finalInput: ""
  });

  return (
    <>
      <input
        type="text"
        onChange={(event) => dispatch({ type: "input_modified", event: event })}
        value={state.input}
      />
      <input
        type="submit"
        onClick={(event) => dispatch({ type: "submit", event: event })}
      />
      <input
        type="submit"
        value="Reset"
        onClick={() => dispatch({ type: "reset", event: event })}
      />
      <div>Here it's your input : {state.input}</div>
      <div>Submitted input value : {state.finalInput}</div>
    </>
  );
};
export default UseReducer;
