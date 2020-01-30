import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addStudentAction } from 'store/student/actions';
import nanoid from 'nanoid';

import c from 'utils/constants';

import StudentRow from 'components/StudentRow';

const StudentsForm = ({ storeData, addStudentAction }) => (
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
          fio: 'add student fio',
          birthday: 'add student birthday',
          assessments: c.initial
        })
      }
    >
      Add Student
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

export default connect(mapStateToProps, mapDispatchToProps)(StudentsForm);
