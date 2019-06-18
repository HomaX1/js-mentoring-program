import { FETCH_TASKS, ADD_TASK, REMOVE_TASK, COMPLETE_TASK, SEARCH_TASK } from '../constants';

const defaultState = {
  tasks: [],
  archive: [],
  searchInput: ''
};

const tasks = (state = defaultState, { id, text, isCompleted, type, data }) => {
  switch (type) {
    case FETCH_TASKS :
      return {
        ...state,
        tasks: data
      };
    case ADD_TASK :
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
    default:
      return state;
  }
};

export default tasks;
