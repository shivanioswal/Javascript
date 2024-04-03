/* We are given an array of marks of students. Our Filter is the students that scored marks if 90+ */

const marks=[12,45,67,86,90,34];

const marks90=marks.filter((val)=>
{
    return val>=90;
});

console.log(marks90);