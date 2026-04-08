import React, { useState, useEffect } from 'react';
import './TodoList.css';

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };
        setTodos([...todos, newTodo]);
        setInputValue('');
    }
  };

  const toggleCompleted = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

    useEffect(() => {
    console.log(`Anzahl der To-Dos: ${todos.length}`);
    }, [todos]);

    return (
    <div>
      <input 
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        placeholder="Neues To-Do hinzufügen"
        />
        <ul className="todo-list">
            {todos.map(todo => (
                <li 
                    key={todo.id} 
                    className={`todo-item ${todo.completed ? 'completed' : ''}`}
                >
                    <button 
                        onClick={() => toggleCompleted(todo.id)}
                        className={`todo-checkbox ${todo.completed ? 'checked' : ''}`}
                    >
                        {todo.completed ? '✔' : ''}
                    </button>
                    <span className="todo-text">{todo.text}</span>
                </li>
            ))}
        </ul>
    </div>
  );
};

export default ToDoList;