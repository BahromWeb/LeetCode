// LeetCode ID: 1
// Difficulty: Easy
// Masala sharti:
// Sizga integer array nums va integer target berilgan. Sizga ikki raqamni topish kerak, ularning yig‘indisi targetga teng bo‘lsin. Shu ikki raqamning indekslarini return qilishingiz kerak.
// Siz har doim faqat bitta yechim mavjudligini taxmin qilasiz va bir xil elementni ikki marta ishlatib bo‘lmaydi.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: nums[0] + nums[1] = 2 + 7 = 9

// const twoSum =(nums, target) => {
//     for(let i = 0; i < nums.length; i++) {
//         for(let j = i + 1; j < nums.length; j++) {
//             if(nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//    }
// }

// console.log(twoSum([2,7,11,15], 9)); // Output: [0, 1]

// Two way

// const twoSum=(nums, target) => {
//     const numMap = new Map();
//     for(let i=0; i<nums.length; i++){
//         const complement = target - nums[i];
//         if(numMap.has(complement)){
//             return [numMap.get(complement), i];
//         }
//         numMap.set(nums[i], i);
//     }
// }

// console.log(twoSum([2,7,11,15], 9)); // Output: [0, 1]

function twoSum(nums, target) {
    return nums.map((num, i) => {
        const complement = target - num;
        const j = nums.findIndex((n, idx) => n === complement && idx !== i);
        if (j !== -1) return [i, j];
    }).filter(Boolean)[0];
}

console.log(twoSum([2,7,11,15], 9)); // [0,1]
