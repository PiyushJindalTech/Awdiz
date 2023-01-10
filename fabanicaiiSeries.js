// 1 + 1 + 2 + 3 + 5 + 8 + 13
// 1+ 1
//     1 + 1 + 2
//         1 + 2 + 3

function getFabSeries(limit) {
    if (!limit && !(limit < 0)) {
        throw Error('no of element should greater than 0');
    }
    let a = 1; b = 1;
    const series = [a, b];

    for (let i = 0; i < limit; i++) {
        let sum = a + b;
        series.push(sum);
        a = b;
        b = sum;
    }
    return series.join(' + ')
}

const out = getFabSeries();

console.log(out);