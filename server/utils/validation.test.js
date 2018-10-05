const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var string = isRealString(1234567);

    expect(string).toBe(false);
  });

  it('should reject string with only spaces', () => {
    var string = isRealString('      ');

    expect(string).toBe(false);
  });

  it('should allow string with none-space characters', () => {
    var string = isRealString('Hello World');

    expect(string).toBe(true);
  });
});
