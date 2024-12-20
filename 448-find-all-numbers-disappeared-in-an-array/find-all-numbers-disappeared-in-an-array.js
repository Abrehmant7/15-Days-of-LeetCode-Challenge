/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
     for(let i = 0; i<nums.length; i++){
       const index = Math.abs(nums[i]) - 1;
       nums[index] = Math.abs(nums[index])*-1;
   }
   
   const result = [];
   for(let i=0; i<nums.length; i++){
       if(nums[i]>0){
           result.push(i+1)
       }
   }
   
   return result;
};