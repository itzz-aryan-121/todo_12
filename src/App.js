import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TodoList from "./components/TodoList";
import EmployeeList from "./components/EmployeeList";
import "./styles.css";

function App() {
    return (
        <Router>
            <div className="app">
                <nav>
                    <Link to="/todos">Todo List</Link>
                    <Link to="/employees">Employee List</Link>
                </nav>
                <Routes>
                    <Route path="/todos" element={<TodoList />} />
                    <Route path="/employees" element={<EmployeeList />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
