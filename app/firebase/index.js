import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyC3MK-dtqju7IEXsa7thfXpzmSvg8eg5CE",
    authDomain: "mine-todo-app.firebaseapp.com",
    databaseURL: "https://mine-todo-app.firebaseio.com",
    projectId: "mine-todo-app",
    storageBucket: "mine-todo-app.appspot.com",
    messagingSenderId: "670344785604"
  };
  firebase.initializeApp(config);
} catch (e) {

} finally {

}




export var firebaseRef = firebase.database().ref();
export default firebase;
