// 1. Teskari So‘z
// Berilgan matnning har bir so‘zini teskari qilib qaytaradigan funksiya yozing.
// Input: "hello world" → Output: "olleh dlrow"

// 1-masala

// const reverseWord=(str)=>{
//   let  word=str.split(" ")
//   let newReverse=[]
//     for(let i=0; i<word.length; i++){
//       let  reversed=word[i].split("").reverse().join('')
//         newReverse.push(reversed)
//     }
//     return newReverse.join(" ")
// }

// console.log(reverseWord("Hello JavaScript hammaga"))

// 2-masala 

// Shart:
// Berilgan so‘zda nechta harf bir necha marta takrorlanganini aniqlang va ularni obyekt (object) ko‘rinishida qaytaring.

// const findDuplicateLetters=(str)=>{
//     let count={}
//     let result={}
//    for(let i=0; i<str.length; i++){
//       let char=str[i]
//       if(count[char]){
//          count[char]++
//       }else{
//          count[char]=1
//       }
//    }
//    for(let key in count){
//       if(count[key]>=2){
//          result[key]=count[key]
//       }
//    }
//    return result
// }

// console.log(findDuplicateLetters("avtomatlashtirganliklardandirmiz"))

// 3-masala 

// Shart:
// Berilgan satrdagi toq indeksdagi harflarni katta harfga, juft indeksdagilarni esa kichik harfga o‘zgartiring.

// const toqIndex=(str)=>{
//    let resualt=""
//    for(let i=0; i<str.length; i++){
//          if(i%2==0){
//              resualt+=str[i].toLowerCase()
//          }else{
//             resualt+=str[i].toUpperCase()
//          }
//    }
//    return resualt
// }

// console.log(toqIndex("hello javascript"))

//  way-2

//  const toqIndex = (str) => {
//   return str.split("").map((item, key) => 
//     key % 2 == 0 ? item.toLowerCase() : item.toUpperCase()
//   ).join("")
// }

// console.log(toqIndex("javascript"))


// 4-masala 

// Shart:
// Berilgan massivdagi barcha raqamlarni yig‘indisini hisoblaydigan funksiya yozing.


// const sunArray=(str)=>{
//     let sum=0;
//     for(let i=0; i<str.length; i++){
//         sum+=str[i]
//     }
//     return sum
// }

// console.log(sunArray([2,34,56,78,90,12]))

// way-2

// const sumArray=(str)=>{
//    return str.reduce((total, num)=>total+num, 0)
// }

// console.log(sumArray([2,34,56,78,90,12]))


// 5-masala 

// const findArray=(arr)=>{
//     let sorted=arr.sort((a, b)=>b-a)
//     return [sorted[0], sorted[1]]
// }


// console.log(findArray([2,34,56,78,89,90]))

// way-2

// const findArray = (arr) => {
//     let max1 = -Infinity;
//     let max2 = -Infinity;

//     for (let i = 0; i < arr.length; i++) {
//         let num = arr[i];

//         if (num > max1) {
//             max2 = max1;
//             max1 = num;
//         } else if (num > max2 && num !== max1) {
//             max2 = num;
//         }
//     }

//     return [max1, max2];
// }

// console.log(findArray([34, 45, 67, 4, 2, 12, 34, 90, 99])); 

// 6-masala

