var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import {configure} from 'configureStore'
//var TodoList = require('TodoList');
import ConnectedTodoList, {TodoList} from 'TodoList'
//var Todo = require('Todo');
import ConnectedTodo, {Todo} from 'Todo'

describe('TodoList', ()=>{
  it('should properly run tests', ()=> {
    expect(TodoList).toExist();
  });

  it('should render empty message if no todos', ()=> {
    var todos = [];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    var $el = $(ReactDOM.findDOMNode(todoList));
    expect($el.find('.container__message').length).toBe(1);
  });

  it('should render one Todo component for each todo item', ()=> {
    var todos = [
      {
        id : 1,
        text: 'Dance',
        completed: false,
        completedAt: undefined,
        createdAt: 500
      },
      {
        id : 2,
        text: 'Sing',
        completed: false,
        completedAt: undefined,
        createdAt: 500
      }
    ];

    var store = configure({
      todos
    });

    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList/>
      </Provider>
    );

    var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);
    expect(todosComponents.length).toBe(todos.length);
  });
});
