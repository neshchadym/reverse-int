module.exports = function reverse(n) {
   return (n > 0 ? 1 : -1) * Math.abs(n).toString().split('').reverse().join('')
}
