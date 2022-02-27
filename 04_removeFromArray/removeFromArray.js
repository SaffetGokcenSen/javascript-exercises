const removeFromArray = function(theArray, ...theRest) {
    let removalIndices = [];
    let j = 0;
    for (theArgument of theRest) {
        for (let i = 0; i != theArray.length; ++i) {
            if (theArgument === theArray[i]) {
                removalIndices[j] = i;
                ++j;
            }
        }
    }

    removalIndices.sort(function(a, b){return a-b});

    j = 0;
    for (theIndex of removalIndices) {
        theArray.splice((theIndex-j), 1);
        ++j;
    }

    return theArray;
};

// Do not edit below this line
module.exports = removeFromArray;
