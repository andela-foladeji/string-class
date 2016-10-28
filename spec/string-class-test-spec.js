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