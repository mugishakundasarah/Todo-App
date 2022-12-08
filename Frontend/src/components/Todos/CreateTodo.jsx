import React, { useRef, useState } from 'react'
const CreateToDo = ({todos, setTodos}) => {
    const inputEl = useRef()
    let [newToDo, setNewToDo] = useState("")
    let [disable, setDisable] = useState(true)
    let [error, setError] = useState(null)
    const onChange = () => {
        setError(null)
        setNewToDo(inputEl.current.value)
        setDisable(inputEl.current.value === "")        
    }

    const onSubmit = () => {
        if(!validate()) {
            setTodos([...todos, {name: newToDo, Done:false}])
            setNewToDo("")
        }
        else return;
    }
    const validate = () => {
        if(newToDo === ""){
            setError("Please enter a task before saving")
            return 1;
        }else if(newToDo.length < 3){
            setError("Please input a valid task")
            return 1;
        }
        todos?.map(todo => { if(todo?.name == newToDo) {
            setError("Task already added")
            return 1;
        } })
        return 0;
    }

    const enterPressed = (e) => {
        if(e.key == "Enter"){
            onSubmit()
        }
    }
    return (  
        <>
            <div className='flex bg-white justify-between px-4 py-2 rounded-t drop-shadow-xl'>
            <input 
                ref={inputEl}
                type={"text"} 
                className="w-full outline-none text-lg" 
                name="Todo" 
                placeholder='Enter your today tasks ....'
                data-testid = "todo-input"
                onChange={onChange}
                value = {newToDo}
                onKeyDown = {(e) => enterPressed(e)}
            />
            <button data-testid="todo-input-button" disabled={disable} onClick={onSubmit}>
                <img 
                    src='assets/Add_round_duotone.svg' 
                    className={ disable ? 'cursor-not-allowed' : "cursor-allowed"} 
                    alt='add_icon'
                />
            </button>
            </div>
            {error && <p className='text-red-500 mt-2'>{error}</p>}
        </>
    );
}
 
export default CreateToDo;