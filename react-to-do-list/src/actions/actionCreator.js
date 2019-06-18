import { FETCH_TASKS, ADD_TASK, REMOVE_TASK, COMPLETE_TASK, SEARCH_TASK } from '../constants';

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

export const searchTask = (text) => ({
  type: SEARCH_TASK,
  text
});