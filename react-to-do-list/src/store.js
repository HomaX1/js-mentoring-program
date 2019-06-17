import { createStore } from 'redux';
import rootReducer from './reducers/index';

const configureStore = () => (
  createStore(
    rootReducer
  )
);

const store = configureStore({});

export default store;