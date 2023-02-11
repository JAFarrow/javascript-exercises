const removeFromArray = function(array, ...rejects) {
    let workingArray = array;
    for (i = 0; i < rejects.length; i++) {
        if (workingArray.includes(rejects[i]) == true) {
            workingArray.splice(workingArray.indexOf(rejects[i]), 1);
        }
    }
    return workingArray;
};

console.log(removeFromArray([1, 2, 3, 4], 2, 'dogs'));

// Do not edit below this line
module.exports = removeFromArray;
