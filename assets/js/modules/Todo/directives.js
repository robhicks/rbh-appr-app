app.directive('addOrUpdate', ['$timeout', function($timeout){
  return function($scope, $element){
    $element.on('keyup', function(evt){
      if(evt.which === 13){
        if($scope.tc.todoInput.length > 2){
          $scope.$apply(function(){
            $scope.tc.todos.push({name: $scope.tc.todoInput, complete: false, editing: false});
            $scope.tc.todoInput = '';
          });
        } else {
          $scope.$apply(function(){
            $scope.tc.tooShort = true;
            console.log($scope.tc.tooShort);
            $timeout(function(){
              $scope.tc.tooShort = false;
            }, 3000)
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