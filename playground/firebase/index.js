import firebase from 'firebase';




  var config = {
    apiKey: "AIzaSyC3MK-dtqju7IEXsa7thfXpzmSvg8eg5CE",
    authDomain: "mine-todo-app.firebaseapp.com",
    databaseURL: "https://mine-todo-app.firebaseio.com",
    projectId: "mine-todo-app",
    storageBucket: "mine-todo-app.appspot.com",
    messagingSenderId: "670344785604"
  };
  firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();
firebaseRef.set(
  {
    app:{
      name: 'Todo App',
      version: '1.0.0'
    },
    isRunning: true,
    user: {
      name: 'Andrew',
      age: 25
    }
  }
).then(()=> {
  console.log('Set worked!')
}, (e)=> {
  console.log('Set failed!')
});


// var notesRef = firebaseRef.child('notes');
//
// // var newnotesRef = notesRef.push();
// //
// // newnotesRef.set({
// //   text: 'Walk the dog'
// // });
//
// notesRef.on('child_added',(snapshot)=>{
//   console.log('child_added', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_changed',(snapshot)=>{
//   console.log('child_changed', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed',(snapshot)=>{
//   console.log('child_removed', snapshot.key, snapshot.val());
// });
//
// var newnotesRef = notesRef.push({
//   text: 'Walk the dog!'
// });
// console.log('Todo id', newnotesRef.key)

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added',(snapshot)=>{
  console.log('child_added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Todo 1'
});

todosRef.push({
  text: 'Todo 2'
});

//
// firebaseRef.child('user').set(
//   {
//     name: 'Mike'
//   }
// );
//
// firebaseRef.child('app').set(
//   {
//     name: 'Todo App'
//   }
// );

// firebaseRef.update({
//   isRunning: false,
//   'app/name': 'Todo Application'
// });

// firebaseRef.child('app').update({
//   name:'Todo Application'
// }).then(()=> {
//   console.log('Update worked!')
// }, (e)=> {
//   console.log('Update failed!')
// });


// firebaseRef.update({
//   'app/name': 'Todo Application',
//   'user/name': 'Jen'
// });



// firebaseRef.child('app').update({
//   name:'Todo Application'
// }).then(()=> {
//   console.log('Update worked!')
// }, (e)=> {
//   console.log('Update failed!')
// });
//
// firebaseRef.child('user').update({
//   name:'Mike'
// }).then(()=> {
//   console.log('Update worked!')
// }, (e)=> {
//   console.log('Update failed!')
// });

//firebaseRef.remove();

// firebaseRef.update({
//   isRunning: null
//
// });
//
// firebaseRef.child('app/name').remove();
// firebaseRef.child('app').update({
//   version: '2.0.0',
//   name:null
// }).then(()=> {
//   console.log('Update worked!')
// }, (e)=> {
//   console.log('Update failed!')
// });

// firebaseRef.update({
//   isRunning: null
// }).then(()=> {
//   console.log('Update worked!')
// }, (e)=> {
//   console.log('Update failed!')
// });
// firebaseRef.child('user/age').remove();



// firebaseRef.once('value').then((snapshot)=> {
//   console.log('Got entire database', snapshot.val())
// }, (e)=> {
//   console.log('Unable to fetch value', e)
// });

// firebaseRef.child('app').once('value').then((snapshot)=> {
//   console.log('Got entire database', snapshot.key ,snapshot.val())
// }, (e)=> {
//   console.log('Unable to fetch value', e)
// });

// var logData = (snapshot)=>{
//   console.log('Got value', snapshot.val())
// };

// var userData = (snapshot)=>{
//   console.log('User ref changed', snapshot.val())
// };

// firebaseRef.on('value', logData);
// firebaseRef.off();
//
// firebaseRef.update({
//   isRunning: false
// });


// firebaseRef.child('user').on('value', userData);
// //firebaseRef.child('user').off('value', userData);
//
// firebaseRef.child('user').update({
//   name: 'Mike'
// });
//
// firebaseRef.child('app').update({
//   name: 'New app name'
// });
