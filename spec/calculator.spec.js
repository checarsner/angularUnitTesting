/**
 * Created by checarsner on 3/15/16.
 */

describe('calculator', function () {

  it('1 + 1 should equal 2', function () {
    var calculator = new Calculator();
    expect(calculator.sum(1, 1)).toBe(2);
  });

});
