// Creating a toggle button that changes the screen to Dark Mode when Clicked & light-mode when clicked again. 
let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let curMode = "light"; // switch to dark

modeBtn.addEventListener("click",() => {
//     if
//     (currMode === "light"){ 
//      curMode === "dark";
//      document.querySelector("body").classList.add("dark"); // removing this instead using css .style.backgroundColor ="black";
//     } // this is use to select body and change the whole page color 

//     else 
//     { 
//     currMode = "light";
//     document.querySelector("body").style.backgroundColor = "white";
//     }
//     console.log(curMode);
// });
if  ( curMode === "light")
    {
    curMode = "dark";
    body.classList.add("dark");
}
else {
    curMode = "light";
    body.classList.add ("light");
}
console.log (currMode);
});