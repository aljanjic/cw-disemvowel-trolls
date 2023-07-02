const disemvowelTrolls = require('./disemvowelTrolls');

describe('disemvowelTrolls', () => {
  it('"hello" should return "hllo"', () => {
    expect(disemvowelTrolls("hello")).toBe('hll');
  });
});
