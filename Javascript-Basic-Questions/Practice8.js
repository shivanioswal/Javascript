/* Prompt the user to enter their fullname. Generate a username for them based on the input. Start username with @, 
followed by their fullname and then the fullname length */

let name=prompt("Enter your Full name");
let concatName='@'+name+(name.length);
console.log(concatName);