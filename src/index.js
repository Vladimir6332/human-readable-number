module.exports = function toReadable(number) {
    if (number === 0) return "zero";
    let res = "";
    const numbers = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "hundred",
        1000: "thousand",
        1000000: "million",
    };

    const simpleNumbersReadable = (num) => {
        if (num === 0) return "";
        return numbers[num];
    };
    const tenNumbersReadable = (num) => {
        if (num <= 20) return simpleNumbersReadable(num);
        return `${numbers[Math.floor(num / 10) * 10]} ${simpleNumbersReadable(
            num % 10
        )}`;
    };
    const hundredNumbersReadable = (num) => {
        return `${numbers[Math.floor(num / 100)]} hundred ${tenNumbersReadable(
            num % 100
        )}`;
    };

    const numberStr = number.toString();
    const numberLength = numberStr.length;
    switch (numberLength) {
        case 1:
            res = simpleNumbersReadable(number);
            break;
        case 2:
            res = tenNumbersReadable(number);
            break;
        case 3:
            res = hundredNumbersReadable(number);
            break;
    }
    return res.trim();
};
