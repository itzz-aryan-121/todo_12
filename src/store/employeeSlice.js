import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const employeeSlice = createSlice({
    name: "employees",
    initialState: [],
    reducers: {
        setEmployees: (state, action) => action.payload,
    },
});

export const { setEmployees } = employeeSlice.actions;

export const fetchEmployees = () => async (dispatch) => {
    try {
        const response = await axios.get("https://restful-api.dev/");
        dispatch(setEmployees(response.data));
    } catch (error) {
        console.error("Failed to fetch employees", error);
    }
};

export default employeeSlice.reducer;
