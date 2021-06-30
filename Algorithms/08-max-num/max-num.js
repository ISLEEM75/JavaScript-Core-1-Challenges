// Write code to return the largest number in the given array

var maxNum = function(arr) {
    let max = Math.max(...arr);
    return max;
};
maxNum([3, 5, 7, 8, 9, 15, 22, 3]);