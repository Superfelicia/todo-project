import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const Todo = (props) => {


    return (
        <>
            <TodoForm todos={props.todos} setTodos={props.setTodos} onSubmit={props.onSubmit}/>
            <div>
                <TodoItem />
            </div>
        </>
    )
}

export default Todo;