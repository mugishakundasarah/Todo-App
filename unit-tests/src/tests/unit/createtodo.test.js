import { fireEvent, render, screen } from "@testing-library/react";
import CreateToDo from "../../components/Todos/CreateTodo"

describe("<CreateTodo/>", () => {
    test('render todo input and button', () => {
        render(<CreateToDo/>);
        const inputEl = screen.getByTestId("todo-input");
        let buttonEl = screen.getByTestId("todo-input-button");
        expect(inputEl).toBeInTheDocument();
        expect(inputEl).toHaveAttribute("type", "text");
        expect(buttonEl).toBeInTheDocument()
    });

    test('Have text after writing', () => {
        render(<CreateToDo/>);
        const inputEl = screen.getByTestId("todo-input");
        inputEl.textContent = "Sarah"
        expect(inputEl).toHaveTextContent("Sarah")
    })

    test("should have the 'add' button disabled when initialised" , ()=> {
        render(<CreateToDo/>);
        let buttonEl = screen.getByTestId("todo-input-button");
        expect(buttonEl).toBeDisabled()
    })

    test("should have the 'add' button enabled when input is not empty" , ()=> {
        render(<CreateToDo/>);
        const inputEl = screen.getByTestId("todo-input");
        expect(screen.getByTestId("todo-input-button")).toBeDisabled()
        fireEvent.change(inputEl, {target : {value: "mali"}})
        expect(screen.getByTestId("todo-input-button")).toBeEnabled()
    })

})