import { ADD_EVENT } from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch(action.type) {
        case ADD_EVENT:
            return {
                ...state,
                events: action.payload,


            }
        default:
            return state;
    }
}