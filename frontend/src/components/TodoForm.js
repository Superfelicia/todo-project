import {useState} from "react";

const TodoForm = () => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text'
                   placeholder='add todo'
                   //value={input}
                   name='text'
                   //onChange={}
            />
            <button>Add todo</button>
        </form>
    )
}

export default TodoForm;