import React from 'react';
import './TodoItem.css';

function TodoItem({ todo, index, toggleTodo, removeTodo }) {
    return (
        <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <span onClick={() => toggleTodo(index)}>{todo.text}</span>
            <button onClick={() => removeTodo(index)}>Remove</button>
        </div>
    );
}

export default TodoItem;
