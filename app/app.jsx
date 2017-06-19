var React = require('react');
var ReactDOM = require('react-dom');
//import {Router } from 'react-router';
//import { HashRouter,  Route,  Link, Switch } from 'react-router-dom';

//var {Route, Router, IndexRoute} = require('react-router');
var {Provider} = require('react-redux');
//var TodoApp = require('TodoApp');
//import TodoApp from 'TodoApp';

var actions = require('actions');
var store = require('configureStore').configure();

import router, {auth} from 'app/router';

//var TodoAPI  = require('TodoAPI');

//import Login from 'Login';
// import firebase from 'app/firebase/';
//
//
// import createHashHistory from 'history/createHashHistory'
//
// const history = createHashHistory()
//
// firebase.auth().onAuthStateChanged((user)=>{
//   if(user){
//     //HashRouter.transitionTo('/todos');
//     console.log(history);
//     //hashHistory.push('/todos');
//     //document.window.location('/todos');
//     //console.log(hashrouter);
//     history.push('/todos');
//   }else{
//     //console.log(HashRouter.history);
//     //hashHistory.push('/');
//     //HashRouter.transitionTo('/');
//       //document.window.location('/');
//       //console.log(hashrouter);
//       console.log(history);
//       history.push('/');
//   }
// });

auth();

//import './../playground/firebase/index'

// store.subscribe(() => {
//   var state = store.getState();
//
//   console.log('New state', state);
//   TodoAPI.setTodos(state.todos);
// });
//
// var initialTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initialTodos));

store.dispatch(actions.startAddTodos());

// store.dispatch(actions.addTodo('Clean the yard'));
// store.dispatch(actions.setSearchText('yard'));
// store.dispatch(actions.toggleShowCompleted());

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

// var requireLogin =(nextState, replace, next)=>{
//   if(!firebase.auth().currentUser){
//     console.log('OnEnter');
//     replace('/');
//     //console.log(firebase.auth().currentUser);
//     //history.push('/');
//   }
//   next();
// };

ReactDOM.render(

  <Provider store={store}>
  {router}

</Provider>, document.getElementById('app'));
