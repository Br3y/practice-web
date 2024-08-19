// BIG O NOTATION

// const sumUpTo = n => {
//     let total = 0
//     for( let i = 1; i <= n; i++){
//         total += 1;
//     }
//     return total
// }

// const sumUpToV2 = n => {
//     return (n * (n + 1) / 2)
// }

// let t1, t2;

// t1 = Date.now()
// sumUpTo(25000000000)
// t2 = Date.now()
// console.log(`${(t2 - t1) / 1000} seconds`)

// t1 = Date.now()
// sumUpToV2(25000000000)
// t2 = Date.now()
// console.log(`${(t2 - t1) / 1000} seconds`)


// MORE EXAMPLE

// function shoutWhatsUpDawg(n){
//     for (let i = 0; i < n; i++){
//         console.log('Whats up dawg?!')
//     }
//     for (let i = 0; i < n; i++){
//         console.log('Whats up dawg?!')
//     }
// }

// shoutWhatsUpDawg(20)

// function shoutWhatsUpDawg(n){
//     for (let i = 0; i < 4; i++){
//         console.log('Whats up dawg?!')
//     }
// }

// shoutWhatsUpDawg(100)

// function shoutWordPairs(arr){
//     for(let i = 0; i < arr.length; i++){
//         for(j = 0; j < arr.length; j++){
//             console.log(arr[i] + " " + arr[j])
//         }
//     }
// }
// shoutWordPairs(["canoodle", "wabbit", "alcoholic"])
/* -------------------------------------------------- */

// const arrayName = ["Bilbo", "Gandalf", "Nazgul"]

// arrayName.forEach((item, index, array) => {
//     alert(`${item} is at index ${index} in ${array}`);
//   });

// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"}
//   ];
  
//   let user = users.find(item => item.id == 1);
  
//   alert(user.name); // John

// let users = [
//   {id: 1, name: "John"},
//   {id: 2, name: "Pete"},
//   {id: 3, name: "Mary"}
// ];

// // returns array of the first two users
// let someUsers = users.filter(item => item.id < 3);

// alert(someUsers.length); // 2

// alert(Array.isArray({})); // false

// alert(Array.isArray([])); // true


// // Translate border-left-width to borderLeftWidth
// function camelize(str){
//     return str
//         .split('-')
//         .map(
//             (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//         )
//         .join('')
// }


// const string = "background-color"
// console.log(camelize(string))


// // Filter Range
// function filterRange(arr, a, b){
//     return arr.filter(item => (a <= item && item <= b))
// }

// let arr = [5, 3, 8, 1]

// let filtered = filterRange(arr, 1, 4);
// console.log(filtered)
// console.log(arr)


// // Filter range "in place"
// function filterRangeInPlace(arr, a, b){
//     let filtered = []
//     for(let i = 0; i < arr.length; i++){

//         if(arr[i] >= a && b >= arr[i]){
//             filtered.push(arr[i])
//         }
//     }
//     console.log(filtered)
// }

// let arr = [5, 3, 8, 1]

// filterRangeInPlace(arr, 1, 4)
// console.log(arr)

// // Sort in decreasing order

// let arr = [5, 2, 1, -10, 8];

// arr.sort().reverse()

// console.log(arr)


// // Copy and sort array

// function copySorted(arr){
//     return arr.sort(localeCompare(arr))
// }

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr)

// console.log(sorted)
// console.log(arr)
// let arr = [-1, -3, -5]
// for (let i = 0; i < arr.length; i++ ){
//     if(arr[i] < 0){
//         arr[i] *= -1
//         console.log(arr[i])
//     }
// }


let arr = [ 2, 5, 7]
// let min = arr[0]
// let max = arr[0]
// let newArr = []


// for(let i = 0; i < arr.length; i++){

//     if(min > arr[i]){
//         min = arr[i]
//     } else {
//         max = arr[i]
//     }


// }
// newArr[0] = min
// newArr[1] = max
// console.log(newArr)
// console.log(arr)
// console.log(arr)
// let firstIndexArr = arr[0]
// let lastIndexArr = arr[arr.length - 1]
// arr[0] = lastIndexArr
// arr[arr.length - 1] = firstIndexArr
// console.log(arr)


// a = 20
// console.log(a)
// function hello(a){
//     a = 50
//     console.log(a)
//     return a
// }
// a = hello(a)
// console.log(a)
let answer = parseInt(prompt("Enter a number: "))

for(let i = 0; i <= answer; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz")
    } else if(i % 3 == 0){
        console.log("Fizz")
    } else if(i % 5 == 0){
        console.log("Buzz")
    } else {
        console.log(i)
    }
}