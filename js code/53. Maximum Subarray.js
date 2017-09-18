var maxSubArray = function(nums) {
    let sum_n=nums[0]
    let max_n=sum_n
    for (let i=1;i<nums.length;i++){
        sum_n=Math.max(nums[i],sum_n+nums[i])
        if(sum_n>max_n){
            max_n=sum_n
        }
    }
    return max_n
};