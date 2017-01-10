console.log("in Js");

var myApp = angular.module ('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '../views/routes/home.html',
      controller: 'HomeController'
    })
    .when('/charOne', {
      templateUrl: '../views/routes/charOne.html',
      controller: 'CharOneController'
    })
    .when('/charTwo', {
      templateUrl: '../views/routes/charTwo.html',
      controller: 'CharTwoController'
    })
    .when('/charThree', {
      templateUrl: '../views/routes/charThree.html',
      controller: 'CharThreeController'
    })
    .otherwise({
      redirectTo: 'home'
    })
}]);

myApp.factory('characterFactory', function(){
  var factory = {};
    factory.total = 0;
    factory.charOneSkill = Math.random();
    factory.charTwoSkill = Math.random();
    factory.charThreeSkill = Math.random();


  return factory
});//end factory

myApp.controller('HomeController', ['$scope', 'characterFactory',  function($scope, characterFactory){
  console.log("In NG");
  console.log('factory -->', characterFactory.charOneSkill);

}]); //end home controller
