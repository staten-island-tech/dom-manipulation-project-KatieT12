const form = document.querySelector("#form");
console.log(form);
const DOMSelectors = {
    form1: document.querySelector("#form"),
    firstName: document.querySelector(".first-name"),
    h2s:document.querySelectorAll("h2"),
    // select the text box
    // select all the h2s in one property
};
/* console.log(DOMSelectors.h2s); */
DOMSelectors.form1.addEventListener("submit", function(event){
event.preventDefault();
console.log(DOMSelectors.firstName.value);
DOMSelectors.h2s.forEach(
    (el) => el.textContent = DOMSelectors.firstName.value
    );
});
