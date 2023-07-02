const disemvowelTrolls = require('./disemvowelTrolls');

describe('disemvowelTrolls', () => {
  it('"hello" should return "hllo"', () => {
    expect(disemvowelTrolls("hello")).toBe('hll');
  });

  it('"Watter" should retunr "Wttr"', () => {
    expect(disemvowelTrolls("Watter")).toBe('Wttr');
  });

  it('"klmn" should return "klmn"', () => {
    expect(disemvowelTrolls("klmn")).toBe('klmn');
  });
});
