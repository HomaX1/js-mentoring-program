import React from 'react'
import {configure, mount} from 'enzyme';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';

import ToDoList from './to-do-list';
import {data as MockData} from '../../mocks/tasks';

configure({adapter: new Adapter()});

describe('Methods of to-do-list', () => {
  const initialState = {tasks: MockData};
  const mockStore = configureStore();
  const props = {
    tasks: MockData
  };
  let store, wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(<Provider store={store}><ToDoList {...props}/></Provider>);
  });

  it('render the ToDoList component', () => {
    expect(wrapper.find(ToDoList).length).toEqual(1)
  });

  it('component should has tasks in props', () => {
    expect(wrapper.find(ToDoList).prop('tasks')).toBe(MockData);
  });

});
