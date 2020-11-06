import history from '../History';
import {ADD_EMPLOYEE, LIST_EMPLOYEES, DELETE_EMPLOYEE} from './types'
import employee from '../apis/employee'

export const addEmployeeAction = (employeeObj) => async dispatch => {
    const response = await employee.post("/emp", employeeObj);

    dispatch({type: ADD_EMPLOYEE, payload: response.data});
    history.push("/");
}

export const deleteEmployeeAction = (id) => async dispatch => {
    await employee.delete(`/emp/${id}`);

    dispatch({type: DELETE_EMPLOYEE, payload: id});
}

export const listEmployeeAction = () => async dispatch => {
    const response = await employee.get("/emp");

    dispatch({type: LIST_EMPLOYEES , payload: response.data});
}