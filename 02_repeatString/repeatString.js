const repeatString = function(theString, repetitionNumber) {
    let repeatedString = "";
    if (repetitionNumber < 0) {
        return "ERROR";
    }
    else {
        for (let i = 0; i < repetitionNumber; ++i){
            repeatedString = repeatedString  + theString;
        }
        return repeatedString;
    }
};

// Do not edit below this line
module.exports = repeatString;
