/**
 * Created by checarsner on 3/15/16.
 */
function Calculator() {}

Calculator.prototype.sum = function() {

  var args = Array.prototype.slice.call(arguments);
  var number = 0;

  args.forEach(function(num){
    number = number + num;
  });

  return number;

};
