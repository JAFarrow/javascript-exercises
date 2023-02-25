const fibonacci = function(position) {
    if (parseInt(position) >= 0) {
        let fibArray = [1, 1];
        for (i = 1; i < parseInt(position); i++) {
            fibArray.push(fibArray[i - 1] + fibArray[i])
        }
        return fibArray[parseInt(position) - 1]
    } else {
        return "OOPS"
    }
};

// Do not edit below this line
module.exports = fibonacci;
