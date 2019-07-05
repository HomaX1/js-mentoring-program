import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from "enzyme-adapter-react-16/build";
import {BrowserRouter as Router} from 'react-router-dom';

import ToDoItem from './to-do-item.js';

configure({adapter: new Adapter()});

describe('ToDo Item', () => {
  const completeTask = jest.fn();
  const props = {
    text: '',
    isCompleted: false,
    removeTask: () => {},
    archiveTask: () => {},
    editTask: () => {},
    completeTask,
    id: 1
  };
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Router><ToDoItem {...props}/></Router>);
  });

  it('render ToDoItem component', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should has .fa-square class', () => {
    expect(wrapper.find('.list-group-item .far').first().hasClass('fa-square')).toEqual(true);
  });

  it('completeTask should be called with sent id', () => {
    const icon = wrapper.find('.list-group-item .far').first();
    icon.simulate('click');
    expect(completeTask).toHaveBeenCalledWith(props.id);
  });

});
