/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str2 = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let str3 = str2.split('').reverse().join('');

    return str2 === str3;
};