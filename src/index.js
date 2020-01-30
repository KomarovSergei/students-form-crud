import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import studentsReducer from 'reducers/studentReducer';
import StudentsForm from './components/StudentsForm';

const store = createStore(
  studentsReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <StudentsForm />
  </Provider>,
  document.getElementById('root')
);
