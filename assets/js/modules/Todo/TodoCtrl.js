app.controller('TodoCtrl', ['$scope', function($scope){
  var self = this;
  var todo;
  self.tc = {};
  self.todos = [];
  self.$scope = $scope;

  self.filter = '';

  self.edit = function(idx){
    todo = self.todos[idx];
    for (var i = 0; i < self.todos.length; i++){
      if(i === idx) todo.editing = todo.editing ? false : true;
      else self.todos[i].editing = false;
    }
  };

  self.update = function(idx){
    todo = self.todos[idx];
    todo.editing = false;
  };

  self.del = function(idx){
    self.todos.splice(idx, 1);
  }
}]);