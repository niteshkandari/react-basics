import { legacy_createStore } from "redux";

const initialState = {
    count:0
}
const reducer = (state = initialState,action) => {
    switch(action.type){
        case "INCREMENT":
            return {
                count:state.count+1
            }
        case "DECREMENT": 
            return {
                count:state.count-1
            }
        case "ADD_USER_GIVEN_VALUE":
            return {
                count:state.count + action.payload
            }
        case "RESET": 
            return {
                count:0
            }           
        default:
            return state
    }
}

export const store = legacy_createStore(reducer);