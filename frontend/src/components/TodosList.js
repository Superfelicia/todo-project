import Todo from "./Todo";
import {useState} from "react";



const TodosList = () => {
    //getTodos från backend
    const [todos, setTodos] = useState([]);


    const addTodo = (todo) => {
        const newTodos = [todo, ...todos];

        setTodos(newTodos);
    }


    return (
        <div>
            <h2>What's the plan for today?</h2>
            <Todo/>
        </div>
    )
}

export default TodosList;