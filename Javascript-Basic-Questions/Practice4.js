/* Write a code which can give grades to student according to their scores 
80-100 --> A
70-89 --> B
60-69 --> C
50-59 --> D
0-49 -->F
*/

let marks = prompt("Please enter your total score");

if(marks>=80 && marks<=100)
{
    console.log("A");
}
else if(marks>=70 && marks<=89)
{
    console.log("B");
}
else if(marks>=60 && marks<=69)
{
    console.log("C");
}
else if(marks>=50 && marks<=59)
{
    console.log("D");
}
else
{
    console.log("Failed");
}