import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk"; // Import thunk as a named export
import todoReducer from "./todoSlice";
import employeeReducer from "./employeeSlice";

const store = configureStore({
    reducer: {
        todos: todoReducer,
        employees: employeeReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;