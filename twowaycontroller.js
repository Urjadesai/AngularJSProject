var app = angular.module('myApp', []);
app.controller('mainCtrl', function($scope,$rootScope)
{
    $scope.$on('parseData', function(evt, obj)
    {
        $scope.name = obj.abc;
    })
});

app.controller('secondCtrl', function($scope,$rootScope)
{
    $scope.handleclick = function(name)
    {
        //$scope.$emit('parseData',{abc:name});
        $rootScope.$broadcast('parseData',{abc:name});
    }
});