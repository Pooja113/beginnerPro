//1. Two Sum

var twoSum = function(nums, target) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i]
    if(map.has(complement)) {
      return [map.get(complement), i]
    }
    map.set(nums[i],i)
  }
};

nums = [7, 11, 15,2]
target = 9

console.log(twoSum(nums, target))


//217. Contains Duplicate
nums = [1,2,3,1]
var containsDuplicate = function(nums) {
    let set = new Set()
    for(let i=0;i<nums.length;i++){
        if(set.has(nums[i])) return true
        set.add(nums[i])
    }
    return false
};

console.log(containsDuplicate(nums))


//219. Contains Duplicate II
var containsNearbyDuplicate = function(nums, k) {
    let set = new Set()
    for(let i=0; i<nums.length;i++){
        if (set.has(nums[i])) return true
        set.add(nums[i])
        if (set.size > k) set.delete(nums[i-k])
    }
    return false
};

nums = [1, 2, 3, 1]
k = 3
console.log(containsNearbyDuplicate(nums, k))


// 242. Valid Anagram
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    let arr = new Array(26).fill(0)

    for(let i=0;i<s.length;i++){
        arr[s.charCodeAt(i)-97]++
        arr[t.charCodeAt(i)-97]--
    }
    for(let check of arr) {
        if(check !== 0) return false
    }
    return true
};

console.log(isAnagram("anagram", "nagaram"))

// 49. Group Anagrams

var groupAnagrams = function(strs) {
    
};

