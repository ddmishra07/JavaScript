                        // DOM Manipulation

// Attributes
//  1 getAttribute(attr) // to get the attribute value
//  2 setAttribute (attr,value)// to set the attribute value

//  style
// node.style


                    // THIS ATTRIBUTES ARE TO getAttributes:-
// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// // let para = document.querySelector("p");
// // console.log(para.getAttribute("class"));

// let name = div.getAttribute("name");
// console.log(name);


                    // // NOW THIS ATTRIBUTES ARE TO setAttribute:-
// let para = document.querySelector("p");
// console.log(para.setAttribute("class","newClass")); 

                     // THIS IS USE TO STYLE YOUR NODE:-
// div.style.backgroundColor = 'green';
// div.style.fontSize ="25px";
// div.innerText = "hello";
// // div.style.visibility = "hidden";

// nothing for change just change in camel cots normal css 
// ex font-size ---> fontSize

                     // CREATING NEW ELEMENTS 
// let newBtn = document.createElement("button");
// newBtn.innerText = "click me"; // this can be add inner text i any element
// console.log(newBtn);
 

                       // DOM MANIPULATION

       // INSERT elements :- 

// let el =document.createElement("Div   ")

// node.append(el )
// node.prepend(el )
// node.before(el )
// node.after(el)

       // // DELETE element
// node.remove()

    // EXAMPLE OF EACH ELEMENTS  ADDING :-
 
// let div = document.querySelector("div");
// div.append(newBtn); // in the box at the end use 

// let div = document.querySelector("div");
// div.prepend(newBtn); // in the box at starting use

// let div = document.querySelector("div");
// div.before(newBtn); // upper side of the box  use

// let div = document.querySelector("div");
// div.after(newBtn); // lower side of the box we use

// let div = document.querySelector("p");
// div.after(newBtn); // in this using behind the para .

// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i>Hi,i am new! </i>";
// document.querySelector("body").prepend(newHeading); 

        // EXAMPLE OF DELETING ELEMENT IN DOM :-
// let para = document.querySelector("p");
// para.remove();