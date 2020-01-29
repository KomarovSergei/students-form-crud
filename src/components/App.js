import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addStudentAction } from 'actions/studentActions';
import nanoid from 'nanoid';

import c from 'utils/constants';

import StudentRow from 'components/StudentRow';

const App = ({ storeData, addStudentAction }) => (
  <div>
    <table>
      <thead>
        <tr>
          <th>FIO</th>
          <th>Birthday</th>
          <th>Assessments</th>
          <th>Edit/Save</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {storeData.map((dataItem, i) => (
          <StudentRow key={i} student={dataItem} />
        ))}
      </tbody>
    </table>
    <button
      onClick={() =>
        addStudentAction({
          id: nanoid(),
          fio: 'Add your name and surname',
          birthday: 'Add your Birthday',
          assessments: c.assessments.initial
        })
      }
    >
      Add New
    </button>
  </div>
);

const mapStateToProps = state => {
  return {
    storeData: state
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addStudentAction
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
