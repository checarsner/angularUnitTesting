/**
 * Created by checarsner on 3/15/16.
 */

describe('calculator', function () {

  var calculator = new Calculator();

  it('should add 2 numbers', function () {
    expect(calculator.sum(1, 1)).toBe(2);
  });

  it('should add 3 numbers', function() {
    expect(calculator.sum(1, 1, 1)).toBe(3);
  });

});
