                    // EVENT HANDLING IN JS :-
// node.event =( ) => {
//     // handle here
// }
// btn.onclick
// .ondblclick

// let btn1 = document.querySelector("#btn1");
// btn1.onclick = ( ) => {
//     console.log ("btn1 was clicked");
//     let a = 25;
//     a ++;
//     console.log(a);} //26 answer ayega 


// div portion
// let box = document.querySelector("div");
// div.onmouseover = () => {
//     console.log("you are inside the box ");
// };

                        // EVENT OBJECTIVES TYPES  
// btn1.onclick = (evt) => {
//     console.log (evt);
//     console.log ( evt.type);
//     console.log (evt.target);
//     console.log (evt.clientX,evt.clientY);
// };



                        //EVENT LISTENERs
            //  node.addEventListener(event,callback) // adding something in an event
            //  node.removeEventListener(event,callback) // removing someeting in any event

       // event adding

// btn1.addEventListener("click",() => {
//     console.log("buton was clicked");
//     });

// btn1.addEventListener("click",() => {
//     console.log("buton was clicked - handeler 2");
//     });

// let div = document.querySelector("div");

      // event removing 

btn1.addEventListener("click",() => {
    console.log("buton was clicked - handeler 1");
    });

btn1.addEventListener("click",() => {
    console.log("buton was clicked - handeler 2");
    });

    btn1.addEventListener("click",() => {
    console.log("buton was clicked - handeler 3");
    });

    btn1.addEventListener("click",() => {
    console.log("buton was clicked - handeler 4");
    }); 

    // when remove some function use this
    btn1.removeEventListener("click",() => {
        console.log("buton was clicked - handeler 3");
        });
// the callback reference should be same to remove


