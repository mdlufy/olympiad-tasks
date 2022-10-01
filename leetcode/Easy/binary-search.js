/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
   let low = 0;
   let high = nums.length - 1;
   
   while (low <= high) {
       let mid = Math.floor((low + high) / 2);

       let guess = nums[mid];

       if (guess == target) return mid;

       if (target > guess) {
           low = mid + 1;
       } else {
           high = mid - 1;
       }
   }

   return -1;
};