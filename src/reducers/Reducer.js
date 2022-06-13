import { INCREASE, DECREASE } from "../actions/Action";

const changeValue = (state={value:0},action) => {
    switch(action.type){
        case INCREASE:
            return {value:state.value+1};
        case DECREASE:
            return {value:state.value-1};
        default:
            return state; 
    }
}

export default changeValue;