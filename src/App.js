import styled from "styled-components";
import { InputTodo } from "./components/InputTodo";
import { TodoList } from "./components/TodoList";
import { TodoCounts } from "./components/TodoCounts";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputTodo, setInputTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const toggleComplete = (index) => {
    const newTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const onClickAdd = () => {
    if (inputTodo === "") return;
    const newTodos = [
      ...todos,
      { text: inputTodo, isCompleted: false, isEditing: false },
    ];
    setTodos(newTodos);
    setInputTodo("");
  };

  const onClickDelete = (index) => {
    if (window.confirm("本当に削除してもよろしいですか?") === false) return;
    const newTodos = todos.filter((_todo, i) => i !== index);
    setTodos(newTodos);
  };

  const onClickComplete = (index) => {
    toggleComplete(index);
  };

  const onClickEdit = (index) => {
    const newTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, isEditing: !todo.isEditing };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleEditInputChange = (e, index) => {
    const newTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, text: e.target.value };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const totalTodosCount = todos.length;
  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;
  const incompleteTodosCount = totalTodosCount - completedTodosCount;

  return (
    <SContainer>
      <InputTodo
        inputTodo={inputTodo}
        setInputTodo={setInputTodo}
        onClickAdd={onClickAdd}
      />
      <div>
        <TodoList
          todos={todos}
          onClickComplete={onClickComplete}
          handleEditInputChange={handleEditInputChange}
          onClickEdit={onClickEdit}
          onClickDelete={onClickDelete}
        />
        <TodoCounts
          totalTodosCount={totalTodosCount}
          completedTodosCount={completedTodosCount}
          incompleteTodosCount={incompleteTodosCount}
        />
      </div>
    </SContainer>
  );
}

const SContainer = styled.div`
  margin: 0 auto;
  margin-top: 10px;
  padding: 20px;
  width: 500px;
  border: 1px solid #ddd;
  background-color: #f5f5f5;
`;

export default App;
