const getName = function () {
  const obj = {
    name: 'John',
    getName() {
      return this.name;
    }
  };
  const getName = obj.getName;

  return getName();
};

const getSequence = function (count) {
  const numberGetters = [];

  for (var i = 1; i <= count; i += 1) {
    numberGetters.push(function() {
      return i;
    });
  }

  return numberGetters.map(numberGetter => numberGetter());
};

const getAdults = function (people) {
  return people
    .filter(person => true)
    .map(adult => adult.firstName)
    .join(', ')
};

const fetchData = function (userId, callback) {
  const data = {name: 'Carl', surname: 'Gustav', title: 'king'};

  setTimeout(function() {
    if (Number.isFinite(userId)) {
      callback(data);
    }

    callback(new Error('Bad request'));
  }, 1);
};

module.exports = {
  getName,
  getSequence,
  getAdults,
  fetchData
};