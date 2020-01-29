import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  addStudent,
  deleteStudent,
  updateStudent
} from '../actions/studentActions';
import nanoid from 'nanoid';
import moment from 'moment';

import StudentList from 'components/StudentList';

class App extends Component {
  constructor(props) {
    super(props);
    this.addNewStudent = this.addNewStudent.bind(this);
    this.deleteStudent = this.deleteStudent.bind(this);
    this.editStudentSubmit = this.editStudentSubmit.bind(this);
  }

  addNewStudent() {
    this.props.addStudent({
      id: nanoid(),
      fio: 'default fio',
      birthday: moment().format('MMM Do YY'),
      assessments: ''
    });
  }

  deleteStudent(id) {
    this.props.deleteStudent(id);
  }

  editStudentSubmit({ id, fio, birthday, assessments }) {
    this.props.updateStudent({ id, fio, birthday, assessments });
  }

  render() {
    return (
      <div>
        <div className="card-header">Student Registry</div>
        <div className="card-body">
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th>FIO</th>
                <th>Birthday</th>
                <th>Assessments</th>
                <th>Edit/Save</th>
                <th>Delete</th>
              </tr>
            </thead>
            <StudentList
              deleteStudent={this.deleteStudent}
              studentList={this.props.studentList}
              editStudentSubmit={this.editStudentSubmit}
            />
          </table>
          <button
            className="btn btn-dark pull-left"
            onClick={this.addNewStudent}
          >
            Add New
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    studentList: state
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addStudent: addStudent,
      deleteStudent: deleteStudent,
      updateStudent: updateStudent
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
