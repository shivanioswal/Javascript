/* Create a toggle button that changes the screen from dark-mode when clicked and light-mode when clicked again */

let modeBtn =document.querySelector("#mode");
let currMode="light";

modeBtn.addEventListener("click",()=>
{
    if(currMode==="light")
    {
        currMode="dark";
        document.querySelector("body").style.backgroundColor="black";
    }else
    {
        currMode="light";
        document.querySelector("body").style.background="white";
    }
    console.log(currMode);
});