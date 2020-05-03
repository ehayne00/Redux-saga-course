import {
  takeEvery,
  call,
  fork,
  put,
  takeLatest,
  take,
} from "redux-saga/effects";
import * as actions from "../actions/users.js";
import * as API from "../API/users.js";

//a while(true) statement in a generator will cause a loop. for instance, if there are 3
//yields in a fucntion like below, we could call .next() on the func, and in our console, if we
//console.log it will say 1,2 or 3, with done: false or done: true. When done is equal to true, that
//means the function has finished executing everything inside of it, therefore, a while(true)
//would start it off again.

//function* testing(){                     in render of component put console.log(testing().next())
//     yield1;                             several times.
//     yield2;                             would be the same as a while(true) before the yields
//     yeild3;                             in the function.
// }

//takeEvery is actually running a while(true) loop

function* getUsers() {
  try {
    const result = yield call(API.getUsers); //call ensures that what ever is inside of it is completed
    //console.log(result);                       //before anything after it is run. ie- promise resolved.
    yield put(
      actions.getUsersSuccess({
        //console.log helps us see how the data is returned
        items: result.data.data, //the items were nested in data.data
      })
    ); //put then calls on a redux action to update redux state
  } catch (e) {
    yield put( actions.usersError({
      error: "An error occured when trying to get users"
    }))
  }
}

function* watchGetUsersRequest() {
  yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}

function* createUser(action) {
  try {
    yield call(API.createUser, {
      firstName: action.payload.firstName,
      lastName: action.payload.lastName,
    });
    yield call(getUsers);
  } catch (e) {
    yield put( actions.usersError({
      error: "An error occured when trying to create user"
    }))
  }
}

function* watchCreateUserRequest() {
  yield takeLatest(actions.Types.CREATE_USER_REQUEST, createUser);
}

function* deleteUser({userId}){
  try{
    yield call(API.deleteUser, userId)
    yield call(getUsers)
  }
  catch(e){
    yield put( actions.usersError({
      error: "An error occured when trying to delete user"
    }))
  }
}

function* watchDeleteUserRequest() {
  while (true) {
    const action = yield take(actions.Types.DELETE_USER_REQUEST); //take just returns the action that was dispatched
    yield call(deleteUser, {
      userId: action.payload.userId
    })
  }
}

const usersSagas = [
  //fork creates a child process, ie branches the tree
  fork(watchGetUsersRequest), //this means children can be running in prallel rather than waiting
  fork(watchCreateUserRequest), //for one to complete. And we are seperating get/delete/post etc.
  fork(watchDeleteUserRequest),
];

export default usersSagas;
