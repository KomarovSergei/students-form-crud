const studentsReducer = (state = [], action) => {
  let stateCopy;
  switch (action.type) {
    case 'ADD_STUDENT':
      stateCopy = [...state, action.payload];
      localStorage.setItem('students', JSON.stringify(stateCopy));
      return stateCopy;
    case 'DELETE_STUDENT':
      stateCopy = state.filter(x => x.id !== action.payload);
      localStorage.setItem('students', JSON.stringify(stateCopy));
      return stateCopy;
    case 'UPDATE_STUDENT':
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
};

export default studentsReducer;
