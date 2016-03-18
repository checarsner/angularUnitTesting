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

  // we added this test after the code making the previous test pass.
  // this is to ensure that it works under MANY condtions
  // 8 was chosen randomly.

  it('should add 8 numbers', function() {
    expect(calculator.sum(1,3,5,4,3,5,4,6)).toBe(31);
  })

});
