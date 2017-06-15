var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var configureStore = require('configureStore');
var TodoApp = require('TodoApp');
//var TodoList = require('TodoList');
import TodoList from 'TodoList'

describe('TodoApp', () => {
  // beforeEach(() => {
  //   localStorage.removeItem('todos');
  // });

  it('should properly run tests', () => {
    expect(TodoApp).toExist();
  });

  it('should render TodoList', () => {
    // var todos =[{
    //   id : '111',
    //   text : 'test',
    //   completed: false,
    //   completedAt: undefined,
    //   createdAt: 33000
    // }];
    // var action = {
    //   type: 'ADD_TwebpackODOS',
    //   todos: todos
    // };
    var store = configureStore.configure();
    //store.dispatch(action);

    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoApp/>
      </Provider>

    );

    var todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
    var todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

    expect(todoList.length).toEqual(1);
  });

  // it('should add todo to the todos state on handleAddTodo', ()=> {
  //   var todoText = 'test text';
  //
  //   var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
  //   todoApp.setState({
  //     todos: []
  //   });
  //   todoApp.handleAddTodo(todoText);
  //   expect(todoApp.state.todos[0].text).toBe(todoText);
  //   expect(todoApp.state.todos[0].createdAt).toBeA('number');
  // });
  //
  // it('should toggle completed value when handleToggle called', ()=> {
  //   var todoData = {
  //     id: 11,
  //     text: 'Test features',
  //     completed : false,
  //     createdAt: 0,
  //     completedAt : undefined
  //   }
  //
  //   var todoText = 'test text';
  //
  //   var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
  //   todoApp.setState({
  //     todos: [todoData]
  //   });
  //
  //   expect(todoApp.state.todos[0].completed).toBe(false);
  //   todoApp.handleToggle(11);
  //   expect(todoApp.state.todos[0].completed).toBe(true);
  //   expect(todoApp.state.todos[0].completedAt).toBeA('number');
  // });
  // it('should toggle todo from completed to incomplete', ()=> {
  //   var todoData = {
  //     id: 11,
  //     text: 'Test features',
  //     completed : true,
  //     createdAt: 0,
  //     completedAt : 123
  //   };
  //
  //   var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
  //   todoApp.setState({
  //     todos: [todoData]
  //   });
  //
  //   expect(todoApp.state.todos[0].completed).toBe(true);
  //   todoApp.handleToggle(11);
  //   expect(todoApp.state.todos[0].completed).toBe(false);
  //   expect(todoApp.state.todos[0].completedAt).toNotExist();
  // });

});
