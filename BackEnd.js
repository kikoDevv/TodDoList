const inputText = document.getElementById("input");
const addBtn = document.querySelector("#addBtn");
let item = document.getElementById("item");

addBtn.addEventListener("click", function(event) {
    event.preventDefault();  // Förhindrar siduppdatering
    läggTill();
});

function läggTill(){
    console.log("klicked!");
    item.innerText = inputText.value;
    console.log(item);
}
