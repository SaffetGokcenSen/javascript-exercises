const findTheOldest = function(people) {
    people.forEach((person) => {
        if ("yearOfDeath" in person) {
            person["age"] = person.yearOfDeath - person.yearOfBirth;
        }
        else {
            let today = new Date();
            let currentYear = today.getFullYear();
            person["age"] = currentYear - person.yearOfBirth;
        }
    });
    people.sort((person1, person2) => {
        return person2["age"]-person1["age"]
    });

    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
