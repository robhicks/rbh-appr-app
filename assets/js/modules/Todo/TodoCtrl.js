app.controller('TodoCtrl', ['$scope', 'localStorageService',
  function ($scope, lss) {
    var self = this;
    var todo;
    self.todos = [];
    self.todos = lss.get('todos') || [];
    $scope.tc = self;
    $scope.todos = self.todos;
    self.filter = '';

    self.edit = function (idx) {
      todo = self.todos[idx];
      for (var i = 0; i < self.todos.length; i++) {
        if (i === idx) todo.editing = todo.editing ? false : true;
        else self.todos[i].editing = false;
      }
    };

    self.update = function (idx) {
      todo = self.todos[idx];
      todo.editing = false;
    };

    self.del = function (idx) {
      self.todos.splice(idx, 1);
    };

    $scope.$watch(self, function(nVal){
      console.log(nVal);
    });

    $scope.$watch(function(nVal, oVal){
      lss.add('todos', nVal.todos);
    })
  }]);