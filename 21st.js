
const DOMSelectors = {
    submitbtn: document.getElementById("#btn"),
    removebtn: document.getElementById("#Remove"),
    box: document.getElementById("container-box"),
    inputTitle: document.querySelector('inputTitle'),
    inputAuthor: document.querySelector('inputAuthor'),
    form: document.querySelector("#form"),
    h3s:document.querySelectorAll("h3"),
    h4s:document.querySelectorAll("h4"),
    card:document.querySelector("card"),
    inputImage:document.querySelector('link'),

    
};

/*DOMSelectors.submitbtn.addEventListener("click", function(){
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
    });  */
///

function addCard(){
    document.querySelector(".card").insertAdjacentHTML(
       ("afterend", 
        `<div class = "card">
        <h3>${inputTitle}</h3>
        <h4>${inputImage}</h4>
        <img src=${inputImage}> </img>
    </div>`
    ))}
function clearFields(){
        document.querySelector(".card").insertAdjacentElement(
           ("afterend", 
            `<div class = "card">
            <h3>" "</h3>
            <h4>" "</h4>
            <img src=" "> </img>
        </div>`
        ))}


    DOMSelectors.submitbtn.addEventListener("submit", function(event){
        addCard();
        event.preventDefault();
        
    }); 
    DOMSelectors.removebtn.addEventListener("click", function(){
        clearFields();
    }); 

/*  DOMSelectors.button.addEventListener("click", function(event){
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
}); */
// WHAT YOU NEED
//const Album = makeAlbum()
//addCard(Album)
//clearFields()
//addRemoveButtons -> addEventlistener to each query, forEach
//dont use onclick 
