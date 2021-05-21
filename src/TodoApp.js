import React from 'react'
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilter from "./components/VisibilityFilter";

export default function TodoApp(){
  return (
    <div className="todo-app">
      <h1>
        Todo List
      </h1>
      <AddTodo />
      <TodoList />
      <VisibilityFilter />
    </div>
  )
}