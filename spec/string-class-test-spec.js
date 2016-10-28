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

describe('Test for wordCount method', function() {
  it('should return 3 for "It is working".wordCount()', function() {
    expect('It is working'.wordCount()).toBe(3);
  });

  it('should return 5 for "Wierdly    spaced     text   \
    contains 87938".wordCount()',function() {
      expect('Wierdly    spaced     text   contains 87938'.wordCount()).toBe(5);
    });
});

describe('Test for toCurrency method', function() {
  it('should return 11,111.11 for 11111.11.toCurrency()', function() {
    expect('11111.11'.toCurrency()).toBe('11,111.11');
  });

  it('should return 1,000,000 for 1000000.toCurrency()', function() {
    expect('1000000'.toCurrency()).toBe('1,000,000');
  });

  it('should return 1,000,000 for 1,000000.toCurrency()', function() {
    expect('1,000000'.toCurrency()).toBe('1,000,000');
  });
});

describe('Test for fromCurrency method', function() {
  it('should return 11111.11 for 11,111.11.fromCurrency()', function() {
    expect('11,111.11'.fromCurrency()).toBe(11111.11);
  });

  it('should return 1000000 for 1,000,000.fromCurrency()', function() {
    expect('1,000,000'.fromCurrency()).toBe(1000000);
  });
});

describe('Test for inverseCase method', function() {
  it('should return mR. bEN for "Mr. Ben".inverseCase()', function() {
    expect('Mr. Ben'.inverseCase()).toBe('mR. bEN');
  });

  it('should return aNonymOuS for AnONYMoUs.inverseCase()', function() {
    expect('aNonymOuS'.inverseCase()).toBe('aNonymOuS');
  });
});

describe('Test for alternatingCase method', function() {
  it('should return mR. bEN for "Onomatopoeia".alternatingCase()', function() {
    expect('Onomatopoeia'.alternatingCase()).toBe('oNoMaToPoEiA');
  });

  it('should return iNtErEsTiNg for iNTErestIng.alternatingCase()', function() {
    expect('iNTErestIng'.alternatingCase()).toBe('iNtErEsTiNg');
  });
});

describe('Test for getMiddle method', function() {
  it('should return ea for read.getMiddle()', function() {
    expect('read'.getMiddle()).toBe('ea');
  });

  it('should return a for reads.getMiddle()', function() {
    expect('reads'.getMiddle()).toBe('a');
  });
});