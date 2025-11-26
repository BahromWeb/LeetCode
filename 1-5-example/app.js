// 1-masala: Two Sum
// Masala: Berilgan massiv ichidan shunday ikki sondan iborat indekslarni topingki, ularning yig‘indisi targetga teng bo‘lsin.

const twoSum = (nums, target) => {
  for(let i = 0; i < nums.length; i++) {
    for(let j = i + 1; j < nums.length; j++) {
      if(nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

twoSum([2, 7, 11, 15], 9); // [0, 1]


function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let needed = target - nums[i];
    if (map.has(needed)) {
      return [map.get(needed), i];
    }
    map.set(nums[i], i);
  }
}
twoSum([2, 7, 11, 15], 9); // [0, 1]

function twoSum(nums, target) {
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    const needed = target - nums[i];
    if (obj.hasOwnProperty(needed)) {
      return [obj[needed], i];
    }
    obj[nums[i]] = i;
  }
}
twoSum([2, 7, 11, 15], 9); // [0, 1]

// 2-masala: Palindrome Number
// Masala: Berilgan son o‘qilsa ham oldidan, ham orqasidan bir xil bo‘lsa — palindrome.

function isPalindrome(x) {
  const s = x.toString();
  return s === s.split("").reverse().join("");
}

function isPalindrome(x) {
  const s = x.toString();
  let left = 0, right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }

  return true;
}


function isPalindrome(x) {
  if (x < 0) return false;

  let original = x;
  let reversed = 0;

  while (x > 0) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return original === reversed;
}


