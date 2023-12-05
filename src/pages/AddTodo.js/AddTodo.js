import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, BoxTitle, ButtonDelete } from "./AddTodo.styled";
import { getError, getFilter, getIsLoading, getTodos } from "../../redux/selectors";
import { fetchTodos, deleteTodos } from "../../redux/operations";
import InputTodo from "../../components/InputTodo/InputTodo";
import { Loader } from "../../components/Loader/Loader";

const AddTodo = () => {
  const dispatch = useDispatch();
  const todos = useSelector(getTodos);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);


  const findTodos = () => {
    const normalizedFilter = filter ? filter.toLowerCase() : '';

    if (!todos) {
      return [];
    }

    return todos.filter(todo =>
      todo.title.toLowerCase().includes(normalizedFilter)
    );
  };
  const filteredContacts = findTodos();
  return (
    <> 
    {isLoading && <Loader/>}

      {error && <p>Error: {error}</p>}
      <InputTodo />
      <Box>
        {filteredContacts.map(({ id, title }) => (
          <BoxTitle key={id}>
            {title}
            <ButtonDelete
              onClick={() => 
                dispatch(deleteTodos(id))
              }
            />
          </BoxTitle>
        ))}
      </Box>
    </>
  );
};

export default AddTodo;
