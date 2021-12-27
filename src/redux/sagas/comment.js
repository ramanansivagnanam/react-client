import { call, takeEvery, fork } from 'redux-saga/effects';
import * as actions from '../actions/Actions';


function* getComments() {
    try {
        // yield call(fetch(`http://localhost:5000/posts/comment`));
    } catch(error) {
        console.error(error);
    }
}

function* watchGetCommentsSaga(){
    yield takeEvery(actions.getComments,getComments);
}

const commentSagas = [
    fork(watchGetCommentsSaga)
];

export default commentSagas;