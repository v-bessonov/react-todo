var React = require('react');
var ReactDOM = require('react-dom');
import { HashRouter,  Route,  Link} from 'react-router-dom';
//var {Route, Router, IndexRoute} = require('react-router');
var {Provider} = require('react-redux');
//var TodoApp = require('TodoApp');
import TodoApp from 'TodoApp';

var actions = require('actions');
var store = require('configureStore').configure();

var TodoAPI  = require('TodoAPI');

import Login from 'Login';
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

ReactDOM.render(

  <Provider store={store}>

    <HashRouter>
          <div>
            <Route exact path="/" component={Login}/>
            <Route path='/todos' component={TodoApp}/>

          </div>
        </HashRouter>


</Provider>, document.getElementById('app'));
