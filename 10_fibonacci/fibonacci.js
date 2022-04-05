const fibonacci = function(n) {
    let first = 1, second = 1;
    if ((+n) <= 0) {
        return("OOPS");
    }
    else if ((+n) === 1) {
        return first;
    }
    else if ((+n) === 2) {
        return second;
    }
    else {
        let previous = first;
        let current = second;
        let next;
        for (let i = 3; i <= (+n); ++i) {
            next = current + previous;
            previous = current;
            current = next;
        }
        return next;
    }
};

// Do not edit below this line
module.exports = fibonacci;
