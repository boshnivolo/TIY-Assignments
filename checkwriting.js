var test = require('mocha').it,
  assert = require('chai').assert;
var expect = require('chai').expect;

it('should convert numbers into string', function(){
  expect(true).to.be.true;
  expect(toEnglish).to.be.a('function');
});

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
  expect(fromEnglish("zero")).to.equal(0);
}); // END test(toEnglish)
function toEnglish(number){
  if (number === 0){
    return "zero";
  }
  if (number === 1){
    return "one";
  }
  if (number === 2){
    return "two";
  }
  if (number === 3){
    return "three";
  }
  if (number === 4){
    return "four";
  }
  if (number === 5){
    return "five";
  }
  if (number === 6){
    return "six";
  }
  if (number === 7){
    return "seven";
  }
  if (number === 8){
    return "eight";
  }
  if (number === 9){
    return "nine";
  }
};

test('toEnglish: `10` to `20`', function(){
  assert.isDefined(toEnglish);
  assert.isFunction(toEnglish);
  assert.equal(toEnglish(10), "ten");
  assert.equal(toEnglish(11), "eleven");
  assert.equal(toEnglish(12), "twelve");
  assert.equal(toEnglish(13), "thirteen");
  assert.equal(toEnglish(14), "fourteen");
  assert.equal(toEnglish(15), "fifteen");
  assert.equal(toEnglish(16), "sixteen");
  assert.equal(toEnglish(17), "seventeen");
  assert.equal(toEnglish(18), "eighteen");
  assert.equal(toEnglish(19), "nineteen");
});

function toEnglish(number){
  if (number === 10){
    return "ten";
  }
  if (number === 11){
    return "eleven";
  }
  if (number === 12){
    return "twelve";
  }
  if (number === 13){
    return "thirteen";
  }
  if (number === 14){
    return "fourteen";
  }
  if (number === 15){
    return "fifteen";
  }
  if (number === 16){
    return "sixteen";
  }
  if (number === 17){
    return "seventeen";
  }
  if (number === 18){
    return "eighteen";
  }
  if (number === 19){
    return "nineteen";
  }
}

  // use `assert` again...
}); // END test(toEnglish)

test('toEnglish: `21` to `30`', function(){
  test('toEnglish: `0` to `9`', function(){
    assert.isDefined(toEnglish);
    assert.isFunction(toEnglish);
    assert.equal(toEnglish(20), "twenty");
    assert.equal(toEnglish(21), "twenty-one");
    assert.equal(toEnglish(22), "twenty-two");
    assert.equal(toEnglish(23), "twenty-three");
    assert.equal(toEnglish(24), "twenty-four");
    assert.equal(toEnglish(25), "twenty-five");
    assert.equal(toEnglish(26), "twenty-six");
    assert.equal(toEnglish(27), "twenty-seven");
    assert.equal(toEnglish(28), "twenty-eight");
    assert.equal(toEnglish(29), "twenty-nine");
    assert.equal(toEnglish(30), "thirty");
  }); // END test(toEnglish)
  function toEnglish(number){
    if (number === 20){
      return "twenty";
    }
    if (number === 21){
      return "twenty-one";
    }
    if (number === 22){
      return "twenty-two";
    }
    if (number === 23){
      return "twenty-three";
    }
    if (number === 24){
      return "twenty-four";
    }
    if (number === 25){
      return "twenty-five";
    }
    if (number === 26){
      return "twenty-six";
    }
    if (number === 27){
      return "twenty-seven";
    }
    if (number === 28){
      return "twenty-eight";
    }
    if (number === 29){
      return "twenty-nine";
    }
    if (number === 30){
      return "thirty";
    }
  };
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
