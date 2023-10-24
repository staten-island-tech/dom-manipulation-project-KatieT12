
const DOMSelectors = {
    button: document.getElementById("btn"),
    box: document.getElementById("container-box"),
    input: document.querySelector('input'),
    form: document.querySelector("#form"),
    firstName: document.querySelector(".first-name"),
    h3s:document.querySelectorAll("h3"),
    h4s:document.querySelectorAll("h4"),
    
};
/* const cat = "meow";
DOMSelectors.box.insertAdjacentHTML("afterend",
`<h>We are a ${cat}</h1>`); */

DOMSelectors.button.addEventListener("click", function(event){
    let input = DOMSelectors.input.value;
 /*    DOMSelectors.box.insertAdjacentHTML("afterend", 
    `<p> ${input} </p>`);
    DOMSelectors.input.value = ""; */
event.preventDefault();
console.log(DOMSelectors.input.value);
DOMSelectors.h3s.forEach(
    (el) => el.textContent = DOMSelectors.input.value
    );
}); 

////
