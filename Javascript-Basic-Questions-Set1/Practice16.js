/* Take a number n as input from the user. Create an array of numbers from 1 to n. Use the reduce method 
to calculate sum of all numbers in the array. Use the reduce method to calculate product of all numbers in the array */

let n = prompt("Enter a number :");
let arr=[];
    for(let i=1;i<=n;i++)
    {
        arr[i-1]=i; //1(0),2(1)...so on

    }

console.log(arr);

const output=arr.reduce((result,current)=>
{
    
    return result+current;
})
console.log(output);


const output2 =arr.reduce((result,current)=>
{
    return result*current;
})
console.log(output2);
