var $ = require('jquery');
module.exports = {
  setTodos : function(todos){
    if($.isArray(todos)){
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },

  getTodos : function(){
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try{
      todos = JSON.parse(stringTodos);
    } catch(e){

    }

    return $.isArray(todos) ? todos : [];
    // if($.isArray(todos)){
    //   return todos;
    // } else{
    //   return [];
    // }
    // [
    //   {
    //     id:uuid(),
    //     text: 'Walk the dog',
    //     completed: false
    //   },
    //   {
    //     id: uuid(),
    //     text: 'Clean the yard',
    //     completed: true
    //   },
    //   {
    //     id: uuid(),
    //     text: 'Dance',
    //     completed: true
    //   },
    //   {
    //     id: uuid(),
    //     text: 'Sing',
    //     completed: false
    //   }
    // ]
  }

}
