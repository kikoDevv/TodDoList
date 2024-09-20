const inputText = document.getElementById("input");
const addBtn = document.querySelector("#addBtn");
let item = document.getElementById("item");
let array = [];

addBtn.addEventListener("click", function(event) {
    event.preventDefault();  // Förhindrar siduppdatering
    läggTill();
});

function läggTill(){
    console.log("klicked!");
    //item.innerText = inputText.value;
    array.push(inputText.value);
    item.innerHTML = array;
    console.log(array);
}
