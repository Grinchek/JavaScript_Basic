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
