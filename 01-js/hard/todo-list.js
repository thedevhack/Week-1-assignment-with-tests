/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor(){
    this.Todos = []
  }
  add(todo){
    this.Todos.push(todo)
  }
  remove(indx){
    this.Todos.splice(indx, 1)
  }
  update(indx, updatedTodo){
    if (indx >= 0 && indx <= this.Todos.length-1){
      this.Todos[indx] = updatedTodo;
      return this.Todos;
    }else{
      return this.Todos;
    }
    

  }
  get(indx){
    if (indx >= 0 && indx <= this.Todos.length-1){
    return this.Todos[indx]}else{
      return null;
    }
  }
  getAll(){
    return this.Todos
  }
  clear(){
    this.Todos = []
  }

}

module.exports = Todo;
