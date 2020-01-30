import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// import studentReducer from 'reducers/studentReducer';
import studentReducer from 'store/student/reducer';
import StudentsForm from 'components/StudentsForm';

const store = createStore(
  studentReducer //,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <StudentsForm />
  </Provider>,
  document.getElementById('root')
);
