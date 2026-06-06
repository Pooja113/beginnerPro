//2574. Left and Right Sum Differences


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let answer = new Array(nums.length)
    let leftSum = 0
    let rightSum = 0
    for(let i = 0; i< nums.length;i++){
        answer[i] = leftSum
        leftSum += nums[i]
    }

    for(let i=nums.length-1;i>=0;--i){
        answer[i] = Math.abs(answer[i] - rightSum) 
        rightSum += nums[i]
    }
    return answer
};