
const DOMSelectors = {
    button: document.getElementById("btn"),
    box: document.getElementById("container-box"),
    inputTitle: document.querySelector('inputTitle'),
    inputAuthor: document.querySelector('inputAuthor'),
    form: document.querySelector("#form"),
    firstName: document.querySelector(".first-name"),
    h3s:document.querySelectorAll("h3"),
    h4s:document.querySelectorAll("h4"),
    card:document.querySelector("card"),
    inputImage:document.querySelector('link'),

    
};

/* DOMSelectors.button.addEventListener("click", function(event){
    event.preventDefault();
    console.log(DOMSelectors.inputTitle);
    console.log(DOMSelectors.inputImage.value);
    console.log(DOMSelectors.inputAuthor.value);
    DOMSelectors.h3s.forEach(
        (el) => el.textContent = DOMSelectors.inputTitle.value
        );
    DOMSelectors.h4s.forEach(
        (el) => el.textContent = DOMSelectors.inputAuthor.value
        );
    DOMSelectors.h4s.forEach(
        (el) => el.textContent = DOMSelectors.inputImage.value
        );
        DOMSelectors.inputTitle.value = " "; 
        DOMSelectors.inputAuthor.value = " "; 
        DOMSelectors.inputImage.value = " "; 
    });  */
///

function addCard(){
    document.querySelector("card").insertAdjacentElement(
       ("beforeend", 
        `<div class = "card">
        <h3>${inputTitle}</h3>
        <h4>${inputImage}</h4>
        <img src=${inputImage} alt = "book cover"> </img>
    </div>`
    ))}


    DOMSelectors.button.addEventListener("submit", function(){
        preventDefault();
        DOMSelectors.inputTitle.value = " "; 
        DOMSelectors.inputImage.value = " "; 
        DOMSelectors.inputAuthor.value = " "; 
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
