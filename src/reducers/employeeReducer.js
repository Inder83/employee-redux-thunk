import {ADD_EMPLOYEE, LIST_EMPLOYEES, EDIT_EMPLOYEE, DELETE_EMPLOYEE} from '../actions/types';

export default (state = {}, action) => {
    switch(action.type) {
        case ADD_EMPLOYEE:
            return {...state, [action.payload.id]: action.payload};
        case LIST_EMPLOYEES:
            const newState = {};
            for(let i in action.payload) {
                const obj = action.payload[i];
                newState[obj.id] = obj;
            }
            return newState;
        default:
            return state;
    }
};