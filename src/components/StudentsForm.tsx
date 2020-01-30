import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addStudentAction } from 'store/student/actions';
import nanoid from 'nanoid';

import c from 'utils/constants';
import { Student } from 'store/student/types';
import StudentRow from 'components/StudentRow';

type Props = {
  storeData: Student[];
  addStudentAction: (student: Student) => void;
};

const FCStudentsForm: React.FC<Props> = ({ storeData, addStudentAction }) => (
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

const mapStateToProps = (state: Student[]) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(FCStudentsForm);
