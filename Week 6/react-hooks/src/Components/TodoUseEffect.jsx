import { useEffect, useState } from "react";

export default function TodoUseEffect() {

    const [todos, setTodos] = useState([]);

    /* 
    useEffect(() => {
        fetch("https://sum-server.100xdevs.com/todos")
        .then(async (res) =>{
            const json = await res.json();
            setTodos(json.todos);
        })
    }, [])
    */



    // to fetch every 5 seconds 
    useEffect(() => {
        setInterval(() => {
        fetch("https://sum-server.100xdevs.com/todos")
        .then(async (res) =>{
            const json = await res.json();
            setTodos(json.todos);
        })
    },5000)
    }, [])

  return <div>
    {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
  </div>;
}

function Todo({title,description}){
    return <div>
        <h1>{title}</h1>
        <h4>{description}</h4>
    </div>
}
