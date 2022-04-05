const getTheTitles = function(theArray) {
    let titlesArray = [];
    theArray.forEach((element) => {
        titlesArray.push(element['title']);
    })
    return titlesArray;
};

// Do not edit below this line
module.exports = getTheTitles;
