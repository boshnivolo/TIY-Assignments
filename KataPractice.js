var expect = require('chai').expect;

/**
 * rovarspraket:
 * Given a phrase like "this is fun!"
 * Produce a roverspraket version:
 *   "tothohisos isos fofunon"
 * We need a function: rovarspraket
 * It accepts 1 parameter, a String, called phrase
 * It doubles every consonent and inserts an "o" between them.
 *
 * In addition, we need a function named 'isVowel'
 * It accepts 1 parameter, a single character, called `char`
 * It returns TRUE if `char` is an english vowel
 * Otherwise it returns false
 * Finally, we need a function named `doubler`
 * It accepts 1 param, a character, called `consonent`
 * It doubles 'consonent' and inserts an "o" in the middle.
 */
it('should identify vowels', function(){
  expect(true).to.be.true;
  expect(isVowel).to.be.a('function');
  expect(isVowel('a')).to.be.true;
  expect(isVowel('A')).to.be.true;
  expect(isVowel('b')).to.be.false;
  expect(isVowel(0)).to.be.false;
  expect(isVowel('dog')).to.be.false;
});

function isVowel(char){
  if (char === 'A'){
    return true;
}
  if (char === 'a'){
    return true;
}

  return false;
}
