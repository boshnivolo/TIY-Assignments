var test = require('mocha').it,
    expect = require('chai').expect, // Use `expect(X).to.be` et al
    assert = require('chai').assert;  // OR use `assert.equal` etc

test('getting a list of multiples of 3', function(){
  assert.isDefined(three);
  assert.isFunction(three);
  expect(three(0)).to.equal([]);
  expect(three(3)).to.equal([]);
  expect(three(6)).to.equal([3]);
  expect(three(9)).to.equal([3, 6])
  expect(three(10)).to.equal([3, 6, 9]);
  expect(three(15)).to.equal([3, 6, 9, 12])
  expect(three(20)).to.equal([3, 6, 9, 12, 15, 18])
  expect(three(50)).to.equal([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48])

  // Now what should go in here?
}); // END test 3s

function three(N) {
  var multiplesofthree = []
  for (count = 1; count <N; count ++) {
    if (count % 3 === 0){
      multiplesofthree.push(count);
    }
  }
  return multiplesofthree;
}
