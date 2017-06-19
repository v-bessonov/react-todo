import { combineReducers, createStore, compose, applyMiddleware }  from 'redux';
import thunk from 'redux-thunk';

import {searchTextReducer, showCompletedReducer, todosReducer, authReducer} from 'reducers'
// import { composeWithDevTools } from 'redux-devtools-extension';
//
// const composeEnhancers = composeWithDevTools({
//   // Specify name here, actionsBlacklist, actionsCreators and other options if needed
// });


export var configure = (initialState = {}) => {
  var reducer = combineReducers({searchText: searchTextReducer, showCompleted: showCompletedReducer, todos: todosReducer, auth: authReducer});
if(process.env.NODE_ENV === 'test'){
  console.log('test');
  var store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));
}else if (process.env.NODE_ENV === 'development'){
  console.log('development');
  var store = createStore(reducer, initialState, compose( applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
}else{
  console.log('production');
  var store = createStore(reducer, compose(initialState));
}

//   var store = createStore(reducer, initialState,
//     compose(applyMiddleware(thunk),
//     applyMiddleware(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
//   )
// );
//   var store = createStore(reducer, initialState,   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
//   applyMiddleware(...thunk),
//   // other store enhancers if any
// ));
  return store;
}
