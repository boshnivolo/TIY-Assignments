var test = require('mocha').it,
    expect = require('chai').expect, // Use `expect(X).to.be` et al
    assert = require('chai').assert;  // OR use `assert.equal` etc

test('making threes', function(){
  expect(threes).to.be.a('function');
  expect(threes(0)).to.deep.equal([ ]);
  expect(threes(3)).to.deep.equal([ ]);
  expect(threes(4)).to.deep.equal([ 3 ]);
  expect(threes(6)).to.deep.equal([ 3 ]);
  expect(threes(7)).to.deep.equal([ 3, 6 ]);
  expect(threes(9)).to.deep.equal([ 3, 6 ]);
  expect(threes(10)).to.deep.equal([ 3, 6, 9 ]);
  expect(threes(12)).to.deep.equal([ 3, 6, 9 ]);
  expect(threes(13)).to.deep.equal([ 3, 6, 9, 12 ]);
  expect(threes(15)).to.deep.equal([ 3, 6, 9, 12 ]);
  expect(threes(16)).to.deep.equal([ 3, 6, 9, 12, 15 ]);
  //expect(three(20)).to.deep.equal([3, 6, 9, 12, 15, 18])
  //expect(three(50)).to.deep.equal([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48])

  // Now what should go in here?
}); // END test 3s

/** @param {Number} N to limit my multiples
 * @return {Array} of multiples of 3 below N
 */

function threes(N){
  var multiples = [ ];

  var increment = 0;
  while (increment < N){
    console.log(increment);
    increment++;
  }
  if (N > 3){
    multiples.push(3);
  }
  if (N > 6){
    multiples.push(6);
  }
  if (N > 9){
    multiples.push(9);
  }
  if (N > 12){
    multiples.push(12);
  }
  if (N > 15){
    multiples.push(15);
  }
  return multiples;
}
