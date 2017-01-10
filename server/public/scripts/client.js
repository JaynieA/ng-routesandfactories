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
    factory.charOneSuccess = 0;
    factory.charTwoSkill = Math.random();
    factory.charTwoSuccess = 0;
    factory.charThreeSkill = Math.random();
    factory.charThreeSuccess = 0;
    factory.getRandomNumber = function(){
      return Math.random();
    }


  return factory
});//end factory

myApp.controller('HomeController', ['$scope', 'characterFactory',  function($scope, characterFactory){
  console.log("In NG");
  console.log('factory -->', characterFactory.charOneSkill);
  console.log('char total and success', characterFactory.total, characterFactory.charOneSuccess);

}]); //end home controller

myApp.controller('CharOneController', ['$scope', 'characterFactory',  function($scope, characterFactory){
  console.log("In NG");
  console.log('factory -->', characterFactory.charOneSkill);
  $scope.highFive = function (){
    var randomNumber = characterFactory.getRandomNumber();
    var charOneSkill = characterFactory.charOneSkill;
    if (randomNumber >= charOneSkill){
      characterFactory.total++;
      characterFactory.charOneSuccess++;
      console.log('char total and success', characterFactory.total, characterFactory.charOneSuccess);
    } else {
      alert ('Unsuccessful!')
    }
  }


}]); //end home controller

myApp.controller('CharTwoController', ['$scope', 'characterFactory',  function($scope, characterFactory){
  console.log("In NG");
  console.log('factory -->', characterFactory.charOneSkill);

}]); //end home controller

myApp.controller('CharThreeController', ['$scope', 'characterFactory',  function($scope, characterFactory){
  console.log("In NG");
  console.log('factory -->', characterFactory.charOneSkill);

}]); //end home controller
