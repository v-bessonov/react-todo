var React = require('react');
var ReactDOM = require('react-dom');
import {Router} from 'react-router';
import {HashRouter, Route, Link, Switch} from 'react-router-dom';
import TodoApp from 'TodoApp';
import Login from 'Login';
import firebase from 'app/firebase/';

import createHashHistory from 'history/createHashHistory'

const history = createHashHistory();

var actions = require('actions');
var store = require('configureStore').configure();

export var auth = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      //HashRouter.transitionTo('/todos');
      //console.log(history);
      //hashHistory.push('/todos');
      //document.window.location('/todos');
      //console.log(hashrouter);
      store.dispatch(actions.login(user.uid));
      history.push('/todos');
    } else {
      //console.log(HashRouter.history);
      //hashHistory.push('/');
      //HashRouter.transitionTo('/');
      //document.window.location('/');
      //console.log(hashrouter);
      //console.log(history);
      store.dispatch(actions.logout());
      history.push('/');
    }
  })
};

export default(
  <HashRouter hashType="slash" history={history}>
    <div>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path='/todos' component={TodoApp}/>
      </Switch>
    </div>
  </HashRouter>
);
