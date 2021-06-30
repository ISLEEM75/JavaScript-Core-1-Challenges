// Write code to return the the number of vowels in `str`
var vowelCount = function(str) {
    return str.match(/[aeiou]/g).length;
};
vowelCount("asdfasfs");