str1="javascript";
str2="Language";

let str3=str1.concat(str2);
console.log(str3);

//push and pop : changes occurs in the same array.

let array1=[10,20,30,40,50];

let array2=[60,70,80,90,100];

// array3=array1.concat(array2);
// console.log(array3);

// array1.unshift(1);
// console.log(array1); //1,10,20,30,40,50

// array1.shift();
// console.log(array1); //10,20,30,40,50

// array1.shift();
// console.log(array1);//20,30,40,50

/*  push - adds to last
    pop - deletes from the end
    unshift - add to start
    shift - delete from start
*/


//console.log(array1.slice(0,2));
array1.splice(2,1,101,102);
console.log(array1);
//splice(add,remove,replace)
