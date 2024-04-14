import PropTypes from 'prop-types';
import { useState } from 'react';

let counter = 4;

export default function TodoApp(){
    const [todos,setTodos] = useState([
        {id:1,title:"Gym",desc:"Leg day"},
        {id:2,title:"Cook",desc:"Eggs"},
        {id:3,title:"Grocery",desc:"Snacks"}
    ])

    function addTodo(){
        setTodos([...todos,{
            id:counter++,title:Math.random(),desc:Math.random()
        }])
    }

    // const newTodos = [];
    // for(let i = 0 ; i < todos.length; i++){
    //     newTodos.push(todos[i]);
    // }
    // setTodos.push({
    //     id:4,
    //     title:Math.random(),
    //     desc:Math.random()
    // })

    return(
        <div>
            <button onClick={addTodo}>Add a Todo</button>
            {todos.map(todo => <Todo key={todo.id} title={todo.title} desc={todo.desc} />)} 
        </div>
    )
}


function Todo({title,desc}){
    return(
        <div>
            <h1>{title}</h1>
            <p>{desc}</p>
        </div>
    )

}

Todo.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
};