import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import moment from 'moment';
import nanoid from 'nanoid';

import studentsReducer from './reducers/studentReducer';

const assessments = Object.freeze({
  bad: 'неуд',
  satisfactorily: 'уд',
  good: 'хор',
  excellent: 'отл'
});

let initialState = [
  {
    id: nanoid(),
    fio: 'Komarov Sergei Valerievich',
    birthday: moment().format('MMM Do YY'),
    assessments: assessments.good
  },
  {
    id: nanoid(),
    fio: 'Pupkin Vasia Aleksandrovich',
    birthday: moment().format('MMM Do YY'),
    assessments: assessments.bad
  }
];

if (localStorage.getItem('students') === null) {
  localStorage.setItem('students', JSON.stringify(initialState));
} else {
  initialState = JSON.parse(localStorage.getItem('students'));
}

const store = createStore(studentsReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
