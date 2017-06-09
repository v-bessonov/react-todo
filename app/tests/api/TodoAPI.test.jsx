var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exists', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      var todos = [
        {
          id : 23,
          test: 'Test',
          completed: false
        }
      ];
      TodoAPI.setTodos(todos);
      var actualTodos = JSON.parse(localStorage.getItem('todos'));
      expect(actualTodos).toEqual(todos);
    });

    it('should not set valid todos array', () => {
      var badTodos =
        {
          a : 'b'
        };
      TodoAPI.setTodos(badTodos);
      expect(localStorage.getItem('todos')).toBe(null);
    });


  });

  describe('getTodos', () => {
    it('should return empty array for bad localStorage data', () => {
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('should return toods if valid array inlocalStorage', () => {
      var todos = [
        {
          id : 23,
          test: 'Test',
          completed: false
        }
      ];
      localStorage.setItem('todos', JSON.stringify(todos));
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual(todos);
    });
  });

  // it('should call onToggle props with id on click', ()=> {
  //   var todoData = {
  //     id: 199,
  //     text: 'Test features',
  //     completed : true
  //   }
  //
  //   var spy = expect.createSpy();
  //   var todo = TestUtils.renderIntoDocument(<Todo {... todoData} onToggle={spy} />);
  //   var $el  = $(ReactDOM.findDOMNode(todo));
  //   TestUtils.Simulate.click($el[0]);
  //   expect(spy).toHaveBeenCalledWith(199);
  // });
});
