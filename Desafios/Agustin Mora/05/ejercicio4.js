let nums = [23, 45, 12, 67, 34, 89, 21];
let mayor = nums[0];

for (let i = 1; i < nums.length; i++) {
  if (nums[i] > mayor) {
    mayor = nums[i];
  }
}

console.log("El número más grande es:", mayor);
