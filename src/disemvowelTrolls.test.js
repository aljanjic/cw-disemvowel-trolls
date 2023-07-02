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

  it('"" should retrun ""', () => {
    expect(disemvowelTrolls('')).toBe('');
  });

  it('"aEIou" should return ""', () => {
    expect(disemvowelTrolls('aEIou')).toBe('');
  });

  it('"long" should return ""', () => {
    expect(disemvowelTrolls("No offense but, Your writing is among the worst I've ever read")).toBe("N ffns bt, Yr wrtng s mng th wrst 'v vr rd");
  });
});
