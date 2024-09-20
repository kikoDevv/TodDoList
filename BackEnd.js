const inputText = document.getElementById("input");
const addBtn = document.querySelector("#addBtn");
let items = document.getElementById("todoList");
//let array = [];

addBtn.addEventListener("click", function (event) {
    event.preventDefault();  // Förhindrar siduppdatering
    läggTill();
});

function läggTill() {
    const läggTill = document.createElement("li");
    läggTill.textContent = inputText.value;
    läggTill.classList.add("todoItem");
    items.appendChild(läggTill);
    // tabort knappen ska vara här nere
    const tabortBtn = document.createElement("button");
    tabortBtn.textContent = "ta bort";
    tabortBtn.addEventListener("click", function () {
        items.removeChild(läggTill);
    });
    läggTill.appendChild(tabortBtn);
    inputText.value = "";
}