export const ADD_STUDENT = 'ADD_STUDENT';
export const DELETE_STUDENT = 'DELETE_STUDENT';
export const UPDATE_STUDENT = 'UPDATE_STUDENT';

export interface Student {
  id: string
  fio: string
  birthday: string
  assessments: string
}

interface AddStudentAction {
  type: typeof ADD_STUDENT
  payload: Student
}

interface DeleteStudentAction {
  type: typeof DELETE_STUDENT
  payload: string
}

interface UpdateStudentAction {
  type: typeof UPDATE_STUDENT
  payload: Student
}

export type StudentActionTypes = AddStudentAction | DeleteStudentAction | UpdateStudentAction