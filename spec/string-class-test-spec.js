'use strict';

describe('Test for hasVowels() method', () => {
  it('should return false if dfhgjl.hasVowels() was executed', () => {
    expect('dfhgjl'.hasVowels()).toBe(false);
  });

  it('should return true if word.hasVowels() was executed', () => {
    expect('word'.hasVowels()).toBe(true);
  });

  it('should return true for cAp.hasVowels() was executed', () => {
    expect('cAp'.hasVowels()).toBe(true);
  });

  it('should return false if "78371038--- ".hasVowels() \
    was executed', () => {
      expect('78371038--- '.hasVowels()).toBe(false);
    });
});

describe('Test for toUpper() method', () => {
  it('should return ANDELA if anDelA.toUpper() was executed', () => {
    expect('anDelA'.toUpper()).toBe('ANDELA');
  });

  it('should return LOWER CASE for "lower case".toUpper() \
    was executed', () => {
      expect('lower case'.toUpper()).toBe('LOWER CASE');
  });

  it('should return 123-456 for 123-456.toUpper()', () => {
    expect('123-456'.toUpper()).toBe('123-456');
  });
});

describe('Test for toLower() method', () => {
  it('should return "this is" for "THIS IS".toLower()', () => {
    expect('THIS IS'.toLower()).toBe('this is');
  });

  it('should return "already lower" for "already lower".toLower()', () => {
    expect('already lower'.toLower()).toBe('already lower');
  });

  it('should return "1,000,000." for "1,000,000.".toLower()', () => {
    expect('1,000,000.'.toLower()).toBe('1,000,000.');
  });
});

describe('Test for ucFirst method', () => {
  it('should return FirSt for "firSt".ucFirst()', () => {
    expect('first'.ucFirst()).toBe('First');
  });

  it('should return Andela "Andela".ucFirst()', () => {
    expect('Andela'.ucFirst()).toBe('Andela');
  });

  it('should return 12word "12word".ucFirst()', () => {
    expect('12word'.ucFirst()).toBe('12word');
  });
});

describe('Test for isQuestion method', () => {
  it('should return true for "Is this a question?".isQuestion()', () => {
    expect('Is this a question?'.isQuestion()).toBe(true);
  });

  it('should return false for "Is this a ? question".isQuestion()', () => {
    expect('Is this a ? question'.isQuestion()).toBe(false);
  });

  it('should return true for "What?      ".isQuestion()', () => {
    expect('What?      '.isQuestion()).toBe(true);
  });
});

describe('Test for words method', () => {
  it('should return an array of the list of words ["It", "is", "working"]\
    for "It is working".words()', () => {
      expect('It is working'.words()).toEqual(['It', 'is', 'working']);
    });

  it('should return [] for "     ".words()', () => {
    expect('     '.words()).toEqual([]);
  });

  it('should return [I, have, $1,000,000,000] for I have $1,000,000,000 ".words()', () => {
    expect('I have $1,000,000,000'.words()).toEqual(['I', 'have', '1000000000']);
  });
});

describe('Test for wordCount method', () => {
  it('should return 3 for "It is working".wordCount()', () => {
    expect('It is working'.wordCount()).toBe(3);
  });

  it('should return 5 for "Wierdly    spaced     text   \
    contains 87938".wordCount()',() => {
      expect('Wierdly    spaced     text   contains 87938'.wordCount()).toBe(5);
    });
});

describe('Test for toCurrency method', () => {
  it('should return 11,111.11 for 11111.11.toCurrency()', () => {
    expect('11111.11'.toCurrency()).toBe('11,111.11');
  });

  it('should return 1,000,000 for 1000000.toCurrency()', () => {
    expect('1000000'.toCurrency()).toBe('1,000,000');
  });
});

describe('Test for fromCurrency method', () => {
  it('should return 11111.11 for 11,111.11.fromCurrency()', () => {
    expect('11,111.11'.fromCurrency()).toBe('11111.11');
  });

  it('should return 1000000 for 1,000,000.fromCurrency()', () => {
    expect('1,000,000'.fromCurrency()).toBe('1000000');
  });
});

describe('Test for inverseCase method', () => {
  it('should return mR. bEN for "Mr. Ben".inverseCase()', () => {
    expect('Mr. Ben'.inverseCase()).toBe('mR. bEN');
  });

  it('should return aNonymOuS for AnONYMoUs.inverseCase()', () => {
    expect('aNonymOuS'.inverseCase()).toBe('aNonymOuS');
  });
});

describe('Test for alternatingCase method', () => {
  it('should return mR. bEN for "Onomatopoeia".alternatingCase()', () => {
    expect('Onomatopoeia'.alternatingCase()).toBe('oNoMaToPoEiA');
  });

  it('should return iNtErEsTiNg for iNTErestIng.alternatingCase()', () => {
    expect('iNTErestIng'.alternatingCase()).toBe('iNtErEsTiNg');
  });
});

describe('Test for getMiddle method', () => {
  it('should return ea for read.getMiddle()', () => {
    expect('read'.getMiddle()).toBe('ea');
  });

  it('should return a for reads.getMiddle()', () => {
    expect('reads'.getMiddle()).toBe('a');
  });
});

describe('Test for numberWords method', () => {
  it('should return three two five for 325.numberWords()', () => {
    expect('325'.numberWords()).toBe('three two five');
  });

  it('should return one zero zero zero for 1,000.numberWords()', () => {
    expect('1,000'.numberWords()).toBe('one zero zero zero');
  });
});

describe('Test for isDigit method', () => {
  it('should return true for 3', () => {
    expect('3'.isDigit()).toBe(true);
  });

  it('should return return false for 34', () => {
    expect('45'.isDigit()).toBe(false);
  });
});

describe('Test for doubleCheck method', () => {
  it('should return true for aagjglkdk.doubleCheck()', () => {
    expect('aagjglkdk'.doubleCheck()).toBe(true);
  });

  it('should return true for spaced  twice', () => {
    expect('spaced  twice'.doubleCheck()).toBe(true);
  });

  it('should return false for nothing', () => {
    expect('nothing'.doubleCheck()).toBe(false);
  });
});