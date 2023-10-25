
const DOMSelectors = {
    button: document.getElementById("btn"),
    box: document.getElementById("container-box"),
    inputTitle: document.querySelector('inputTitle'),
    form: document.querySelector("#form"),
    firstName: document.querySelector(".first-name"),
    h3s:document.querySelectorAll("h3"),
    h4s:document.querySelectorAll("h4"),
    card:document.querySelector(".card"),
    inputImage: document.querySelector('link'),

    
};

function addCard(){
    document.querySelector(".card").insertAdjacentElement(
       ("afterend", 
        `<div class = "card">
        <h3 id ="title">${inputTitle}</h3>
        <img src=${inputImage} alt = "book cover"> </img>
    </div>`
    ))}

    DOMSelectors.button.addEventListener("click", function(event){
        DOMSelectors.inputTitle.value = " "; 
        DOMSelectors.inputImage.value = " "; 
        event.preventDefault();
        addCard();
    });

{/*  DOMSelectors.button.addEventListener("click", function(event){
    let input = DOMSelectors.input.value;
    DOMSelectors.box.insertAdjacentHTML("afterend", 
    <div class = "card">
        <h3 id ="title">${input}</h3>
        <img src=""
    </div>
    `<p> ${input} </p>`);
    DOMSelectors.input.value = ""; 
event.preventDefault();
console.log(DOMSelectors.input.value);
DOMSelectors.h3s.forEach(
    (el) => el.textContent = DOMSelectors.input.value
    );
}); */}
