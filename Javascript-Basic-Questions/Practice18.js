/* Create 3 divs with common class name - "box". Access them and add some unique text to each of them. */
let div=document.querySelectorAll(".box");
div[0].innerText="New unique value 1";
div[1].innerText="New unique value 2";
div[2].innerText="New unique value 3";

//OR

/*
    let index=0;
    for(divs of div)
    {
        div.innerText=`new unique value ${index}`;
        index++;
    }
*/
