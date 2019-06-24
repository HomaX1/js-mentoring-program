import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers/index';

const configureStore = preloadedState => (
  createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools()
  )
);

const store = configureStore({});

export default store;