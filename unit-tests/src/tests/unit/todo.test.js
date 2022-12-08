import React from 'react';
import { render, screen } from "@testing-library/react"
import Todo from '../../components/Todos/Todo'

describe('Todo list test suites', () => {
    test('should show the task name', () => {
        render(
            <Todo id={1} 
                  todos={[{name: "oneeeeeeeee"}, {name: "maliiiiiii"}]}
                   todo = {{name: "oneeeeeeeee"}}
                />)
        
        let inputEl = screen.getByTestId("editTodo").value 
        expect(inputEl).toBe("oneeeeeeeee")
    })
})