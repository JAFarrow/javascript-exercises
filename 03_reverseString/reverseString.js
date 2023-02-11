const reverseString = function(string) {
    stringArray = Array.from(string);
    newArray = stringArray.reverse();
    return newArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
