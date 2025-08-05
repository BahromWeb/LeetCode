//  1. Teskari so‘z
// Shart: "salom" → "molas"

// const reverseString=(str)=>{
//     let reversed=''
//     for(let i=str.length-1; i>=0; i--){
//         reversed+=str[i]
//     }
//     return reversed
// }

// console.log(reverseString("salom"))

//  2. Eng katta sonni topish

// const findMax=(arr)=>{
//     max=arr[0]
//     for(i=1; i<=arr.length; i++){
//         if(arr[i]>max){
//             max=arr[i]
//         }
//     }
//     return max
// }

// console.log(findMax([2,4,56,67,8,45,32,56,]))

//  way-2

// const findMax=(arr)=>{
//     return max=Math.max(...arr)
// }

// console.log(findMax([2,4,56,67,8,45,32,56,]))


// 3 Palindrom son 


const isPolindrom = (str) => {
    str = str.toString();
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
    }
    return true;
}

if (isPolindrom(1221)) {
    console.log("Palindrom son");
} else {
    console.log("Palindrom son emas");
}
