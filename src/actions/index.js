import {ADD_EMPLOYEE, LIST_EMPLOYEES} from './types'
import employee from '../apis/employee'

export const addEmployeeAction = (employeeObj) => async dispatch => {
    const response = await employee.post("/emp", employeeObj);

    dispatch({type: ADD_EMPLOYEE, payload: response.data});
}

export const listEmployeeAction = () => async dispatch => {
    const response = await employee.get("/emp");

    dispatch({type: LIST_EMPLOYEES , payload: response.data});
}