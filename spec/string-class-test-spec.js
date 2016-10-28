'use strict';

describe('Test for hasVowels() method', function() {
  it('should return false if dfhgjl.hasVowels() was executed', function() {
    expect('dfhgjl'.hasVowels()).toBe(false);
  });

  it('should return true if word.hasVowels() was executed', function() {
    expect('word'.hasVowels()).toBe(true);
  });

  it('should return false if "78371038--- ".hasVowels() \
    was executed', function() {
      expect('78371038--- '.hasVowels()).toBe(false);
    });
});

describe('Test for toUpper() method', function() {
  it('should return ANDELA if anDelA.toUpper() was executed', function() {
    expect('anDelA'.toUpper).toBe('ANDELA');
  });

  it('should return LOWER CASE for "lower case".toUpper() \
    was executed', function() {
      expect('lower case'.toUpper()).toBe('LOWER CASE');
  });

  it('should return 123-456 for 123-456.toUpper()', function() {
    expect('123-456'.toUpper()).toBe('123-456');
  });
});

describe('Test for toLower() method', function() {
  it('should return "this is" for "THIS IS".toLower()', function() {
    expect('THIS IS'.toLower()).toBe('this is');
  });

  it('should return "already lower" for "already lower".toLower()', function() {
    expect('already lower'.toLower()).toBe('already lower');
  });

  it('should return "1,000,000." for "1,000,000.".toLower()', function() {
    expect('1,000,000.'.toLower()).toBe('1,000,000.');
  });
});

describe('Test for ucFirst method', function() {
  it('should return FirSt for "firSt".ucFirst()', function() {
    expect('first'.ucFirst()).toBe('First');
  });

  it('should return Andela "Andela".ucFirst()', function() {
    expect('Andela'.ucFirst()).toBe('Andela');
  });

  it('should return 12word "12word".ucFirst()', function() {
    expect('12word'.ucFirst()).toBe('12word');
  });
});

describe('Test for isQuestion method', function() {
  it('should return true for "Is this a question?".isQuestion()', function() {
    expect('Is this a question?'.isQuestion()).toBe(true);
  });

  it('should return false for "Is this a ? question".isQuestion()', function() {
    expect('Is this a ? question'.isQuestion()).toBe(false);
  });
});

describe('Test for words method', function() {
  it('should return an array of the list of words ["It", "is", "working"]\
    for "It is working".words()', function() {
      expect('It is working'.isQuestion()).toBe(['It', 'is', 'working']);
    });
});