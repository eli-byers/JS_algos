/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length <= 1) return s.length;

    var res = start = end = 0;
    var map = {};

    while (start < s.length - res){
        var char = s[end];
        if (map[char] != undefined){
            newStart = map[char];
            while (start < newStart){
                delete map[s[start++]];
            }
            start++
        }
        map[char] = end;
        end += 1

        if (end - start > res) res = end - start;
    }

    return res;
};


var lengthOfLongestSubstring = function(s) {
    if (s.length <= 1) return s.length;

    var res = start = end = 0;
    var map = {};

    while (start < s.length - res){
        if (map[s[end]] == undefined){
            map[s[end]] = end++;
            res = end - start > res ? end - start : res;
        }
        else {
            delete map[s[start++]]
        }
    }

    return res;
};


res = lengthOfLongestSubstring("aabcadc");
console.log(res);