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
  console.log('char total', characterFactory.total);
  $scope.total = characterFactory.total;
  $scope.jgj = characterFactory.charOneSuccess;
  $scope.pb = characterFactory.charTwoSuccess;
  $scope.babe = characterFactory.charThreeSuccess;
}]); //end home controller

myApp.controller('CharOneController', ['$scope', 'characterFactory',  function($scope, characterFactory){
  console.log("In NG");
  console.log('factory -->', characterFactory.charOneSkill);
  $scope.visible = false;
  $scope.highFive = function (){
    var randomNumber = characterFactory.getRandomNumber();
    var charOneSkill = characterFactory.charOneSkill;
    if (randomNumber >= charOneSkill){
      characterFactory.total++;
      characterFactory.charOneSuccess++;
      $scope.total = characterFactory.total;
      $scope.jgj = characterFactory.charOneSuccess;
      console.log('char one successes-->', characterFactory.charOneSuccess, '/', characterFactory.total, 'total successes');
      $scope.visible = true;
    } else {
      alert ('Unsuccessful!')
    }
  }


}]); //end home controller

myApp.controller('CharTwoController', ['$scope', 'characterFactory',  function($scope, characterFactory){
  console.log("In NG");
  console.log('factory -->', characterFactory.charOneSkill);
  $scope.highFive = function (){
    var randomNumber = characterFactory.getRandomNumber();
    var charTwoSkill = characterFactory.charTwoSkill;
    if (randomNumber >= charTwoSkill){
      $scope.visible = true;
      characterFactory.total++;
      characterFactory.charTwoSuccess++;
      $scope.total = characterFactory.total;
      $scope.pb = characterFactory.charTwoSuccess;
      console.log('char two successes-->', characterFactory.charTwoSuccess, '/', characterFactory.total, 'total successes');
    } else {
      alert ('Unsuccessful!')
    }
  }
}]); //end home controller

myApp.controller('CharThreeController', ['$scope', 'characterFactory',  function($scope, characterFactory){
  console.log("In NG");
  console.log('factory -->', characterFactory.charOneSkill);
  $scope.highFive = function (){
    var randomNumber = characterFactory.getRandomNumber();
    var charThreeSkill = characterFactory.charThreeSkill;
    if (randomNumber >= charThreeSkill){
      $scope.visible = true;
      characterFactory.total++;
      characterFactory.charThreeSuccess++;
      $scope.doughboy = characterFactory.charThreeSuccess;
      $scope.total = characterFactory.total;
      console.log('char three successes-->', characterFactory.charThreeSuccess, '/', characterFactory.total, 'total successes');
    } else {
      alert ('Unsuccessful!')
    }
  }
}]); //end home controller
