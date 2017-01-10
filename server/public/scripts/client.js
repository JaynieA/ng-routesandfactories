console.log("in Js");

var myApp = angular.module ('myApp', [])

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
