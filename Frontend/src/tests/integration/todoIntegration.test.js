import { fireEvent, render, screen } from "@testing-library/react";
import CreateToDo from "../../components/Todos/CreateTodo"

describe('Todo integration tests', () => {
    test("todo should be added to the global todos after create" , () => { 
        const setStateMock = jest.fn();
        const useStateMock = (useState) => [useState, setStateMock]
        jest.spyOn(React, 'useState').mockImplementation(useStateMock)
        
        render(<CreateToDo todos={[{name: "oneeeeeeeee", Done: false}]} setTodos={setStateMock}/>);
        
        const inputEl = screen.getByTestId("todo-input");
        let buttonEl = screen.getByTestId("todo-input-button");
        fireEvent.change(inputEl, {target : {value: "maliiiiiii"}})
        fireEvent.click(buttonEl)

        expect(setStateMock).toBeCalledWith(([{name: "oneeeeeeeee", Done: false}, {name: "maliiiiiii", Done: false}]))
    })
})