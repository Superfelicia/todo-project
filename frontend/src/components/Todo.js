import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const Todo = (props) => {


    return (
        <>
            <TodoForm/>
            <div>
                <TodoItem />
            </div>
        </>
    )
}

export default Todo;