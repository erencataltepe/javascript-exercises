let findTheOldest = function(people) {
  let oldest = people[0];

  people.forEach((person) => {
    const currentYear = new Date().getFullYear();
    let oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
    let currentPersonAge = (person.yearOfDeath || currentYear) - person.yearOfBirth;
    if (currentPersonAge > oldestAge) {
      oldest = person;
    }
  })

  return oldest;
}

module.exports = findTheOldest
