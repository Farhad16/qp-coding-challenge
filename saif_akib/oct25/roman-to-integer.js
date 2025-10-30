/**
 * @param {string} s
 * @return {number}
 */
//TC: O(|s|) size of s
//MC: O(1)
var romanToInt = function(s) {
    const romanValue = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000};
    let sum = 0;
    for(let i = 0; i < s.length; i++) {
        if(romanValue[s[i]] < romanValue[s[i+1]]) {
            sum -= romanValue[s[i]]
        } else {
            sum +=romanValue[s[i]]
        }
    }
    return sum;
};

//test cases
console.log(romanToInt("MCMXCIV"));
console.log(romanToInt("LVIII"));