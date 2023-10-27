
const DOMSelectors = {
    submitbtn: document.getElementById("#btn"),
    removebtn: document.getElementById("#Remove"),
    box: document.getElementById("container-box"),
    inputTitle: document.getElementById('#inputTitle'),
    inputAuthor: document.getElementById('#inputAuthor'),
    form: document.querySelector("#form"),
    h3s:document.getElementsByClassName(".title"),
    h4s:document.getElementsByClassName(".author"),
    card:document.getElementById("#card"),
    inputImage:document.getElementsByClassName('.cover'),

    
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
        <h3 class="title">${inputTitle}</h3>
        <h4 class="author">${inputImage}</h4>
        <img src=${inputImage}> </img>
    </div>`
    ))}
function clearFields(){
        document.querySelector(".card").insertAdjacentElement(
           "afterend", 
            `<div class = "card">
            <h3 class="title">" "</h3>
            <h4 class="author">" "</h4>
            <img src=" "> </img>
        </div>`
        )}


    DOMSelectors.submitbtn.addEventListener("submit", function(event){
         event.preventDefault();
         addCard();       
    }); 
    DOMSelectors.removebtn.addEventListener("click", function(event){
        event.preventDefault();
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
