var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

//var Todo = require('Todo');
import * as actions from 'actions';

import {Todo} from 'Todo';

describe('Todo', ()=>{
  it('should properly run tests', ()=> {
    expect(Todo).toExist();
  });

  // it('should call onToggle props with id on click', ()=> {
  //   var todoData = {
  //     id: 199,
  //     text: 'Test features',
  //     completed : true
  //   }
  //
  //   var spy = expect.createSpy();
  //   var todo = TestUtils.renderIntoDocument(<Todo {... todoData} onToggle={spy} />);
  //   var $el  = $(ReactDOM.findDOMNode(todo));
  //   TestUtils.Simulate.click($el[0]);
  //   expect(spy).toHaveBeenCalledWith(199);
  // });

  it('should dispatch TOGGLE_TODO action on click', ()=> {
    var todoData = {
      id: 199,
      text: 'Test features',
      completed : true
    };

    var action = actions.startToggleTodo(todoData.id, !todoData.completed);

    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {... todoData} dispatch={spy} />);
    var $el  = $(ReactDOM.findDOMNode(todo));
    TestUtils.Simulate.click($el[0]);
    expect(spy).toHaveBeenCalledWith(action);
  });
});
