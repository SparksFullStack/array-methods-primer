// # problem 1 
//instructions: given an array with the values [1, 2, 3], use a for loop to log out each of the values sequentially. This is for the purpose of showing how iteration works without diving into methods.
const nums = [1,2,3];

for (let num in nums) {
    console.log(num);
}

//or

for (let i = 0; i <= nums.length; i++) {
    console.log(nums[i]);
}

// # problem 2
//instructions: given an array with the values of [1, 2, 3], use the .forEach method to log out each of the values sequentially

nums.forEach( num => {
    console.log(num);
})

// # problem 3
//instructions: given an array with the values [1, 2, 3], create a new array that stores all of the values +1. This requires the use of the .map method. After you have created the new array, log out the values of the new array using .forEach

const plus = nums.map( num => {
    num + 1;
})

plus.forEach( num => {
    console.log(num);
})

//# problem 4
//instructions: given an array with the values [1, 2, 3], use the .reduce method to add all the values together. After you have the new value stored, log it out.

nums.reduce((total, num) => {
    return total + num;
})