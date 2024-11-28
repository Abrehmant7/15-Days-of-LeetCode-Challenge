/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let result = "";

    for (let i = 0; i < s.length; i += 2 * k) {

        let reversed = s.slice(i, i + k).split("").reverse().join("");
        let remainder = s.slice(i + k, i + 2 * k);

        result += reversed + remainder;
    }

    return result;
};