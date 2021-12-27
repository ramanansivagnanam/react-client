import { call, takeEvery, fork, put } from "redux-saga/effects";
import * as actions from "../actions/Actions";
import axios from "axios";
import { Types } from "../types/Types";

function* getPostsAPI() {
  try {
    const posts = yield call(axios.get, "http://localhost:4000/posts");
    yield put(actions.getPostsSuccess(posts.data));
  } catch (error) {
    console.error(error);
  }
}

function* watchGetPostsSaga() {
  yield takeEvery(Types.GET_POST, getPostsAPI);
}

const postSagas = [fork(watchGetPostsSaga)];

export default postSagas;
