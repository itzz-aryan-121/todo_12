import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchEmployees } from "../store/employeeSlice";

function EmployeeList() {
    const employees = useSelector((state) => state.employees || []); // Provide a default value
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchEmployees());
    }, [dispatch]);

    return (
        <div className="employee-container">
            <h1>Employee List</h1>
            <ul>
                {employees.length > 0 ? (
                    employees.map((employee) => (
                        <li key={employee.id}>{employee.name}</li>
                    ))
                ) : (
                    <li>No employees found</li>
                )}
            </ul>
        </div>
    );
}

export default EmployeeList;