/* Create a arrow function using the  that takes a string as an argument and returns the number of vowels in the string */

const vowel=(message)=>
{
    let count=0;
    for(let i=0;i<message.length;i++)
    {
        if(message.charAt(i)==='a'|| message.charAt(i)==='e'|| message.charAt(i)==='i'|| message.charAt(i)==='o'|| message.charAt(i)==='u')
        {
             count=count+1;
        }
    }
    console.log(`There are ${count} vowels in the string`);

}

vowel("HelloWorld");