import { createStore, combineReducers  } from 'redux';

export const theDefaultReducer = (state = 0, action) => {
    switch(action.type){
        case "DEFAULT":
            return 10 + state;
        default:
            return state;
    }
}
export const firstNamedReducer = (state = 1, action) => {
    switch(action.type){
        case "PRIMERO":
            return 100 + state;
        default:
            return state;
    }
}
export const secondNamedReducer = (state = 2, action) => {
    switch(action.type){
        case "SEGUNDO":
            return 200 + state;
        default:
            return state;
    }
}

const defecto = combineReducers({
    primer1: firstNamedReducer,
    segundo1: secondNamedReducer
})

export default defecto;