import UsersSagas from './users.js'
import {all} from 'redux-saga/effects'

export default function* rootSaga(){
    yield all([                          //resolve all promises simulaneously- with the forked sagas and
    ...UsersSagas                        //waiting for all responses before anything else.
  ])                                     //spread operator creates a new array from usersSagas array
}

