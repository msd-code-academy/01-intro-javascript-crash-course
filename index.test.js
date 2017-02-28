const traps = require('./index');
const expect = require('expect');

describe('Introductory traps', function () {
  describe('getName', function () {
    it('should return name', function () {
      const name = traps.getName();

      expect(name).toBe('John');
    });
  });

  describe('getSequence', function () {
    it('should return sequence of numbers', function () {
      const sequence = traps.getSequence(3);

      expect(sequence).toEqual([1, 2, 3]);
    });
  });
});