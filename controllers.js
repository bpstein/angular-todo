toDoApp.controller('ToDoController', function() {
  var self = this;
  self.todos = [
    {task: "learn more angular", completed:false},
    {task: "learn more ruby", completed:true},
    {task: "learn more rails", completed:false}
  ];
  self.addToDo = function(todoText) {
        self.todos.push({task: todoText, completed:false});
      };
  self.removeToDo = function() {
    self.todos.pop();
  }

});
