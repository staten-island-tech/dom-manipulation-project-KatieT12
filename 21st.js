const DOMSelectors = {
    button: document.getElementById("btn"),
    box: document.getElementById("container-box"),
    input: document.querySelector('input'),
};
/* const cat = "meow";
DOMSelectors.box.insertAdjacentHTML("afterend",
`<h>We are a ${cat}</h1>`); */
DOMSelectors.button.addEventListener("click", function(){
    let input = DOMSelectors.input.value;
    DOMSelectors.box.insertAdjacentHTML("afterend", 
    `<p> ${input} </p>`);
    DOMSelectors.input.value = "";
});
