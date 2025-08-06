// 1. Teskari So‘z
// Berilgan matnning har bir so‘zini teskari qilib qaytaradigan funksiya yozing.
// Input: "hello world" → Output: "olleh dlrow"

// 1-example

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
