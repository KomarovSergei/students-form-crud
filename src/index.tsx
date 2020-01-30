import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from 'store';
import StudentsForm from 'components/StudentsForm';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <StudentsForm />
  </Provider>,
  document.getElementById('root')
);
