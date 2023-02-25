const palindromes = function (string) {
    const santisedStringArray = palindromesHelper(string);
    let reversedStringArray = [];
    for (i = santisedStringArray.length - 1; i >= 0; i--) {
        reversedStringArray.push(santisedStringArray[i])
    }
    if (santisedStringArray.join('') == reversedStringArray.join('')) {
        return true;
    } else {
        return false;
    }
};

const palindromesHelper = function (string) {
   let stringArray = string.toLowerCase().split('');
   let newStringArray = [];
   for (i = 0; i < stringArray.length; i++) {
    if (stringArray[i] != '!' 
    && stringArray[i] != ' ' 
    && stringArray[i] != ','
    && stringArray[i] != '.') {
        newStringArray.push(stringArray[i])
    }
   }
   return newStringArray;
}

// Do not edit below this line
module.exports = palindromes;
