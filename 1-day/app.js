// JavaScript masala chelenge

// 1-masala
// Berilgan massivdagi eng katta elementni toping.
// Input: [5, 9, 2, 4, 11, 3]
// Output: 11

// const findMax=(arr)=>{
//      max=arr[0]
//      for(let i=1; i<arr.length; i++){
//         if(arr[i]>max){
//             max=arr[i]
//         }
//      }
//      return (max)
// }

// console.log(findMax([5, 9, 2, 4, 11, 3]))

// method usul

// const findMax=(arr)=>{
//     return Math.max(...arr)
// }

// console.log(findMax([5, 9, 2, 4, 11, 3]))

// 2-masala 

// Shart:
// Input: "WebBrainAcademy"
// Output: 3 (W, B, A — katta harflar)

// const countUppercase=(str)=>{
//     let count=0
//     for(let i=0; i<str.length; i++){
//         if(str[i]>='A' && str[i]<='Z'){
//               count++
//               console.log(str[i])
//         }
//     }
//     return(count)
// }

// console.log(countUppercase("HelloWorLD JAVascripT"))

// way-2

// const countUppercase=(str)=>{
//     return  str.split('').filter(char=>char>='A' && char<='Z').length
// }

// console.log(countUppercase("HelloWorLD JAVascripT"))

// 3-masala 

// const getPositive=(arr)=>{
//     let resualt=[]
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]>=0){
//             resualt.push(arr[i])
//         }
//     }
//      return resualt
// }

// console.log(getPositive([3, -1, 5, 0, -4, 8]))

// way-2

// const getPositive=(arr)=>{
//     return arr.filter((num)=>num>=0)
// }

// console.log(getPositive([3, -1, 5, 0, -4, 8]))

