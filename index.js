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

module.exports = {
  getName,
  getSequence
};