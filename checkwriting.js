var test = require('mocha').it,
  assert = require('chai').assert;

test('toEnglish: `0` to `9`', function(){
  assert.isDefined(toEnglish);
  assert.isFunction(toEnglish);
  assert.equal(toEnglish(0), "zero");
  assert.equal(toEnglish(1), "one");
  assert.equal(toEnglish(2), "two");
  assert.equal(toEnglish(3), "three");
  assert.equal(toEnglish(4), "four");
  assert.equal(toEnglish(5), "five");
  assert.equal(toEnglish(6), "six");
  assert.equal(toEnglish(7), "seven");
  assert.equal(toEnglish(8), "eight");
  assert.equal(toEnglish(9), "nine");
}); // END test(toEnglish)
function fromEnglish(word){
  if (word === "one"){
    return 1;
  }
  if (word === "two"){
    return 2;
  }
  if (word === "three"){
    return 3;
  }
  if (word === "four"){
    return 4;
  }
  if (word === "five"){
    return 5;
  }
  if (word === "six"){
    return 6;
  }
  if (word === "seven"){
    return 7;
  }
  if (word === "eight"){
    return 8;
  }
  if (word === "nine"){
    return 9;
  }

  return 0;
}

test('toEnglish: `10` to `20`', function(){
  // use `assert` again...
}); // END test(toEnglish)

test('toEnglish: `21` to `30`', function(){
  // this is where `toEnglish` starts to get interesting...
}); // END test(toEnglish)

/**
 * @param {Number} value to convert to English number word
 * @return {String} representing `value` in English
 */
function toEnglish(value){
  // start simply and refactor...
} // END toEnglish

test('BEAST MODE: toCheck', function(){
  assert.isFunction(toCheck);
  assert.equal(toCheck(1.23), "one & 23/100s");
  assert.equal(toCheck(12.34), "twelve & 34/100s");
  assert.equal(toCheck(123.45), "one hundred twenty three & 45/100s");
  assert.equal(toCheck(1234.56), "one thousand, two hundred thirty four & 56/100s");
  // you might need to try some values in between...
}); // END test(BEAST MODE)
