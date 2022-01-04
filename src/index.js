module.exports = function reverse(n) {
    let number = Math.abs(n);
    let arr = number.toString().split("");
    let reversed = arr.reverse().join("");
    if (n > 0) {
        return -1 * reversed;
    }
    if (n < 0) {
        return reversed;
    }
}
