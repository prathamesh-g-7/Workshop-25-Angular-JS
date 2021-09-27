var application = angular.module("Phase-oneApp", []);

application.factory("random", function () {
  var randomObject = {};
  var number = Math.floor(Math.random() * 100);
  randomObject.generate = function () {
    console.log(number);
    return number;
  };
  return randomObject;
});

application.controller("myngController", function ($scope, random) {
  $scope.generateRandom = function () {
    $scope.randomNumber = random.generate();
  };
});
