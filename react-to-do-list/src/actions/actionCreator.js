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

export const fetchTask = (data) => ({
  type: FETCH_TASKS,
  data
});

export const addTask = (id, text, isCompleted) => ({
  type: ADD_TASK,
  id,
  text,
  isCompleted
});

export const removeTask = id => ({
  type: REMOVE_TASK,
  id
});

export const completeTask = id => ({
  type: COMPLETE_TASK,
  id
});

export const searchTask = text => ({
  type: SEARCH_TASK,
  text
});

export const archiveTask = ({id, text}) => ({
  type: ARCHIVE_TASK,
  id,
  text
});

export const unarchivingTask = ({id, text}) => ({
  type: UNARCHIVING_TASK,
  id,
  text
});

export const editTask = ({id, text, isCompleted}) => ({
  type: EDIT_TASK,
  id,
  text,
  isCompleted
});

export const confirmEditTask = ({id, text, isCompleted}) => ({
  type: CONFIRM_EDIT_TASK,
  id,
  text,
  isCompleted
});