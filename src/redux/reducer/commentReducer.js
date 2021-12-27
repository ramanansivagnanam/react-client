import { Types } from "../types/Types";

const INITIAL_STATE = {
    comments: []
};

export const commentReducer = (state = INITIAL_STATE, { type, payload }) => {
        switch (type) {
            case Types.GET_COMMENT:
                return {
                    ...state,
                    comments : payload,
                }        
            default:
                return state;
        }
};