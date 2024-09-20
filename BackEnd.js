const inputText = document.getElementById("input");
const addBtn = document.querySelector("#addBtn");
let items = document.getElementById("todoList");

addBtn.addEventListener("click", function (event) {
    event.preventDefault();  // Förhindrar siduppdatering
    läggTill();
});

function läggTill() {
    const läggTill = document.createElement("li");
    läggTill.textContent = inputText.value;
    läggTill.classList.add("todoItem");
    if (inputText.value !== "") {
        items.appendChild(läggTill);
        //här gnereras gjort knappen.
        
        const gjortBtn = document.createElement("button");
        gjortBtn.textContent = "done"
        läggTill.appendChild(gjortBtn);
        gjortBtn.classList.add("gjortBtn")
        // event listener till gjort knappen.
        gjortBtn.addEventListener("click", function(){
            console.log("done klicked");
            läggTill.classList.toggle("done");
        });
        //Här genereras ta bort knapp i värje ny element i todo list.
        const tabortBtn = document.createElement("button");
        tabortBtn.textContent = "ta bort";
        läggTill.appendChild(tabortBtn);
        tabortBtn.classList.add("taborBtn")
        tabortBtn.addEventListener("click", function () {
            items.removeChild(läggTill);
        });
    }
    // tabort knappen ska vara här nere
    inputText.value = "";
}