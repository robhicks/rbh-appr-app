app.directive('addOrUpdate', [function(){
  return function($scope, $element){
    $element.on('keyup', function(evt){
      if(evt.which === 13){
        if($scope.tc.todoInput.length > 2){
          $scope.$apply(function(){
            $scope.tc.todos.push({name: $scope.tc.todoInput, complete: false, editing: false});
            $scope.tc.todoInput = '';
          });
        }
      }
    });
  }
}]);

app.directive('updateField', [function(){
  return function($scope, $element){
    $element.on('keyup', function(evt){
      if(evt.which === 13){
        $scope.$apply(function(){
          for (var i = 0; i < $scope.tc.todos.length; i++){
            $scope.tc.todos[i].editing = false;
          }
        });
      }
    });
  }
}]);