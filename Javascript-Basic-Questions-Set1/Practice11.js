/*Create an array to store companies --> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix" 
a) Remove the first company from the array
b) Remove Uber and add Ola in its place
c) Add amazon at the end
d) Remove
*/

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// a) Remove the first company from the array
companies.shift(0);
console.log(`Removing the first company from the array  ${companies}`);

//b) Remove Uber and add Ola in its place
companies.splice(1,1,"Ola");
console.log(`Removing the Uber and adding Ola in the array  ${companies}`);

//c) Add amazon at the end
companies.push("Amazon");
console.log(`Adding amazon at the end of array  ${companies}`);

