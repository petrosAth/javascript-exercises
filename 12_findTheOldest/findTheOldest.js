const findTheOldest = function(people) {
  return people.reduce((lastPerson, newPerson) => {
    let oldest = getAge(lastPerson);
    let current = getAge(newPerson);

    return current > oldest ? newPerson : lastPerson;
  });
};

function getAge(person) {
  const currentYear = new Date().getFullYear();
  if (isNaN(person.yearOfDeath)) {
    return currentYear - person.yearOfBirth;
  }
  return person.yearOfDeath - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
