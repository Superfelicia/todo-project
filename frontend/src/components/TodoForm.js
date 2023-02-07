import {useState} from "react";

const TodoForm = (props) => {
    const [value, setValue] = useState('');


    const handleChange = (e) => {
        setValue(e.target.value);
        console.log(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(props.todos);
        //gör en fetch för att POST nya todos
        //set state
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text'
                   placeholder='add todo'
                   value={props.input}
                   name='text'
                   onChange={e => handleChange(e)}
            />
            <button>Add todo</button>
        </form>
    )
}

export default TodoForm;