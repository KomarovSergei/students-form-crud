export const ADD_STUDENT = 'ADD_STUDENT';
export const DELETE_STUDENT = 'DELETE_STUDENT';
export const UPDATE_STUDENT = 'UPDATE_STUDENT';

export interface IStudent {
  id: string
  fio: string
  birthday: string
  assessments: string
}

interface IAddStudentAction {
  type: typeof ADD_STUDENT
  payload: IStudent
}

interface IDeleteStudentAction {
  type: typeof DELETE_STUDENT
  payload: string
}

interface IUpdateStudentAction {
  type: typeof UPDATE_STUDENT
  payload: IStudent
}

export type StudentActionTypes = IAddStudentAction | IDeleteStudentAction | IUpdateStudentAction