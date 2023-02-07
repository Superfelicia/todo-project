import Todo from "./Todo";
import {useState} from "react";



const TodosList = () => {
    //getTodos från backend
    const [todos, setTodos] = useState([123, 'Hej']);


    const addTodo = (todo) => {
        const newTodos = [todo, ...todos];

        console.log(newTodos);
        setTodos(newTodos);
    }

    const removeTodo = () => {
        //remove
    }

    const completeTodo = () => {
        //complete
    }


    return (
        <div>
            <h2>What's the plan for today?</h2>
            <Todo setTodos={setTodos} todos={todos} onSubmit={addTodo}/>
        </div>
    )
}

export default TodosList;