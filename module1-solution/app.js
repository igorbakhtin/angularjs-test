(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunch = "";
  $scope.message = "";

  $scope.checkLunch = function () {
    if ($scope.lunch == "") {
      $scope.message = "Please enter data first"
      return;
    }
    var count = calcItems($scope.lunch);
    if (count<=3)
       $scope.message = "Enjoy!";
    else $scope.message = "Too much!";
  };

  function  calcItems (lunch) {
    var arrayOfItems = lunch.split(',');
    return arrayOfItems.length;
  };

}

})();
