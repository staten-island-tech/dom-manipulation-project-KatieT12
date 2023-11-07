
const DOMSelectors = {
    removebtn: document.querySelectorAll(".Remove"),
    submitbtn: document.getElementById("submit"),
    inputTitle: document.getElementById('inputTitle'),
    inputAuthor: document.getElementById('inputAuthor'),
    inputImage:document.getElementById('inputImage'),
    h3s:document.getElementsByClassName("title"),
    h4s:document.getElementsByClassName("author"),
    card:document.querySelector(".card"),
    form: document.querySelector("form"),
// if using querySelectors ->
    // id use period
    // class use tag
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
    DOMSelectors.card.insertAdjacentHTML(
       "afterend", 
        `<div class = "card">
        <h3 class="title">${DOMSelectors.inputTitle.value}</h3>
        <h4 class="author">${DOMSelectors.inputAuthor.value}</h4>
        <img src=${DOMSelectors.inputImage.value}> </img>
        <button type ="button" class="Remove">DELETE BOOK</button>
    </div>`

    )};
    function deleteCard(){
        let removebuttons = document.querySelectorAll(".Remove")
        removebuttons.forEach((element) => element.addEventListener('click', function(){
                element.parentElement.remove();
            }));
         };
        
    function clearFields(){
        inputTitle.value = "";
        inputAuthor.value = "";
        inputImage.value="";
    };
    DOMSelectors.form.addEventListener("submit", function(event){
         event.preventDefault();
         addCard();   
         clearFields();
         deleteCard();  
    }); 
    
    /* const element = document.getElementById("container"); */
  /*   const removebtn = document.querySelectorAll(".Remove");
    const card = document.querySelector(".card");
    removebtn
    .forEach(element => {
        element.addEventListener("click", deleteCard);
}); */

    

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
