const getName = function () {
  const obj = {
    name: 'John',
    getName() {
      return this.name;
    }
  };
  /*
    the value of this is determined by how you CALL the function...

    To keep it short, if you call it "like" method - e.g. obj.getName(), "this" refers to that object
    If you call it like normal function - getName(), then it refers to global object.

    But the complete true is even more complicated as there are exceptions from this rule & other cases...
   */
  return obj.getName();
};

const getSequence = function (count) {
  const numberGetters = [];

  for (var i = 1; i <= count; i += 1) {
    /*
      Probably the trickiest one: you need to keep variable in separate scope for each function in an array,
      otherwise all of them refer to the same variable i
     */
    numberGetters.push((function(j) {
      return function () {
        return j;
      };
    }(i)));
  }

  return numberGetters.map(numberGetter => numberGetter());
};

const getAdults = function (people) {
  return people
    .filter(person => person.age > 18) // filter out all items that return false
    .map(adult => `${adult.firstName} ${adult.surname}`) // "map" original array of object to the new array of strings
    .join(', ');

  /*
    Note: `${adult.firstName} ${adult.surname}` notation is called "template literal", it's new feature in ES6
    It gives the same output as common string concatenation: adult.firstName + ' ' + adult.surname
  */
};

const fetchData = function (userId, callback) {
  const data = {name: 'Carl', surname: 'Gustav', title: 'king'};

  setTimeout(function() {
    if (Number.isFinite(userId)) {
      /*
        It's good practice to pass an error as the first parameter and a result as the second one.

        Also, don't forget "return" in this case, otherwise your callback is called twice!
       */
      return callback(null, data);
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