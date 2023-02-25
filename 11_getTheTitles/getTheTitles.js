const getTheTitles = function(arr) {
    let newArray = arr.map(function(book) {
        return book.title;
    })
    return newArray;
};

// Do not edit below this line
module.exports = getTheTitles;
