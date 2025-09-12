/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    max =nums[0];
    min = nums[0]
    for(i=0; i<nums.length;i++){
       if(nums[i]>max){
        max = nums[i]
       }if(nums[i]<min){
        min=nums[i]
       }

    }
     max1=1
    for(j=0;j<=max;j++){
       
       if(min%j==0&&max%j==0){
        max1=Math.max(max1,j)
       }
       
    }
    return max1
};