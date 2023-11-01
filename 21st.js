
const DOMSelectors = {
    removebtn: document.getElementById("Remove"),
    submitbtn: document.getElementById("submit"),
    inputTitle: document.getElementById('inputTitle'),
    inputAuthor: document.getElementById('inputAuthor'),
    inputImage:document.getElementById('inputImage'),
    form: document.getElementsByClassName("form"),
    h3s:document.getElementsByClassName("title"),
    h4s:document.getElementsByClassName("author"),
    card:document.querySelector(".card"),
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
    document.querySelector(".card").insertAdjacentHTML(
       "afterend", 
        `<div class = "card" id=container>
        <h3 class="title">${DOMSelectors.inputTitle.value}</h3>
        <h4 class="author">${DOMSelectors.inputAuthor.value}</h4>
        <img src=${DOMSelectors.inputImage.value}> </img>
        <button type ="button" class="Remove">Remove Book</button>
    </div>`

    )};

/*function deleteCard(){
        document.querySelector("card").insertAdjacentHTML(
           "afterend", 
            `<div class = "card">
            <h3 class="title">"Title"</h3>
            <h4 class="author">"Author"</h4>
            <img src=" "> </img>
        </div>`
        )}; */
        
    DOMSelectors.submitbtn.addEventListener("click", function(event){
         event.preventDefault();
         addCard();     
    }); 
    
    /* const element = document.getElementById("container"); */
    const removebtn = document.getElementById("Remove");
    removebtn.addEventListener("click", function(){
        DOMSelectors.card.remove();
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
