import { Types } from '../types/Types';

export const createPost = (title) => ({
    type : Types.CREATE_POST,
    payload : title
});

export const createComment = (comment) => ({
    type : Types.CREATE_COMMENT,
    payload : comment
});

export const getPosts = () => ({
    type : Types.GET_POST,
});

export const getComments = () => ({
    type : Types.GET_COMMENT,
});

export const getPostsSuccess = (posts) => ({
    type : Types.GET_POST_SUCCESS,
    payload: posts
});

export const getCommentsSuccess = (comments) => ({
    type : Types.GET_COMMENT_SUCCESS,
    payload: comments
})