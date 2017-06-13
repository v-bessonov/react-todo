var React = require('react');
var ReactDOM = require('react-dom');
//var {Route, Router, IndexRoute} = require('react-router');
var {Provider} = require('react-redux');
var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New state', store.getState());
});

store.dispatch(actions.addTodo('Clean the yard'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());

//Load foundation-sites

//require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();

//App css
//require('style-loader!css-loader!sass-loader!applicationStyles');
require('applicationStyles');

// var objOne = {
//   name : 'Andrew',
//   location: 'Moscow'
// };
//
// var objTwo = {
//   age: 25,
//   ...objOne
// };
//console.log(objTwo);

ReactDOM.render(

  <Provider store={store}>
  <TodoApp/>
</Provider>, document.getElementById('app'));
