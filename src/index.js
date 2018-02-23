module.exports = function getZerosCount(number) {
  // your implementation
    let n=1;
    let resPow = 0;
    let pow;

    do {
        pow = Math.floor(number/Math.pow(5,n));

        n++;

        resPow += pow;

    } while(pow > 0);

    return resPow;
}
