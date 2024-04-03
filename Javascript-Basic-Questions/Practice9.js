/*For a given array with marks of students --> [85,97,44,37,76,60].Find the average marks of the entire class */

let students = [85,97,44,37,76,60];
let sum =0;
for(let i of students)
{
     sum = i+sum;
}
console.log(`The average marks of the class is ${sum/students.length}`);