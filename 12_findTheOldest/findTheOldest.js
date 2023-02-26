const findTheOldest = function(obj) {
    let workingArray = obj;
    let nameAndAge = [];
    for (i = 0; i < workingArray.length; i++) {
        if (workingArray[i].yearOfDeath == null) {
            nameAndAge[i] = {
                "name": workingArray[i].name,
                "age": (new Date().getFullYear() - workingArray[i].yearOfBirth),
            }
        } else {
            nameAndAge[i] = {
                "name": workingArray[i].name,
                "age": (workingArray[i].yearOfDeath - workingArray[i].yearOfBirth),
            }
        }
    }

    let theOldest = nameAndAge.reduce(function(former, current) {
        return former.age > current.age ? former : current;
    });
    return theOldest;
};
// Do not edit below this line
module.exports = findTheOldest;
