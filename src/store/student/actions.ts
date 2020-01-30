import { Student, StudentActionTypes, ADD_STUDENT, DELETE_STUDENT, UPDATE_STUDENT} from 'store/student/types'

export function addStudentAction(student: Student): StudentActionTypes {
  return {
    type: ADD_STUDENT,
    payload: student
  }
}

export function deleteStudentAction(id: string): StudentActionTypes {
  return {
    type: DELETE_STUDENT,
    payload: id
  }
}

export function updateStudentAction(student: Student): StudentActionTypes {
  return {
    type: UPDATE_STUDENT,
    payload: student
  }
}