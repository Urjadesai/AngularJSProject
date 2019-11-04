var app = angular.module("myApp",["ngRoute"]);
app.config(function($routeProvider)
{
    $routeProvider
    .when("/HOME",{
        templateUrl : "HOME.html",
        controller: "HOMECtrl"
    })
    .when("/HTML",{
        templateUrl : "HTML.html",
        controller: "HTMLCtrl"
    })
    .when("/CSS",{
        templateUrl: "CSS.html",
        controller:"CSSCtrl"
    })
    // .when("/JAVASCRIPT",{
    //    templateUrl:" JAVASCRIPT.html",
    //    controller:"JAVASCRIPTCtrl"
    // })
    // .when("/JSON/AJAX",{
    //     templateUrl: "JSON/AJAX.html",
    //     controller:"JSON/AJAXCtrl"
    // })
    // .when("/JQUERY",{
    //     templateUrl: "JQUERY.html",
    //     controller:"JQUERYCtrl"
    // })
    // .when("/ANGULARJS",{
    //     templateUrl: "ANGULARJS.html",
    //     controller:"ANGULARJSCtrl"
    // })
    // .when("/ANGULARJS-2",{
    //     templateUrl: "ANGULARJS-2.html",
    //     controller:"ANGULARJS-2Ctrl"
    // });
});
app.controller("HOMECtrl", function ($scope) {
    $scope.msg = "Welcome to the Pro-Tek Tutorials";
});
app.controller("HTMLCtrl", function ($scope) {
    $scope.msg = "HTML Interview Questions";
});

app.controller("CSSCtrl",function($scope)
{
    $scope.msg1 = "CSS Interview Questions";
});