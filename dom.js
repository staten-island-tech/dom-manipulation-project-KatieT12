 /*const form = document.querySelector("#form");
console.log(form);
const DOMSelectors = {
    form: document.querySelector("#form"),
    firstName: document.querySelector(".first-name"),
    h2s:document.querySelectorAll("h2"),
    // select the text box
    // select all the h2s in one property
};
console.log(DOMSelectors.h2s); 
DOMSelectors.form.addEventListener("submit", function(event){
event.preventDefault();
console.log(DOMSelectors.firstName.value);
DOMSelectors.h2s.forEach(
    (el) => el.textContent = DOMSelectors.firstName.value
    );
}); 

/*const DOMSelectors = {
    button:document.getElementById("btn"),
    text:document.querySelector("#text"),
    input:document.querySelector('#input'),
};
DOMSelectors.button.addEventListener("click", function () {
    let input = DOMSelectors.input.value;
    DOMSelectors.box.insertAdjacentHTML("afterend", '<p>'+ input +'</p>');

}); */
//const Album = makeAlbum()
//addCard(Album)
//clearFields()
//addRemoveButtons -> addEventlistener to each query, forEach
//dont use onclick 

// remove button, put after adding all the cards
function remove(){
    let btns = document.querySelectorAll('button');
    btns.forEach((button) => button.addEventListener('click', function(event){
        console.log(event.target.parentElement);
        /*console.log(event.target.parentElement.parentelement);*/
    })
    );
}
remove();