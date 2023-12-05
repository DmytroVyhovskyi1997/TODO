import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, BoxTitle, ButtonDelete, ButtonEdit, BokIcon, BoxMain  } from "./AddTodo.styled";
import { getError, getIsLoading, getTodos } from "../../redux/selectors";
import { fetchTodos, deleteTodos, updateTodos } from "../../redux/operations";
import InputTodo from "../../components/InputTodo/InputTodo";
import Loader from "../../components/Loader/Loader";

const AddTodo = () => {
  const dispatch = useDispatch();
  const todos = useSelector(getTodos);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const [editingId, setEditingId] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');

  const handleEdit = (id, title) => {
    setEditingId(id);
    setEditedTitle(title);
  };

  const handleSave = () => {
    dispatch(updateTodos({ id: editingId, title: editedTitle }));
    setEditingId(null);
    setEditedTitle('');
  };
  const handleDeleteTodo = userId => {
    dispatch(deleteTodos(userId));
  };

  return (
    <>
    <BoxMain>
    {error && <p>Error: {error}</p>}
      {isLoading && <Loader />}
      <InputTodo />
      <Box>
        {todos.map(({ id, title }) => (
          <BoxTitle key={id}>
            <BokIcon/>
            {editingId === id ? (
              <>
                <input
                  type="text"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                />
                <ButtonEdit onClick={handleSave}>Save</ButtonEdit>
              </>
            ) : (
              <>
                {title}
                <ButtonDelete onClick={() =>handleDeleteTodo(id)} />
                <ButtonEdit onClick={() => handleEdit(id, title)}>Edit</ButtonEdit>
              </>
            )}
          </BoxTitle>
        ))}
      </Box>
    </BoxMain>
    
    </>
  );
};

export default AddTodo;






