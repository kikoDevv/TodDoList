const inputText = document.getElementById("#input");
const addBtn = document.querySelector("#addBtn");
let item = document.getElementById("#item");

addBtn.addEventListener("click", läggTill);

function läggTill(){
    console.log("klicked!");
    item.innerText = inputText.value;
    console.log(item);
}
