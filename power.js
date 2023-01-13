// Pure Functions
function calculatePower(base, power) {
    let output = 1;
    if (parseInt(base) !== base) {
        throw Error('base should be an positive interger');
    }

    console.log('1');
    console.log('2');

    if (parseInt(power) !== power) {
        throw Error('power should be an positive interger');
    }

    if (base <= 0 || power < 0) {
        throw Error('number should be positive integer');
    }
    for (let i = 0; i < power; i++) {
        output = output * base // 5, 25, 125
    }

    return output;
}

const value = calculatePower(9.0, 3);

console.log(value);
