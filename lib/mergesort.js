/* 
 * module:  mergeSort  
 * auther:  emech
 *  
 * function mergeSort(array, cmp)   
 *      This is function will sort the input array 
 *      by using the merge sort algorithm.
 *      
 *      arr:        [required] an array to be sorted. 
 *      cmp:        [optional] a function used to compare two elements. 
 *                      if cmp(a, b) returns true true then 'a' will be 
 *                      before 'b' in the sorted result.
 *      
 *      return: [array] sorted array will be returned. if the param
 *                      'arr' is not an instance of Array, then original 
 *                      object will be returned. if 'cmp' function is not passed
 *                      then default comparator function will be used.     
 *
 *
 * You can run tests by executing "npm test" in the path of the module.
 * /path/to/module/folder/npm test         
 */
var mergeSort = (function() {
    'use strict';

    // Default comparator function will 
    // check if a < b.
    // This comparator will move non numeric 
    // values to the end of the result array.
    function defaultCmp(a, b) {
        // if each of a or b is not a number so 
        // it should be moved to after the numeric values.
        if (typeof a !== 'number')
            return false;
        if (typeof b !== 'number')
            return true;

        // check if a is less than b
        return a < b;
    }

    // If array has less than two members, 
    // sorting is not needed.
    function needMergeSort(array) {
        return Array.isArray(array) && array.length > 1;
    }

    // This function will merge two sorted arrays, left and right 
    // with the help of cmp function. 
    function merge(left, right, cmp) {
        // If cmp is not a valid function
        // defaultCmp function is used.
        if (typeof cmp !== 'function')
            cmp = defaultCmp;

        var result = [],
            iLeft = 0,
            iRight = 0;

        // merge algorithm by using cmp function
        while (iLeft < left.length && iRight < right.length) {
            if (cmp(left[iLeft], right[iRight])) {
                result.push(left[iLeft]);
                iLeft++;
            } else {
                result.push(right[iRight]);
                iRight++;
            }
        }

        // after the while, only one of the left or right array 
        // has more items, so concating both of them makes no problem
        return result.concat(left.slice(iLeft)).concat(right.slice(iRight));
    }

    // this function will sort the array by using
    // cmp function. 
    var mergeSort = function(array, cmp) {
        if (!needMergeSort(array))
            return array;

        var center = Math.floor(array.length * 0.5);

        // sorting the left half with merge sort
        var left = mergeSort(array.slice(0, center), cmp);

        // sorting the right half with merge sort
        var right = mergeSort(array.slice(center), cmp);

        // merging the sorted left and right halves
        return merge(left, right, cmp);
    }

    return mergeSort;
}());

// exporting the module
module.exports = mergeSort;
