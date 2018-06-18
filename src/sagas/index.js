import { fork, all, call, take } from "redux-saga/effects";
import { LOAD_APPLICATION } from "../actions";
import { fetchApplicationData } from "../services/network";

//worker saga
function* loadApplication(requestMethod, url) {
  console.log("worker saga run");
  yield call(fetchApplicationData, requestMethod, url);
}

// watcher saga
export function* watchLoadApplication() {
  while (true) {
    const { params } = yield take(LOAD_APPLICATION);
    console.log("watcher saga run");
    yield fork(loadApplication, params);
  }
}

export default function* rootSaga() {
  yield all([fork(watchLoadApplication)]);
}
