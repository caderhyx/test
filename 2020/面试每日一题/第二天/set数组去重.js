// Array.from方法可以将 Set 结构转为数组。
let items = new Set([1, 2, 3, 4, 5, 5, 5, 3, 2])
const arr = Array.from(items)

console.log(items)
    // Set { 1, 2, 3, 4, 5 }
console.log(arr)
    // [ 1, 2, 3, 4, 5 ]
let b = [1, 1, 1, 2, 3, 5, 4, 4];

function a(arr1) {
    return Array.from(new Set(arr1))
}
console.log(a(b))