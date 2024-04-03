/* DOM - Create a new button element. Give it a text "Click me !", background color red and text color white.
Insert the button as the first element inside the body tag */

let button = document.createElement("button");
button.innerText="Click me !";
button.style.backgroundColor="red";
button.style.color="white";
let body = document.querySelector("body");
body.prepend(button);