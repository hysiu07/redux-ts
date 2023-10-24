import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { fetchFailed, fetchSucceeded, FETCH_USERS_REQUESTED } from './users/containers/redux';

// Worker saga will be fired on USER_FETCH_REQUESTED actions
 function* fetchUser(action: any):any {
   try {
      const user = yield fetch('https://jsonplaceholder.typicode.com/users').then(
            response => response.json())
      yield put(fetchSucceeded(user));
   } catch (e) {
      yield put(fetchFailed());
   }
}

// Starts fetchUser on each dispatched USER_FETCH_REQUESTED action
// Allows concurrent fetches of user
export function* mySaga() {
  yield takeLatest(FETCH_USERS_REQUESTED, fetchUser);
}