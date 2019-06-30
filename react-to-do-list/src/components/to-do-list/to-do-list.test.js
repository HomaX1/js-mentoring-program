import React from 'react';
// import {shallow} from 'enzyme';
import ToDoList from './to-do-list';
import { create } from 'react-test-renderer';
import store from '../../store';

describe('Methods of to-do-list', () => {
  it('should return 3 elements', () => {
    const component = create(<ToDoList />);
    const instance = component.getInstance();
    console.log(instance);
    /*ToDoList.componentDidMount();
    expect(fetch).tohavebeencalledwith('http://localhost:3004/data');*/

    // global.fetch()
    //   .then(response => response.json())
    //   .then(
    //     {
    //       tasks: [
    //         {id: 1, title: 'todo1'},
    //         {id: 2, title: 'todo2'},
    //         {id: 3, title: 'todo3'},
    //       ]
    //     }
    //   );
    //
    // const list = document.querySelector('.to-do-list');
    // console.log(list, 'giugig');
    // expect(list.find('.to-do-item').length).toBe(3);
  })
});
