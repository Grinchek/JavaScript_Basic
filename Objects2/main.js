function cereateFraction(numer, denom) {
    const fraction = {
        numerator: numer,
        denominator: denom
    }
    return fraction;
}
function addFractions(fraction1, fraction2) {
    const addedFraction = {
        sumNumerator: (fraction1.numerator * fraction2.denominator) + (fraction2.numerator * fraction1.denominator),
        sumDenominator: (fraction1.denominator * fraction2.denominator)


    }
    console.log(`${addedFraction.sumNumerator}/${addedFraction.sumDenominator}`);

}
function subFractions(fraction1, fraction2) {
    const subFraction = {
        difNumerator: (fraction1.numerator * fraction2.denominator) - (fraction2.numerator * fraction1.denominator),
        sdifDenominator: (fraction1.denominator * fraction2.denominator)


    }
    console.log(`${subFraction.difNumerator}/${subFraction.sdifDenominator}`);

}
function divisionFractions(fraction1, fraction2) {
    const divFraction = {
        divNumerator: (fraction1.numerator * fraction2.denominator),
        divDenominator: (fraction1.denominator * fraction2.numerator)


    }
    console.log(`${divFraction.divNumerator}/${divFraction.divDenominator}`);

}
function multiFractions(fraction1, fraction2) {
    const multiFraction = {
        multiNumerator: (fraction1.numerator * fraction2.numerator),
        multiDenominator: (fraction1.denominator * fraction2.denominator)


    }
    console.log(`${multiFraction.multiNumerator}/${multiFraction.multiDenominator}`);

}
addFractions(cereateFraction(3, 4), cereateFraction(4, 7));
subFractions(cereateFraction(4, 5), cereateFraction(1, 3));
divisionFractions(cereateFraction(2, 5), cereateFraction(3, 7));
multiFractions(cereateFraction(2, 5), cereateFraction(3, 7));


function createTime(hours, minutes, seconds) {
    const myTime = {}
    hours > 23 || hours < 0 ? myTime.hours = 0 : myTime.hours = hours;
    minutes > 59 || minutes < 0 ? myTime.minutes = 0 : myTime.minutes = minutes;
    seconds > 59 || seconds < 0 ? myTime.seconds = 0 : myTime.seconds = seconds;
    return myTime;

}

function showTime(time) {
    time.hours < 10 ? time.hours = `0${time.hours}` : time.hours;
    time.minutes < 10 ? time.minutes = `0${time.minutes}` : time.minutes;
    time.seconds < 10 ? time.seconds = `0${time.seconds}` : time.seconds;
    console.log(`${time.hours}:${time.minutes}:${time.seconds}`);
}
function plusSeconds(time, second) {
    second > 59 ? second = 59 : second;
    const incremented = {
        hours: (time.hours),
        minutes: (time.minutes),
        seconds: (time.seconds + second)
    };
    if (incremented.seconds > 59) {
        incremented.minutes++;
        incremented.seconds -= 60;
    }
    if (incremented.minutes > 59) {
        incremented.hours++;
        incremented.minutes -= 60;
    }
    incremented.hours > 23 ? incremented.hours = 0 : incremented.hours;
    return incremented;
}
function plusMinutes(time, minute) {
    minute > 59 ? minute = 59 : minute;
    const incremented = {
        hours: (time.hours),
        minutes: (time.minutes + minute),
        seconds: (time.seconds)
    };
    if (incremented.minutes > 59) {
        incremented.hours++;
        incremented.minutes -= 60;
    }
    incremented.hours > 23 ? incremented.hours = 0 : incremented.hours;
    return incremented;
}
function plusHours(time, hour) {
    hour > 23 ? hour = 23 : hour;
    const incremented = {
        hours: (time.hours + hour),
        minutes: (time.minutes),
        seconds: (time.seconds)
    };
    incremented.hours > 23 ? incremented.hours -= 24 : incremented.hours;
    return incremented;
}
const time = createTime(23, 59, 59);
showTime(plusSeconds(time, 33));
showTime(plusMinutes(time, 33))
showTime(plusHours(time, 13))

