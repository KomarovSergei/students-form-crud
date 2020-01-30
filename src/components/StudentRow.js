import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  deleteStudentAction,
  updateStudentAction
} from 'actions/studentActions';
import c from 'utils/constants';

const StudentItem = ({ student, ...props }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(c.assessments.initial);
  const { fio, birthday, assessments } = student;
  const refs = {
    fio: useRef(null),
    birthday: useRef(null),
    assessments: useRef(null)
  };

  const deleteStudent = () => {
    const { id } = student;
    props.deleteStudentAction(id);
  };

  const editStudent = () => {
    setIsEdit(!isEdit);
  };

  const updateStudent = () => {
    setIsEdit(!isEdit);
    props.updateStudentAction({
      id: student.id,
      fio: refs.fio.current.value,
      birthday: refs.birthday.current.value,
      assessments: refs.assessments.current.value
    });
  };

  const handleChange = e => setValue(e.target.value);

  return isEdit ? (
    <tr>
      <td>
        <input ref={refs.fio} defaultValue={fio} />
      </td>
      <td>
        <input ref={refs.birthday} defaultValue={birthday} />
      </td>
      <td>
        <select ref={refs.assessments} value={value} onChange={handleChange}>
          <option value={c.assessments.initial} defaultValue>
            {c.assessments.initial}
          </option>
          <option value={c.assessments.excellent}>
            {c.assessments.excellent}
          </option>
          <option value={c.assessments.good}>{c.assessments.good}</option>
          <option value={c.assessments.satisfactorily}>
            {c.assessments.satisfactorily}
          </option>
          <option value={c.assessments.bad}>{c.assessments.bad}</option>
        </select>
      </td>
      <td>
        <button onClick={updateStudent}>Save</button>
      </td>
      <td>
        <button onClick={editStudent}>Cancel</button>
      </td>
    </tr>
  ) : (
    <tr>
      <td>{fio}</td>
      <td>{birthday}</td>
      <td>{assessments}</td>
      <td>
        <button onClick={editStudent}>Edit</button>
      </td>
      <td>
        <button onClick={deleteStudent}>Del</button>
      </td>
    </tr>
  );
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      deleteStudentAction,
      updateStudentAction
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(StudentItem);
