// LeetCode oson masalalari JavaScript bilan

// 1. Two Sum
// 🔹 Masala:
// Sizga sonlardan iborat nums array va target soni berilgan.
// Shunday ikkita index topingki, ularning qiymatlari yig'indisi targetga teng bo‘lsin.

// const  twoSum=(nums, target)=>{
//     for(let i=0; i<nums.length; i++){
//         for(let j=0; j<nums.length; j++){
//             if(nums[i]+nums[j]===target){
//                 return [i, j]
//             }
//         }
//     }
// }

// console.log(twoSum([23,4,5,67,89,0,8], 9))

// way-2

const twoSum=(nums, target)=>{
    const map=new Map()
    for(let i=0; i<nums.length; i++){
        needed=target-nums[i]

        if(map.has(needed)){
            return[map.get(needed), i]
        }
        map.set(nums[i], i)
    }
}

console.log(twoSum([23,4,5,67,89,0,8], 9))