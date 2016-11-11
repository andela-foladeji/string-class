'use strict';
const assert = require('assert');
require('../src/string-class');

describe('Test for hasVowels method', () => {
  it('should return false for words without vowels', () => {
    assert.equal('dfhgjl'.hasVowels(), false);
  });
  it('should return true for words with vowels', () => {
    assert.equal('word'.hasVowels(), true);
  });
  it('should return true for words with vowel irrespective of cases', () => {
    assert.equal('cAp'.hasVowels(), true);
  });
  it('should return false for digits and special characters ' +
    'was executed', () => {
    assert.equal('78371038--- '.hasVowels(), false);
  });
});

describe('Test for toUpper method', () => {
  it('should transform any lower case to uppercase while' +
  'leaving the uppercase', () => {
    assert.equal('anDelA'.toUpper(), 'ANDELA');
  });
  it('should transform all lower cases to uppercase' +
    'was executed', () => {
    assert.equal('lower case'.toUpper(), 'LOWER CASE');
  });
  it('should be leave digits and special characters unchanged', () => {
    assert.equal('123-456'.toUpper(), '123-456');
  });
});

describe('Test for toLower method', () => {
  it('should return lower case characters', () => {
    assert.equal('THIS IS'.toLower(), 'this is');
  });
  it('should not transform characters already in lower case', () => {
    assert.equal('already lower'.toLower(), 'already lower');
  });
  it('should handle digits and special characters correctly', () => {
    assert.equal('1,000,000.'.toLower(), '1,000,000.');
  });
});

describe('Test for ucFirst method', () => {
  it('should transform only the first character to uppercase', () => {
    assert.equal('firSt'.ucFirst(), 'FirSt');
  });
  it('should leave first character unchanged if in uppercase already', () => {
    assert.equal('Andela'.ucFirst(), 'Andela');
  });
  it('should handle digit and special character', () => {
    assert.equal('12word'.ucFirst(), '12word');
  });
});

describe('Test for isQuestion method', () => {
  it('should return true if string ends with ?', () => {
    assert.equal('Is this a question?'.isQuestion(), true);
  });
  it('should return false if string does not end with ?', () => {
    assert.equal('Is this a ? question'.isQuestion(), false);
  });
  it('should handle trailing spaces in string', () => {
    assert.equal('What?      '.isQuestion(), true);
  });
});

describe('Test for words method', () => {
  it('should return an array of words', () => {
    assert.deepEqual('It is working'.words(), ['It', 'is', 'working']);
  });
  it('should return empty array for empty string', () => {
    assert.deepEqual('     '.words(), []);
  });
  it('should be able to handle digits', () => {
    assert.deepEqual('I have $1,000,000,000'.words(),
      ['I', 'have', '1000000000']);
  });
});

describe('Test for wordCount method', () => {
  it('should return a count of words', () => {
    assert.equal('It is working'.wordCount(), 3);
  });
  it('should handle awkwardly spaced words', () => {
    assert.equal('Wierdly    spaced     text   contains 87938'.wordCount(),
      5);
  });
});

describe('Test for toCurrency method', () => {
  it('should format a number to the right currency', () => {
    assert.equal('11111.11'.toCurrency(), '11,111.11');
  });
  it('should format a number to a currency formate with trailing .00', () => {
    assert.equal('1000000'.toCurrency(), '1,000,000.00');
  });
  it('should format a number to a currency formate with trailing .00', () => {
    assert.equal('911234567'.toCurrency(), '911,234,567.00');
  });
});

describe('Test for fromCurrency method', () => {
  it('should format a currency in the number format', () => {
    assert.equal('11,111.11'.fromCurrency(), '11111.11');
  });
  it('should format a currency in the number format', () => {
    assert.equal('1,000,000'.fromCurrency(), '1000000');
  });
});

describe('Test for inverseCase method', () => {
  it('should inverse upper to lower and lower to upper', () => {
    assert.equal('Mr. Ben'.inverseCase(), 'mR. bEN');
  });
  it('should inverse upper to lower and lower to upper', () => {
    assert.equal('AnONYMoUs'.inverseCase(), 'aNonymOuS');
  });
});

describe('Test for alternatingCase method', () => {
  it('should alternate between cases while starting with lower case', () => {
    assert.equal('Onomatopoeia'.alternatingCase(), 'oNoMaToPoEiA');
  });
  it('should alternate between cases while starting with lower case', () => {
    assert.equal('iNTErestIng'.alternatingCase(), 'iNtErEsTiNg');
  });
});

describe('Test for getMiddle method', () => {
  it('should return 2 middle characters for even number words', () => {
    assert.equal('read'.getMiddle(), 'ea');
  });
  it('should return 1 middle character for odd number words', () => {
    assert.equal('reads'.getMiddle(), 'a');
  });
});

describe('Test for numberWords method', () => {
  it('should convert each digit to its word form', () => {
    assert.equal('325'.numberWords(), 'three two five');
  });
  it('should handle special characters', () => {
    assert.equal('1,000'.numberWords(), 'one, zero zero zero');
  });
});

describe('Test for isDigit method', () => {
  it('should return true for single digits', () => {
    assert.equal('3'.isDigit(), true);
  });
  it('should return false for numbers that are not single digit', () => {
    assert.equal('45'.isDigit(), false);
  });
});

describe('Test for doubleCheck method', () => {
  it('should return true if same characters follows each other', () => {
    assert.equal('aagjglkdk'.doubleCheck(), true);
  });
  it('should handle empty space also', () => {
    assert.equal('spaced  twice'.doubleCheck(), true);
  });
  it('should return false if same characters do not follow each other', () => {
    assert.equal('nothing'.doubleCheck(), false);
  });
});