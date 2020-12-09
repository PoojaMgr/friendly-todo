import { useRef } from "react";
import "./Child.css";

function Child({ setListItem, list }) {
    const textInput = useRef(null);

  const handleChange = (event) => {
    event.preventDefault();
    textInput.current.value.length > 0 ?
    setListItem(prevItems => [...prevItems, {
        id: textInput.current.value.split('').length,
        value: textInput.current.value,
        type: "grocery" || "electric"
      }]) : alert("No value has been added")

      
  };

  return (
    <form id="formId">
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        ref={textInput}
      />
      <button type="submit" className="button" onClick={handleChange}>
        Add
      </button>
    </form>
  );
}
export default Child;   