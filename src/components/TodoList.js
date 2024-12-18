import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "../store/todoSlice";

function TodoList() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState("");
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState("");

    const handleAddTodo = () => {
        if (newTodo.trim()) {
            dispatch(addTodo(newTodo));
            setNewTodo("");
        }
    };

    const handleUpdateTodo = (id) => {
        if (editText.trim()) {
            dispatch(updateTodo({ id, text: editText }));
            setEditId(null);
            setEditText("");
        }
    };

    return (
        <div className="todo-container">
            <h1>Todo List</h1>
            <div className="todo-input">
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Add a new todo..."
                />
                <button onClick={handleAddTodo}>Add</button>
            </div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {editId === todo.id ? (
                            <>
                                <input
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                />
                                <button onClick={() => handleUpdateTodo(todo.id)}>Save</button>
                            </>
                        ) : (
                            <>
                                <span>{todo.text}</span>
                                <button onClick={() => dispatch(deleteTodo(todo.id))}>
                                    Delete
                                </button>
                                <button onClick={() => setEditId(todo.id) || setEditText(todo.text)}>
                                    Edit
                                </button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
