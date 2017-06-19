import firebase, {firebaseRef, githubProvider} from 'app/firebase/'
import moment from 'moment'

export var setSearchText = (searchText) => {
  return {type: 'SET_SEARCH_TEXT', searchText};
};

export var addTodo = (todo) => {
  return {type: 'ADD_TODO', todo};
};

export var startAddTodo = (text) => {
  return (dispatch, getState) => {
    var todo = {
      //id : uuid(),
      text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    };
    var todoRef = firebaseRef.child('todos').push(todo);
    return todoRef.then(() => {
      dispatch(addTodo({
        ...todo,
        id: todoRef.key
      }));
    });
  }
};

export var addTodos = (todos) => {
  return {type: 'ADD_TODOS', todos};
};

export var startAddTodos = () => {
  return (dispatch, getState) => {

    var todosRef = firebaseRef.child('todos');
    return todosRef.once('value').then((snapshot) => {
      var todos = snapshot.val() || {};
      var parsedTodos = [];
      Object.keys(todos).forEach((todoId) => {
        parsedTodos.push({
          id: todoId,
          ...todos[todoId]
        });
      });

      dispatch(addTodos(parsedTodos));
    });
  }
};

export var toggleShowCompleted = () => {
  return {type: 'TOGGLE_SHOW_COMPLETED'};
};

export var updateTodo = (id, updates) => {
  return {type: 'UPDATE_TODO', id, updates};
};

export var startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {
    var todoRef = firebaseRef.child(`todos/${id}`);

    var updates = {
      completed,
      completedAt: completed
        ? moment().unix()
        : null
    };
    return todoRef.update(updates).then(() => {
      dispatch(updateTodo(id, updates));
    });
  }
};

export var startLogin = (id, completed) => {
  return (dispatch, getState) => {
    firebase.auth().signInWithPopup(githubProvider).then((result) => {
      console.log('Auth worked', result);
    }, (e) => {
      console.log('Unable to auth', e);
    });
  }
};

export var startLogout = (id, completed) => {
  return (dispatch, getState) => {
    firebase.auth().signOut().then(() => {
      console.log('Logged out!');
    }, (e) => {
      console.log('Error logout', e);
    });
  }
};

export var login = (uid) => {
  return {
    type: 'LOGIN',
    uid
  };
};

export var logout = () => {
  return {
    type: 'LOGOUT'
  };
};
