import {
  FETCH_TASKS,
  ADD_TASK,
  REMOVE_TASK,
  COMPLETE_TASK,
  SEARCH_TASK,
  ARCHIVE_TASK,
  UNARCHIVING_TASK,
  EDIT_TASK,
  CONFIRM_EDIT_TASK
} from '../constants';

const defaultState = {
  tasks: [],
  archive: [],
  searchInput: '',
  edit: {}
};

const tasks = (state = defaultState, {id, text, isCompleted, type, data}) => {
  switch (type) {
    case FETCH_TASKS:
      return {
        ...state,
        tasks: data
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: state.tasks.concat([{id, text, isCompleted}])
      };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== id)
      };
    case COMPLETE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === id) {
            task.isCompleted = !task.isCompleted;
          }
          return task;
        })
      };
    case SEARCH_TASK:
      return {
        ...state,
        searchInput: text
      };
    case ARCHIVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== id),
        archive: state.archive.concat([{id, text}])
      };
    case UNARCHIVING_TASK:
      return {
        ...state,
        tasks: state.tasks.concat([{id, text, isCompleted: false}]),
        archive: state.archive.filter(task => task.id !== id)
      };
    case EDIT_TASK:
      return {
        ...state,
        edit: state.edit = {id, text, isCompleted}
      };
    case CONFIRM_EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === id) {
            return {id, text, isCompleted};
          }
          return task;
        }),
        edit: ''
      };
    default:
      return state;
  }
};

export default tasks;
