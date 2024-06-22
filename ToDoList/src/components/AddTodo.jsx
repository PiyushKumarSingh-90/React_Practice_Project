import React, { useState } from 'react';
import './AddTodo.css';

function AddTodo({ addTodo }) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input) return;
        addTodo(input);
        setInput('');
    };

    return (
        <form className="add-todo" onSubmit={handleSubmit}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add a new task"
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default AddTodo;
