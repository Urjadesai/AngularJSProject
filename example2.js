
var app =angular.module('myApp' ,[]);
app.controller('todoctrl', function($scope)
{
    $scope.todolist = [{togostate:'New York', done:false}];

    $scope.todoAdd = function()
    {
        $scope.todolist.push({togostate:$scope.todoinput, done:false});
        $scope.todoinput="";
    };
    
    $scope.remove =function()
    {
        var list = $scope.todolist;
        $scope.todolist = [];
        angular.forEach(list, function(x)
        {
            if(!x.done) $scope.todolist.push(x);
        });
    };
}
);
