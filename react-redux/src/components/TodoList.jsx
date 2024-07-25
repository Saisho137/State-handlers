import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, toggleTodo } from '../redux/todoSlice';

const TodoList = () => {
    const todos = useSelector((state) => state.todos.items);
    const dispatch = useDispatch();
    const [text, setText] = useState('');

    const handleAddTodo = () => {
        if (text.trim()) {
            dispatch(addTodo({ id: Date.now(), text, completed: false }));
            setText('');
        }
    };

    return (
        <div>
            <h2>Lista de Tareas</h2>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Nueva tarea"
            />
            <button onClick={handleAddTodo}>Agregar Tarea</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        {todo.text}
                        <button onClick={() => dispatch(toggleTodo(todo.id))}>
                            {todo.completed ? 'Deshacer' : 'Completar'}
                        </button>
                        <button onClick={() => dispatch(removeTodo(todo.id))}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
