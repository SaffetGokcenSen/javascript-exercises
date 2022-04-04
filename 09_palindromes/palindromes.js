const palindromes = function (theString) {
    let punctuation = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', 
    '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`',
    '{', '|', '}', '~'];

    punctuation.forEach((mark) => {
        if (theString.includes(mark)) {
            theString = theString.replaceAll(mark, '');
        }
    })

    theString = theString.toLowerCase();
    theString = theString.replaceAll(' ', '');
    let theReverse = theString.split("").reverse().join("");
    
    return (theReverse === theString)
};

// Do not edit below this line
module.exports = palindromes;
