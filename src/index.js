module.exports = function reverse(n) {
    (n > 0 ? 1 : -1) * Math.abs(n).toString().split('').reverse().join('')
}
