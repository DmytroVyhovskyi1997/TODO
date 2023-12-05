import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { addTodos } from "../../redux/operations";
import { getTodos } from "../../redux/selectors";
import { BoxForm, Button, Input } from "./InputTodo.styled";
import { useState } from "react";

const InputTodo = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("");
  const todos = useSelector(getTodos);

  const handleChange = (event) => {
    const { value } = event.target;
    setInputText(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nameExists = todos.some(
      (todo) => todo.title.toLowerCase() === inputText.toLowerCase()
    );

    if (nameExists) {
      alert(`${inputText} is already in todos`);
    } else {
      const todo = {
        id: nanoid(),
        title: inputText,
      };
      dispatch(addTodos(todo));
      setInputText("");
      localStorage.setItem("inputText", "");
    }
  };

  return (
    <BoxForm onSubmit={handleSubmit}>
      <Input type="text" value={inputText} onChange={handleChange} />
      <Button type="submit">Add</Button>
    </BoxForm>
  );
};

export default InputTodo;
