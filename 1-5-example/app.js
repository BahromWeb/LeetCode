
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

// 2-masala
// berilgan butun son x palindrom bo‘lsa true qaytar, bo‘lmasa false qaytar.
// Palindrom — oldindan va orqadan bir xil o‘qiladigan son.

// const isPalindrom=(x)=>{
//     let str=x.toString()
//     return str===str.split('').reverse().join('')
// }

// console.log(isPalindrom(1221))


// way -2

// const isPalindrom = (x) => {
//     if (x < 0) return false;

//     let reversed = 0; 
//     let original = x; 

//     while (x > 0) {
//         reversed = reversed * 10 + (x % 10);
//         x = Math.floor(x / 10);
//     }

//     if (reversed === original) {
//         return `${original} Palindrom son`;
//     } else {
//         return `${original} Palindrom son emas`;
//     }
// }

// console.log(isPalindrom(1221)); 
// console.log(isPalindrom(1234)); 

// way-3

// function isPalindrome(x) {
//     if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
//     let reversedHalf = 0;
//     while (x > reversedHalf) {
//         reversedHalf = reversedHalf * 10 + x % 10;
//         x = Math.floor(x / 10);
//     }
//     return x === reversedHalf || x === Math.floor(reversedHalf / 10);
// }
// console.log(isPalindrome(121));


// 3-masala: Roman to Integer
//  rim raqami (roman numeral) ko‘rinishidagi matn beriladi.
// Vazifa — uni butun songa aylantirib qaytarish.

// I → 1  
// V → 5  
// X → 10   => Matematik eslatma
// L → 50  
// C → 100  
// D → 500  
// M → 1000

// const romanToInt=(s)=>{
//     const values = {
//         I: 1, V: 5, X: 10, L: 50,
//         C: 100, D: 500, M: 1000
//     }

//     let total=0;
//     for(let i=0; i<s.length; i++){
//         if(values[s[i]]<values[s[i+1]]){
//             total-=values[s[i]]
//         }else{
//             total+=values[s[i]]
//         }
//     }
//     return total
// }

// console.log(romanToInt("XXMMDD"))

// way-2

const romanToInt=(s)=>{
    const values = {
        I: 1, V: 5, X: 10, L: 50,
        C: 100, D: 500, M: 1000
    }
    
    return s.split('').reduce((item, key, i, arr)=>{
         return values[key]<values[arr[i+1]]?item-values[key]:item+values[key]
    }, 0)
}

console.log(romanToInt("XXMMDD"))