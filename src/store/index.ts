import {combineReducers, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

import studentReducer from 'store/student/reducer'

const rootReducer = combineReducers({
  studentReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default function configureStore() {
  const store = createStore(
    studentReducer,
    composeWithDevTools()
  );

  return store;
}