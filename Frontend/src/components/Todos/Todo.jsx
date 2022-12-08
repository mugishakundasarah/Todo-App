import HighlightOff from '@mui/icons-material/HighlightOff'
import { CheckCircle } from '@mui/icons-material';
import { useRef, useState } from 'react';

const Todo = (
{
    id,
    todo,
    todos, 
    setTodos,
}
) => {
    let [disable, setDisable] = useState(true);
    let [value, setValue] = useState(todo?.name)
    
    let todoName = useRef(null)
    
    let checkTodo = () => {
        let newTodos = todos
        newTodos[id].Done = !todo.Done
        setTodos([...newTodos])
    }

    let removeTodo = () => {
        let newTodos = todos
        newTodos.splice(id, 1)
        setTodos([...newTodos]) 
    }

    return (
        <div className='flex align-center bg-white mx-auto mt-3 justify-between rounded todo-container hover:cursor-pointer'>
            <input
                className="px-3 py-3 rounded todoEdit text-lg"
                value = {value}    
                disabled = {disable}
                ref = {todoName}
                onKeyDown = {(e) => enterPressed(e)}
                data-testid="editTodo"
            /> 
            <div className="flex justify-around items-center todoEdit-icons">
                <button onClick={checkTodo}>
                    <CheckCircle style={{fill: todo.Done ? "#2f80ed": "#BDBDBD"}} className="icon icon-check hover:cursor-pointer"/>
                </button>
                <button onClick={removeTodo}>
                    <HighlightOff style={{color: '#EB5757'}} className="icon icon-remove hover:cursor-pointer"/>
                </button>
            </div>            
        </div>
     );
}

export default Todo;