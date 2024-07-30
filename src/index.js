module.exports = function toReadable (number) {
    const numberList = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teenList = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tenList = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
    if (number === 0) {
        return 'zero';
    }

    let result = '';

    if (Math.floor(number / 100) > 0) {
        result += numberList[Math.floor(number / 100)] + ' hundred';
        number %= 100;
        if (number > 0) {
            result += ' ';
        }
    }

    if (number > 10 && number < 20) {
        result += teenList[number - 11];
    } else if (number >= 20 || number === 10) {
        result += tenList[Math.floor(number / 10) - 1];
        number %= 10;
        if (number > 0) {
            result += ' ';
        }
    }

    if (number > 0 && number <= 10) {
        result += numberList[number];
    }

    const humanReadableNumber = result.trim();
    return humanReadableNumber;
}
