const reverseString = function(theString) {
    let stringArray = theString.split("");
    let reversedString = "";
    for (let i = theString.length - 1; i > -1; i--) {
        reversedString = reversedString + stringArray[i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
