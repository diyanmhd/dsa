/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    const minNum = Math.min(...nums);
    const maxNum = Math.max(...nums);

    // helper function for gcd (Euclidean algorithm)
    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    return gcd(minNum, maxNum);
};
