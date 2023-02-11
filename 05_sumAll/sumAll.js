const sumAll = function(intOne, intTwo) {
    finalSum = 0;
    if (intOne < intTwo) {
        startInt = intOne;
        endInt = intTwo;
    } else {
        startInt = intTwo;
        endInt = intOne;
    }
    if (typeof(intOne) == 'number' && typeof(intTwo) == 'number' && intOne >= 0 && intTwo >= 0) {
        do {
            finalSum += startInt;
            startInt++;
        } while (startInt <= endInt);
    } else {
        return "ERROR"
    }    
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
