/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // The main function simply calls the recursive helper with initial pointers.
    return findInd(nums, target, 0, nums.length - 1);
};

// The recursive helper function
var findInd = function(nums, target, fInd, lInd) {
    // Base Case: If the search space is empty (fInd > lInd),
    // the target is not in the array. 'fInd' is the correct insertion point.
    if (fInd > lInd) {
        return fInd;
    }

    // Correct midpoint calculation
    let ind = fInd + Math.floor((lInd - fInd) / 2);
    let val = nums[ind];

    if (val === target) {
        // Target found
        return ind;
    } else if (val < target) {
        // Target is in the right half. The new first index is ind + 1.
        return findInd(nums, target, ind + 1, lInd);
    } else { // val > target
        // Target is in the left half. The new last index is ind - 1.
        return findInd(nums, target, fInd, ind - 1);
    }
}