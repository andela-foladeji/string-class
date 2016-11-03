'use strict';
const assert = require('assert');
require('../src/string-class');

describe('Test for hasVowels() method', () => {
  it('should return false if dfhgjl.hasVowels() was executed', () => {
    assert.equal('dfhgjl'.hasVowels(), false);
  });

  it('should return true if word.hasVowels() was executed', () => {
    assert.equal('word'.hasVowels(), true);
  });

  it('should return true for cAp.hasVowels() was executed', () => {
    assert.equal('cAp'.hasVowels(), true);
  });

  it('should return false if "78371038--- ".hasVowels() \
    was executed', () => {
    assert.equal('78371038--- '.hasVowels(), false);
  });
});

describe('Test for toUpper() method', () => {
  it('should return ANDELA if anDelA.toUpper() was executed', () => {
    assert.equal('anDelA'.toUpper(), 'ANDELA');
  });

  it('should return LOWER CASE for "lower case".toUpper() \
    was executed', () => {
    assert.equal('lower case'.toUpper(), 'LOWER CASE');
  });

  it('should return 123-456 for 123-456.toUpper()', () => {
    assert.equal('123-456'.toUpper(), '123-456');
  });
});

describe('Test for toLower() method', () => {
  it('should return "this is" for "THIS IS".toLower()', () => {
    assert.equal('THIS IS'.toLower(), 'this is');
  });

  it('should return "already lower" for "already lower".toLower()', () => {
    assert.equal('already lower'.toLower(), 'already lower');
  });

  it('should return "1,000,000." for "1,000,000.".toLower()', () => {
    assert.equal('1,000,000.'.toLower(), '1,000,000.');
  });
});

describe('Test for ucFirst method', () => {
  it('should return FirSt for "firSt".ucFirst()', () => {
    assert.equal('firSt'.ucFirst(), 'FirSt');
  });

  it('should return Andela "Andela".ucFirst()', () => {
    assert.equal('Andela'.ucFirst(), 'Andela');
  });

  it('should return 12word "12word".ucFirst()', () => {
    assert.equal('12word'.ucFirst(), '12word');
  });
});

describe('Test for isQuestion method', () => {
  it('should return true for "Is this a question?".isQuestion()', () => {
    assert.equal('Is this a question?'.isQuestion(), true);
  });

  it('should return false for "Is this a ? question".isQuestion()', () => {
    assert.equal('Is this a ? question'.isQuestion(), false);
  });

  it('should return true for "What?      ".isQuestion()', () => {
    assert.equal('What?      '.isQuestion(), true);
  });
});

describe('Test for words method', () => {
  it('should return an array of the list of words ["It", "is", "working"]\
    for "It is working".words()', () => {
    assert.deepEqual('It is working'.words(), ['It', 'is', 'working']);
  });

  it('should return [] for "     ".words()', () => {
    assert.deepEqual('     '.words(), []);
  });

  it('should return [I, have, $1,000,000,000] for \
    I have $1,000,000,000 ".words()', () => {
      assert.deepEqual('I have $1,000,000,000'.words(),
        ['I', 'have', '1000000000']);
    });
});

describe('Test for wordCount method', () => {
  it('should return 3 for "It is working".wordCount()', () => {
    assert.equal('It is working'.wordCount(), 3);
  });

  it('should return 5 for "Wierdly    spaced     text   \
    contains 87938".wordCount()', () => {
    assert.equal('Wierdly    spaced     text   contains 87938'.wordCount(),
      5);
  });
});

describe('Test for toCurrency method', () => {
  it('should return 11,111.11 for 11111.11.toCurrency()', () => {
    assert.equal('11111.11'.toCurrency(), '11,111.11');
  });

  it('should return 1,000,000 for 1000000.toCurrency()', () => {
    assert.equal('1000000'.toCurrency(), '1,000,000');
  });
});

describe('Test for fromCurrency method', () => {
  it('should return 11111.11 for 11,111.11.fromCurrency()', () => {
    assert.equal('11,111.11'.fromCurrency(), '11111.11');
  });

  it('should return 1000000 for 1,000,000.fromCurrency()', () => {
    assert.equal('1,000,000'.fromCurrency(), '1000000');
  });
});

describe('Test for inverseCase method', () => {
  it('should return mR. bEN for "Mr. Ben".inverseCase()', () => {
    assert.equal('Mr. Ben'.inverseCase(), 'mR. bEN');
  });

  it('should return aNonymOuS for AnONYMoUs.inverseCase()', () => {
    assert.equal('AnONYMoUs'.inverseCase(), 'aNonymOuS');
  });
});

describe('Test for alternatingCase method', () => {
  it('should return oNoMaToPoEiA for "Onomatopoeia".alternatingCase()', () => {
    assert.equal('Onomatopoeia'.alternatingCase(), 'oNoMaToPoEiA');
  });

  it('should return iNtErEsTiNg for iNTErestIng.alternatingCase()', () => {
    assert.equal('iNTErestIng'.alternatingCase(), 'iNtErEsTiNg');
  });
});

describe('Test for getMiddle method', () => {
  it('should return ea for read.getMiddle()', () => {
    assert.equal('read'.getMiddle(), 'ea');
  });

  it('should return a for reads.getMiddle()', () => {
    assert.equal('reads'.getMiddle(), 'a');
  });
});

describe('Test for numberWords method', () => {
  it('should return three two five for 325.numberWords()', () => {
    assert.equal('325'.numberWords(), 'three two five');
  });

  it('should return one zero zero zero for 1,000.numberWords()', () => {
    assert.equal('1,000'.numberWords(), 'one, zero zero zero');
  });
});

describe('Test for isDigit method', () => {
  it('should return true for 3', () => {
    assert.equal('3'.isDigit(), true);
  });

  it('should return return false for 34', () => {
    assert.equal('45'.isDigit(), false);
  });
});

describe('Test for doubleCheck method', () => {
  it('should return true for aagjglkdk.doubleCheck()', () => {
    assert.equal('aagjglkdk'.doubleCheck(), true);
  });

  it('should return true for spaced  twice', () => {
    assert.equal('spaced  twice'.doubleCheck(), true);
  });

  it('should return false for nothing', () => {
    assert.equal('nothing'.doubleCheck(), false);
  });
});