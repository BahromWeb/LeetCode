
// 1-masala
//  Ro‘yxatdan ikkita turli indeksdagi sonlarni topish kerakki, ularning yig‘indisi targetga teng bo‘lsin.
// Natija sifatida bu ikkala sonning indekslarini massiv ko‘rinishida qaytar.

// const twoSum=(nums, target)=>{
//     for(let i=0; i<nums.length; i++){
//         for(let j=i+1; j<nums.length; j++){
//             if(nums[i]+nums[j]==target){
//                 return [i, j]
//             }
//         }
//     }
// }


// console.log(twoSum([3, 4, 5, 7, 8, 89, 43, 20], 15))

// way-2

// const twoSum=(nums, target)=>{
//     let map=new Map()
    
//     for(let i=0; i<nums.length; i++){
//         let needed=target-nums[i]

//         if(map.has(needed)){
//             return [map.get(needed), i]
//         }
//         map.set(nums[i], i)
//     }

// }

// console.log(twoSum([3, 4, 5, 7, 8, 89, 43, 20], 15))

