import {ADD_EMPLOYEE, DELETE_EMPLOYEE, LIST_EMPLOYEES} from '../actions/types';

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
        case DELETE_EMPLOYEE: 
            const nState = {...state};
            for(let i in nState) {
                const obj = nState[i];
                if(obj.id === action.payload) {
                    delete nState[obj.id];
                }
            }
            return nState;
        default:
            return state;
    }
};