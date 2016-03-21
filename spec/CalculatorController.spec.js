/**
 * Created by checarsner on 3/15/16.
 */

describe('calculator app', function () {
  var $controller, $scope;

  beforeEach(angular.mock.module('CalcApp'));

  beforeEach(angular.mock.inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('Summing', function() {
    it('Should equal 2 when 1 + 1', function() {

    });
  });
});
