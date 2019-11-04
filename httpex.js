var maincont = function ($scope ,$http)
{
    var temp = function(response)
    {
        $scope.user = response.data;
    };
    $http.get("http://api.github.com/users/robconery").then(onUserComplete);
    $scope.message = "Hello, Angular!";   

}