'use strict';

describe('Test for hasVowels() method', function() {
  it('should return false if "dfhgjl".hasVowels() was executed', function() {
    expect('dfhgjl'.hasVowels()).toBe(false);
  });

  it('should return true if "word".hasVowels() was executed', function() {
    expect('word'.hasVowels()).toBe(true);
  });

  it('should return false if "78371038--- ".hasVowels() was executed', function() {
    expect('78371038--- '.hasVowels()).toBe(false);
  });
});