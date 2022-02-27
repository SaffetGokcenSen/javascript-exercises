const sumAll = function(addend1, addend2) {
    if ((typeof(addend1) !== "number") || (typeof(addend2) !== "number")) {
        return "ERROR";
    } else if ((addend1 < 0) || (addend2 < 0)) {
        return "ERROR";
    }
    else {
        let sum = 0;
        let tempAddend;
        if (addend1 > addend2) {
            tempAddend = addend1;
            addend1 = addend2;
            addend2 = tempAddend;
        }
        for (let i = addend1; i <= addend2; ++i) {
            sum += i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
