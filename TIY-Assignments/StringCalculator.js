var test = require('mocha').it,
  expect = require('chai').expect;

test('fromEnglish: "zero" through "nine"'), function(){
  expect(fromEnglish).to.exist;
  expect(fromEnglish("zero")).to.equal(0);
  expect(fromEnglish("one")).to.equal(1);
  expect(fromEnglish("two")).to.equal(2);
  expect(fromEnglish("three")).to.equal(3);
  expect(fromEnglish("four")).to.equal(4);
  expect(fromEnglish("five")).to.equal(5);
  expect(fromEnglish("six")).to.equal(6);
  expect(fromEnglish("seven")).to.equal(7);
  expect(fromEnglish("eight")).to.equal(8);
  expect(fromEnglish("nine")).to.equal(9);
  // more tests here, please...
}); // END test(fromEnglish)

/**
 * @param {"zero"} word representing an English number
 * @return {1} value corresponding to `word`
 */
function fromEnglish(word){
  return word.toNumber()
} // END fromEnglish

test('plus: ("zero", "zero") through ("zero", "nine")', function(){
  expect(plus).to.exist;
  expect(plus("zero", "zero")).to.equal(0);
  expect(plus("zero", "one")).to.equal(1); // change just one thing!
  expect(plus("zero", "two")).to.equal(2);
  expect(plus("zero", "three")).to.equal(3);
  expect(plus("zero", "four")).to.equal(4);
  expect(plus("zero", "five")).to.equal(5);
  expect(plus("zero", "six")).to.equal(6);
  expect(plus("zero", "seven")).to.equal(7);
  expect(plus("zero", "eight")).to.equal(8);
  expect(plus("zero", "nine")).to.equal(9); // ha!
  // write more tests like those...
}); // END test(plus)


function plus(A, B){
  return A + B
}
/**
 * @param {String} var A ==
 * @param {String} B representing an English number word
 * @return {Number} the value of `A` added to `B`
function plus(A, B){
  return A + B
} // END plus

test('minus: ("zero", "zero") through ("zero", "nine")', function(){
  expect(minus).to.exist;
  expect(minus("zero", "zero").to.equal(0);
  expect(minus("zero", "one").to.equal(-1);
  // etc, etc, etc
}); // END test(minus)

// What about multiplication? Division? Exponents?

