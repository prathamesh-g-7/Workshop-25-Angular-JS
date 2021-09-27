(function (angular) {
  "use strict";
  angular
    .module("myApp", [])
    .filter("epochToStringDate", function () {
      return function (input) {
        input = input || "";
        var myDate = new Date(input * 1000);
        return myDate.toLocaleString();
      };
    })
    .controller("MyController", [
      "$scope",
      "epochToStringDateFilter",
      function ($scope, epochTimestamp) {
        $scope.time = "";
        $scope.newTimeStamp = epochTimestamp($scope.time);
      },
    ]);
})(window.angular);
