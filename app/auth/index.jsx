import firebase from 'app/firebase/';

export var checkAuth = ()=>{
  if(!firebase.auth().currentUser){
    console.log('requireLogin');
    //replace('/');
    //console.log(firebase.auth().currentUser);
    //history.push('/');
    return false;
  }
  return true;
};
