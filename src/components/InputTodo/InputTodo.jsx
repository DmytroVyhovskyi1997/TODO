import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { addTodos } from "../../redux/operations";
import { getTodos } from "../../redux/selectors";
import { BoxForm, Button, Input } from "./InputTodo.styled";

const InputTodo = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("");
  const todos = useSelector(getTodos);

  useEffect(() => {
    const storedInputText = localStorage.getItem("inputText");
    if (storedInputText) {
      setInputText(storedInputText);
    }
  }, []);

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


