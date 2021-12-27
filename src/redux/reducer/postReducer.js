import { Types } from "../types/Types";

const INITIAL_STATE = {
    posts: []
};

export const postReducer = (state = INITIAL_STATE, { type, payload }) => {
        console.log(payload)
        switch (type) {
            case Types.GET_POST:
                return state;
            case Types.GET_POST_SUCCESS:
               return { ...state, posts: payload };       
            default:
                return state;
        }
};