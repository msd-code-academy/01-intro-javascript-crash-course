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

  describe('getAdults', function () {
    it('should return people older than 18 years separated by comma', function () {
      const people = [
        {firstName: 'John', surname: 'Smith', age: 30},
        {firstName: 'Peter', surname: 'Pan', age: 12},
        {firstName: 'Adriane', surname: 'Miller', age: 65}
      ];

      const adults = traps.getAdults(people);
      expect(adults).toBe('John Smith, Adriane Miller');
    });
  });

  describe('fetchData', function () {
    it('handle error properly', function (done) {
      traps.fetchData('nonsense', function (err) {
        expect(err).toBeA(Error);
        done();
      })
    });

    it('fetches data successfully', function (done) {
      traps.fetchData(2, function (err, data) {
        expect(data).toBeA('object');
        expect(data).toInclude({title: 'king'});
        done(err);
      })
    });
  });
});