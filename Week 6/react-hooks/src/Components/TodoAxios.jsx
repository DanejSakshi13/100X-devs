/* 

TODO TO PRINT ALL TASKS ON RERENDER

import { useEffect, useState } from "react";
import axios from "axios";

export default function TodoAxios() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("https://sum-server.100xdevs.com/todos")
      .then(function(response) {
        setTodos(response.data.todos);
      });
  }, []);

  return (
    <>
      {todos.map(todo => <Todo title={todo.title} description={todo.description} />)}
    </>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}


*/

//TODO TO PRINT TODO'S ID WISE
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
export default function TodoAxios() {
  return (
    <div>
      <Todo id={1} />
    </div>
  );
}

function Todo({id}) {
    const [todo, setTodo] = useState({});
  
    useEffect(() => {
      fetch("https://sum-server.100xdevs.com/todo?id=" + id)
        .then(async function(res) {
          const json = await res.json();
          setTodo (json.todo);
        })
    }, [])
  
    return <div>
      <h1>
        {todo.title}
      </h1>
      <h4>
        {todo.description}
      </h4>
    </div>
  }
  
