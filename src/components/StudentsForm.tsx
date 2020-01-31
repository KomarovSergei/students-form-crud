import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';
import { addStudentAction } from 'store/student/actions';
import nanoid from 'nanoid';

import c from 'utils/constants';
import { IStudent } from 'store/student/types';
import StudentRow from 'components/StudentRow';

type Props = {
  storeData: IStudent[];
  addStudentAction: (student: IStudent) => void;
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

const mapStateToProps = (state: IStudent[]) => {
  return {
    storeData: state
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return bindActionCreators(
    {
      addStudentAction
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(FCStudentsForm);
