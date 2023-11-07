const DOMSelectors = {
    removebtn: document.querySelectorAll(".Remove"),
    submitbtn: document.getElementById("submit"),
    inputTitle: document.getElementById("inputTitle"),
    inputAuthor: document.getElementById("inputAuthor"),
    inputImage:document.getElementById("inputImage"),
    form: document.getElementsByClassName("form"),
    h3s:document.getElementsByClassName("title"),
    h4s:document.getElementsByClassName("author"),
    card:document.querySelector(".card"),
// if using querySelectors ->
    // id use period
    // class use tag
};

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

function deleteCard(){
       this.parentElement.remove();
        }; 
        
    DOMSelectors.submitbtn.addEventListener("click", function(event){
         event.preventDefault();
         addCard();     
    }); 
    
    /* const element = document.getElementById("container"); */
    const removebtn = document.querySelectorAll(".Remove");
    const card = document.querySelector(".card");
    removebtn
    .forEach(element => {
        element.addEventListener("click", deleteCard);
});

// WHAT YOU NEED
//const Album = makeAlbum()
//addCard(Album)
//clearFields()
//addRemoveButtons -> addEventlistener to each query, forEach
//dont use onclick 
