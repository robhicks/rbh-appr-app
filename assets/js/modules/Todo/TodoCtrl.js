app.controller('TodoCtrl', ['$scope', 'localStorageService',
  function ($scope, lss) {
    var self = this;
    var todo;
    self.todos = lss.get('todos') || [{name: 'Add some todo items', complete: false, editing: false}];
    self.done = [];
    $scope.tc = self;
    $scope.todos = self.todos;
    self.filter = '';
    self.tooShort = false;

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

    self.delCompleted = function(){
      for(var i = self.todos.length; i > 0; i--){
        if(self.todos[i - 1].complete) self.del(i - 1);
      }
    };

    $scope.$watch(self, function(nVal){
      console.log(nVal);
    });

    $scope.$watch(function(nVal, oVal){
      lss.add('todos', nVal.todos);
      self.done = [];
      for(var i = 0; i < self.todos.length; i++){
        if(self.todos[i].complete) self.done.push(self.todos[i]);
      }
    })
  }]);