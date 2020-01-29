import React, { Component } from 'react';

export default class StudentItem extends Component {
  constructor(props) {
    super(props);
    this.state = { isEdit: false };
    this.editStudent = this.editStudent.bind(this);
    this.editStudentSubmit = this.editStudentSubmit.bind(this);
    this.deleteStudent = this.deleteStudent.bind(this);
  }
  deleteStudent() {
    const { id } = this.props.student;
    this.props.deleteStudent(id);
  }
  editStudent() {
    this.setState((prevState, props) => ({
      isEdit: !prevState.isEdit
    }));
  }
  editStudentSubmit() {
    this.setState((prevState, props) => ({
      isEdit: !prevState.isEdit
    }));
    this.props.editStudentSubmit({
      id: this.props.student.id,
      fio: this.nameInput.value,
      birthday: this.gradeInput.value,
      assessments: this.schoolInput.value
    });
  }
  render() {
    const { fio, birthday, assessments } = this.props.student;
    return this.state.isEdit === true ? (
      <tr className="bg-warning" key={this.props.index}>
        <td>
          <input
            ref={nameInput => (this.nameInput = nameInput)}
            defaultValue={fio}
          />
        </td>
        <td>
          <input
            defaultValue={birthday}
            ref={gradeInput => (this.gradeInput = gradeInput)}
          />
        </td>
        <td>
          <input
            ref={schoolInput => (this.schoolInput = schoolInput)}
            defaultValue={assessments}
          />
        </td>
        <td>
          <button onClick={this.editStudentSubmit}>Save</button>
        </td>
        <td>
          <button>Del</button>
        </td>
      </tr>
    ) : (
      <tr key={this.props.index}>
        <td>{fio}</td>
        <td>{birthday}</td>
        <td>{assessments}</td>
        <td>
          <button onClick={this.editStudent}>Edit</button>
        </td>
        <td>
          <button onClick={this.deleteStudent}>Del</button>
        </td>
      </tr>
    );
  }
}
