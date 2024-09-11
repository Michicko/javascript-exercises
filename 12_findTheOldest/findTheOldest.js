const getCurrentYear = function(year){
    return new Date().getFullYear() - new Date(year);
}

const getDifferenceInYears = function (year1, year2){
  if(!year2){
    return getCurrentYear(year1);
  }
  return (getCurrentYear(year1) - getCurrentYear(year2))
}

const findTheOldest = function(people) {
    const oldest = people.map((person) => {
      if(person.yearOfDeath){
        return {
          ...person,
          age: getDifferenceInYears(person.yearOfBirth, person.yearOfDeath)
        }
      }
      return {
        ...person,
        age: getDifferenceInYears(person.yearOfBirth)
      }
    }).reduce((prev, current)=> {
      if(prev.age > current.age) return prev
      
      return current
    }, people[0])
       
    return oldest
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

// Do not edit below this line
module.exports = findTheOldest;
