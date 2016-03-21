/**
 * Created by checarsner on 3/15/16.
 */
angular.module('CalcApp')
  .controller('CalculatorController', function CalculatorController($scope) {
    $scope.x = 0;
    $scope.y = 0;
    $scope.z = 0;

    $scope.sum = function() {
      $scope.z = $scope.x + $scope.y;
    };
  });
