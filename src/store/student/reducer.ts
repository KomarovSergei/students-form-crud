import { IStudent, StudentActionTypes, ADD_STUDENT, DELETE_STUDENT, UPDATE_STUDENT} from 'store/student/types'
import moment from 'moment';
import nanoid from 'nanoid';
import c from 'utils/constants';

let initialState: IStudent[] = 
  [{
    id: nanoid(),
    fio: 'Komarov Sergei Valerievich',
    birthday: moment().format('MMM Do YY'),
    assessments: c.good
  },
  {
    id: nanoid(),
    fio: 'Pupkin Vasia Aleksandrovich',
    birthday: moment().format('MMM Do YY'),
    assessments: c.bad
  }]

if (localStorage.getItem('students') === null) {
  localStorage.setItem('students', JSON.stringify(initialState));
} else {
  initialState = JSON.parse(localStorage.getItem('students'));
}

export default function studentReducer(state = initialState, action: StudentActionTypes): IStudent[] {
  let stateCopy;
  switch (action.type) {
    case ADD_STUDENT:
      stateCopy = [...state, action.payload]
      localStorage.setItem('students', JSON.stringify(stateCopy));
      return stateCopy;
    case DELETE_STUDENT:
      stateCopy = state.filter(x => x.id !== action.payload);
      localStorage.setItem('students', JSON.stringify(stateCopy));
      return stateCopy;
    case UPDATE_STUDENT:
      stateCopy = state.map(student => {
        const { id, fio, birthday, assessments } = action.payload;
        if (student.id === id) {
          student.fio = fio;
          student.birthday = birthday;
          student.assessments = assessments;
        }
        return student;
      });
      localStorage.setItem('students', JSON.stringify(stateCopy));
      return stateCopy;
    default:
      return state;
  }
}