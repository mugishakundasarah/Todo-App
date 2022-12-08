import React, { useState } from "react";
import CreateToDo from "./CreateTodo";
import "../../styles/Todo.css"
import Todo from "./Todo";

const Todos = () => {
    let [todos, setTodos] = useState([])
    console.log(todos)
    return (
        <div className="mx-auto h-5/6 w-2/4 bg-dark-blue rounded">
            <CreateToDo 
                todos = {todos}
                setTodos = {setTodos}
            />
            <div className="w-5/6 mt-4 h-[90%] mx-auto flex flex-col">
                <button className="text-red flex text-lg self-end"> 
                    <img src="assets/Trash.svg" alt="trash-button" />
                Remove All</button>
                <div className="todos">
                    {
                        todos.map((todo,index) => <Todo id={index} todos ={todos} setTodos = {setTodos} todo={todo} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Todos