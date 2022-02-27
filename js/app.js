var example = angular.module("example", ["ui.router"]);

example.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state("login", {
            url: "/login",
            templateUrl: "templates/login.html",
            controller: "LoginController"
        })
        .state("secure", {
            url: "/secure",
            templateUrl: "templates/secure.html",
            controller: "SecureController"
        });
    $urlRouterProvider.otherwise("/login");
});

example.controller("LoginController", function($scope){
    $scope.login = function(){        
        window.location.href = "https://accounts.google.com/o/oauth2/v2/auth?client_id=" + "989567847553-oh9lffha2nqcrh72v0j1jphle6v93kvr.apps.googleusercontent.com" + "&response_type=code&scope=openid&redirect_uri=http://localhost/oauthbrowser/oauth_callback.html";
    }
});

example.controller("SecureController", function($scope){
    $scope.code = JSON.parse(window.localStorage.getItem("myObj")).oauth.code;    
});